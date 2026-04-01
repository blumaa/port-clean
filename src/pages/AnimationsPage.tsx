import { GALLERY_ANIMATIONS } from '../data/animations'
import { LazyAnimationCard } from '../components/animations/LazyAnimationCard'

function AnimationsPage() {
  return (
    <section>
      <h2>Animations</h2>
      <div className="animation-grid">
        {GALLERY_ANIMATIONS.map((entry) => (
          <LazyAnimationCard key={entry.name} entry={entry} />
        ))}
      </div>
    </section>
  )
}

export { AnimationsPage }
