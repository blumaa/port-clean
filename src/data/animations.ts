import type { ComponentType } from 'react'
import { Lighthouse } from '../components/animations/Lighthouse'
import { RustlingGrass } from '../components/animations/RustlingGrass'
import { AnimatedMoon } from '../components/animations/AnimatedMoon'
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

export interface AnimationEntry {
  name: string
  exportName: string
  component: ComponentType
  loader: () => Promise<{ [key: string]: ComponentType }>
  tvOnly?: boolean
}

export const ANIMATIONS: AnimationEntry[] = [
  { name: 'Lighthouse', exportName: 'Lighthouse', component: Lighthouse, loader: () => import('../components/animations/Lighthouse') },
  { name: 'Rustling Grass', exportName: 'RustlingGrass', component: RustlingGrass, loader: () => import('../components/animations/RustlingGrass') },
  { name: 'Animated Moon', exportName: 'AnimatedMoon', component: AnimatedMoon, loader: () => import('../components/animations/AnimatedMoon'), tvOnly: true },
  { name: 'Animated Eyeball', exportName: 'AnimatedEyeball', component: AnimatedEyeball, loader: () => import('../components/animations/AnimatedEyeball') },
  { name: 'Watching Eyes', exportName: 'AnimatedEyeballWatching', component: AnimatedEyeballWatching, loader: () => import('../components/animations/AnimatedEyeballWatching') },
  { name: 'Noir Car Chase', exportName: 'NoirCarChase', component: NoirCarChase, loader: () => import('../components/animations/NoirCarChase') },
  { name: 'Alien Moon', exportName: 'AlienMoon', component: AlienMoon, loader: () => import('../components/animations/AlienMoon') },
  { name: 'Animated Lamp', exportName: 'AnimatedLamp', component: AnimatedLamp, loader: () => import('../components/animations/AnimatedLamp') },
  { name: 'Bird', exportName: 'Bird', component: Bird, loader: () => import('../components/animations/Bird') },
  { name: 'Loading Airplane', exportName: 'AnimatedLoadingAirplane', component: AnimatedLoadingAirplane, loader: () => import('../components/animations/AnimatedLoadingAirplane') },
  { name: 'Octo Dude', exportName: 'AnimatedOctoDude', component: AnimatedOctoDude, loader: () => import('../components/animations/AnimatedOctoDude') },
  { name: 'Nuclear Physics', exportName: 'NuclearPhysics', component: NuclearPhysics, loader: () => import('../components/animations/NuclearPhysics') },
  { name: 'Bus', exportName: 'Bus', component: Bus, loader: () => import('../components/animations/Bus') },
  { name: 'Padel Point Berlin', exportName: 'PadelPointBerlin', component: PadelPointBerlin, loader: () => import('../components/animations/PadelPointBerlin') },
]

export const GALLERY_ANIMATIONS = ANIMATIONS.filter((a) => !a.tvOnly)
