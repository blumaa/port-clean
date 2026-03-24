import { type ComponentType } from 'react'
import { Lighthouse } from '../components/animations/Lighthouse'
import { RustlingGrass } from '../components/animations/RustlingGrass'
import { AnimatedEyeball } from '../components/animations/AnimatedEyeball'
import { AnimatedEyeballWatching } from '../components/animations/AnimatedEyeballWatching'
import { NoirCarChase } from '../components/animations/NoirCarChase'
import { AlienMoon } from '../components/animations/AlienMoon'
import { AnimatedLamp } from '../components/animations/AnimatedLamp'
import { Bird } from '../components/animations/Bird'
import { AnimatedLoadingAirplane } from '../components/animations/AnimatedLoadingAirplane'
import { AnimatedOctoDude } from '../components/animations/AnimatedOctoDude'
import { NuclearPhysics } from '../components/animations/NuclearPhysics'
import { Bus } from '../components/animations/Bus'
import { PadelPointBerlin } from '../components/animations/PadelPointBerlin'

const ANIMATIONS: { component: ComponentType; name: string }[] = [
  { component: Lighthouse, name: 'Lighthouse' },
  { component: AnimatedEyeballWatching, name: 'Watching Eyes' },
  { component: PadelPointBerlin, name: 'Padel Point Berlin' },
  { component: RustlingGrass, name: 'Rustling Grass' },
  { component: AlienMoon, name: 'Alien Moon' },
  { component: AnimatedLamp, name: 'Animated Lamp' },
  { component: Bus, name: 'Bus' },
  { component: Bird, name: 'Bird' },
  { component: AnimatedEyeball, name: 'Animated Eyeball' },
  { component: AnimatedLoadingAirplane, name: 'Loading Airplane' },
  { component: AnimatedOctoDude, name: 'Octo Dude' },
  { component: NuclearPhysics, name: 'Nuclear Physics' },
  { component: NoirCarChase, name: 'Noir Car Chase' },
]

function AnimationsPage() {
  return (
    <section>
        <h2>Animations</h2>
        <div className="animation-grid">
          {ANIMATIONS.map((anim) => {
            const Component = anim.component
            return (
              <div key={anim.name} className="animation-card">
                <div className="animation-card-content">
                  <Component />
                </div>
                <div className="animation-card-label">{anim.name}</div>
              </div>
            )
          })}
        </div>
      </section>
  )
}

export { AnimationsPage }
