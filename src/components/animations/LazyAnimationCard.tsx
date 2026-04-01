import { useRef, useState, useEffect, type ComponentType } from 'react'
import type { AnimationEntry } from '../../data/animations'

function LazyAnimationCard({ entry }: { entry: AnimationEntry }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [LoadedComponent, setLoadedComponent] = useState<ComponentType | null>(null)

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
    let cancelled = false
    entry.loader().then((mod) => {
      if (!cancelled) {
        setLoadedComponent(() => mod[entry.exportName] as ComponentType)
      }
    })
    return () => { cancelled = true }
  }, [isVisible, entry])

  return (
    <div ref={ref} className="animation-card">
      <div className="animation-card-content">
        {LoadedComponent ? (
          <LoadedComponent />
        ) : (
          <div className="skeleton" style={{ width: '100%', height: '100%' }} />
        )}
      </div>
      <div className="animation-card-label">{entry.name}</div>
    </div>
  )
}

export { LazyAnimationCard }
