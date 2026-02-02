import Image from 'next/image'
import { isImageFitCover, isImageSlide, useLightboxProps, useLightboxState } from 'yet-another-react-lightbox'

const isNextJsImage = (slide: any) => {
  return isImageSlide(slide) && typeof slide.width === 'number' && typeof slide.height === 'number'
}

const LightboxImage = ({ slide, offset, rect }: { slide: any; offset: number; rect: { width: number; height: number } }) => {
  const {
    on: { click },
    carousel: { imageFit },
  } = useLightboxProps()

  const { currentIndex } = useLightboxState()

  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit)

  if (!isNextJsImage(slide)) return undefined

  const width = !cover ? Math.round(Math.min(rect.width, (rect.height / slide.height) * slide.width)) : rect.width

  const height = !cover ? Math.round(Math.min(rect.height, (rect.width / slide.width) * slide.height)) : rect.height

  return (
    <Image
      alt="img"
      src={slide}
      loading="eager"
      draggable={false}
      placeholder={slide.blurDataURL ? 'blur' : undefined}
      onClick={offset === 0 ? () => click?.({ index: currentIndex }) : undefined}
    />
  )
}

export default LightboxImage
