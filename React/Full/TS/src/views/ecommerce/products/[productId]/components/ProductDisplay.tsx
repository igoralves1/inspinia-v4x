import clsx from 'clsx'
import { Button, Card, CardBody, Carousel, CarouselItem, Col } from 'react-bootstrap'
import { useCallback, useMemo, useState } from 'react'
import { TbCircleDashedX, TbPencil } from 'react-icons/tb'

import product1 from '@/assets/images/products/single-1.png'
import product2 from '@/assets/images/products/single-2.png'
import product3 from '@/assets/images/products/single-3.png'
import product4 from '@/assets/images/products/single-4.png'

const ProductDisplay = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  const handleSlideChange = useCallback((index: number) => {
    setActiveSlide(index)
  }, [])

  const slides = useMemo(() => [product1, product2, product3, product4], [])

  return (
    <Col xl={4}>
      <Card className="card-top-sticky border-0">
        <CardBody className="p-0">
          <Carousel
            activeIndex={activeSlide}
            fade
            className="bg-light bg-opacity-25 border border-light border-dashed rounded-3"
            controls={false}
            indicators={false}>
            {slides.map((index, i) => (
              <CarouselItem key={i} className="text-center">
                <img src={index} alt={`product-${i + 1}`} width={576} height={576} className="img-fluid" style={{ minWidth: '100%' }} />
              </CarouselItem>
            ))}
          </Carousel>
          <div className="carousel-indicators m-0 mt-3 d-lg-flex d-none position-static h-100 rounded gap-2">
            {slides.map((index, i) => (
              <button
                type="button"
                key={i}
                onClick={() => handleSlideChange(i)}
                aria-label={`Slide ${i + 1}`}
                className={clsx('h-auto rounded bg-light-subtle border')}
                style={{
                  width: 'auto !important',
                  opacity: i === activeSlide ? 1 : 0.5,
                  zIndex: i === activeSlide ? 1 : 0,
                }}>
                <img src={index} className="d-block avatar-xl" alt="indicator-img" />
              </button>
            ))}
          </div>
          <div className="text-center my-3">
            <Button variant="light" className="me-1">
              <TbPencil className="fs-lg me-1" /> Edit
            </Button>
            <Button variant="danger">
              <TbCircleDashedX className="fs-lg me-1" /> Delisting
            </Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ProductDisplay
