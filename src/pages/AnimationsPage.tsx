import { GALLERY_ANIMATIONS } from '../data/animations'
import { LazyAnimationCard } from '../components/animations/LazyAnimationCard'
import { PageMeta } from '../components/PageMeta'

function AnimationsPage() {
  return (
    <section>
      <PageMeta
        title="SVG Animations | Aaron Blum"
        description="Interactive SVG animations built with GSAP by Aaron Blum."
        path="/animations"
      />
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
