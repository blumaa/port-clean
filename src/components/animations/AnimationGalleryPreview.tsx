import { GALLERY_ANIMATIONS } from '../../data/animations'
import { Carousel } from './Carousel'

function AnimationGalleryPreview() {
  return (
    <Carousel
      items={GALLERY_ANIMATIONS}
      renderItem={(item) => {
        const Component = item.component
        return <Component />
      }}
    />
  )
}

export { AnimationGalleryPreview }
