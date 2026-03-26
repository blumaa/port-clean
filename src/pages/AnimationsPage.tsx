import { lazy, Suspense, useRef, useState, useEffect, type ComponentType } from 'react'

interface AnimationEntry {
  loader: () => Promise<{ [key: string]: ComponentType }>
  exportName: string
  name: string
}

const ANIMATIONS: AnimationEntry[] = [
  { loader: () => import('../components/animations/Lighthouse'), exportName: 'Lighthouse', name: 'Lighthouse' },
  { loader: () => import('../components/animations/AnimatedEyeballWatching'), exportName: 'AnimatedEyeballWatching', name: 'Watching Eyes' },
  { loader: () => import('../components/animations/PadelPointBerlin'), exportName: 'PadelPointBerlin', name: 'Padel Point Berlin' },
  { loader: () => import('../components/animations/RustlingGrass'), exportName: 'RustlingGrass', name: 'Rustling Grass' },
  { loader: () => import('../components/animations/AlienMoon'), exportName: 'AlienMoon', name: 'Alien Moon' },
  { loader: () => import('../components/animations/AnimatedLamp'), exportName: 'AnimatedLamp', name: 'Animated Lamp' },
  { loader: () => import('../components/animations/Bus'), exportName: 'Bus', name: 'Bus' },
  { loader: () => import('../components/animations/Bird'), exportName: 'Bird', name: 'Bird' },
  { loader: () => import('../components/animations/AnimatedEyeball'), exportName: 'AnimatedEyeball', name: 'Animated Eyeball' },
  { loader: () => import('../components/animations/AnimatedLoadingAirplane'), exportName: 'AnimatedLoadingAirplane', name: 'Loading Airplane' },
  { loader: () => import('../components/animations/AnimatedOctoDude'), exportName: 'AnimatedOctoDude', name: 'Octo Dude' },
  { loader: () => import('../components/animations/NuclearPhysics'), exportName: 'NuclearPhysics', name: 'Nuclear Physics' },
  { loader: () => import('../components/animations/NoirCarChase'), exportName: 'NoirCarChase', name: 'Noir Car Chase' },
]

function LazyAnimationCard({ entry }: { entry: AnimationEntry }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [LazyComponent, setLazyComponent] = useState<ReturnType<typeof lazy> | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    const Component = lazy(() =>
      entry.loader().then((mod) => ({ default: mod[entry.exportName] as ComponentType }))
    )
    setLazyComponent(() => Component)
  }, [isVisible, entry])

  return (
    <div ref={ref} className="animation-card">
      <div className="animation-card-content">
        {LazyComponent ? (
          <Suspense fallback={<div className="skeleton" style={{ width: '100%', height: '100%' }} />}>
            <LazyComponent />
          </Suspense>
        ) : (
          <div className="skeleton" style={{ width: '100%', height: '100%' }} />
        )}
      </div>
      <div className="animation-card-label">{entry.name}</div>
    </div>
  )
}

function AnimationsPage() {
  return (
    <section>
      <h2>Animations</h2>
      <div className="animation-grid">
        {ANIMATIONS.map((entry) => (
          <LazyAnimationCard key={entry.name} entry={entry} />
        ))}
      </div>
    </section>
  )
}

export { AnimationsPage }
