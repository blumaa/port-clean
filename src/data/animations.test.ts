import { ANIMATIONS, GALLERY_ANIMATIONS } from './animations'

describe('ANIMATIONS', () => {
  it('has no duplicate names', () => {
    const names = ANIMATIONS.map((a) => a.name)
    expect(new Set(names).size).toBe(names.length)
  })

  it('has no duplicate exportNames', () => {
    const exportNames = ANIMATIONS.map((a) => a.exportName)
    expect(new Set(exportNames).size).toBe(exportNames.length)
  })

  it('every entry has required fields', () => {
    for (const entry of ANIMATIONS) {
      expect(entry.name).toBeTruthy()
      expect(entry.exportName).toBeTruthy()
      expect(entry.component).toBeDefined()
      expect(typeof entry.loader).toBe('function')
    }
  })

  it('includes AnimatedMoon as tvOnly', () => {
    const moon = ANIMATIONS.find((a) => a.exportName === 'AnimatedMoon')
    expect(moon).toBeDefined()
    expect(moon!.tvOnly).toBe(true)
  })

  it('GALLERY_ANIMATIONS excludes tvOnly entries', () => {
    expect(GALLERY_ANIMATIONS.every((a) => !a.tvOnly)).toBe(true)
    expect(GALLERY_ANIMATIONS.length).toBe(ANIMATIONS.length - 1)
  })
})
