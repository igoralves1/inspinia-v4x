import PageBreadcrumb from '@/components/PageBreadcrumb'
import { useMemo, useState } from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, FormControl, Row } from 'react-bootstrap'
import { LuSearch } from 'react-icons/lu'
import { RowsPhotoAlbum } from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'

import img1 from '@/assets/images/gallery/1.jpg'
import img10 from '@/assets/images/gallery/10.jpg'
import img11 from '@/assets/images/gallery/11.jpg'
import img12 from '@/assets/images/gallery/12.jpg'
import img14 from '@/assets/images/gallery/14.jpg'
import img2 from '@/assets/images/gallery/2.jpg'
import img3 from '@/assets/images/gallery/3.jpg'
import img4 from '@/assets/images/gallery/4.jpg'
import img5 from '@/assets/images/gallery/5.jpg'
import img6 from '@/assets/images/gallery/6.jpg'
import img7 from '@/assets/images/gallery/7.jpg'
import img8 from '@/assets/images/gallery/8.jpg'
import img9 from '@/assets/images/gallery/9.jpg'

const slides = [
  { asset: img1, width: 640, height: 427, category: 'beautiful' },
  { asset: img2, width: 640, height: 360, category: 'nature' },
  { asset: img3, width: 640, height: 854, category: 'beautiful' },
  { asset: img4, width: 640, height: 640, category: 'nature' },
  { asset: img5, width: 640, height: 960, category: 'travel' },
  { asset: img6, width: 640, height: 800, category: 'nature' },
  { asset: img7, width: 640, height: 425, category: 'city' },
  { asset: img8, width: 640, height: 480, category: 'city' },
  { asset: img9, width: 640, height: 960, category: 'travel' },
  { asset: img10, width: 640, height: 962, category: 'beautiful' },
  { asset: img11, width: 640, height: 427, category: 'nature' },
  { asset: img12, width: 640, height: 359, category: 'city' },
  { asset: img14, width: 640, height: 960, category: 'travel' },
].map(({ asset, width, height, category }) => ({
  src: asset,
  width,
  height,
  category,
}))

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredItems = useMemo(() => {
    return selectedCategory === 'All' ? slides : slides.filter((item) => item.category === selectedCategory)
  }, [selectedCategory])

  const [index, setIndex] = useState(-1)

  return (
    <Container fluid>
      <PageBreadcrumb title="Gallery" subtitle="Miscellaneous" />

      <Row>
        <Col cols={12}>
          <Card>
            <CardHeader className="flex-wrap justify-content-between w-100 gap-3">
              <div className="flex-grow-1">
                <div className="app-search">
                  <FormControl type="search" className="topbar-search" name="search" placeholder="Search ..." />
                  <LuSearch className="app-search-icon text-muted" />
                </div>
              </div>

              <div className="d-flex flex-wrap gap-1 filter-buttons">
                <Button
                  size="sm"
                  className={`btn-ghost-primary ${selectedCategory === 'All' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('All')}>
                  All
                </Button>
                <Button
                  size="sm"
                  className={`btn-ghost-primary ${selectedCategory === 'beautiful' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('beautiful')}>
                  Beautiful
                </Button>
                <Button
                  size="sm"
                  className={`btn-ghost-primary ${selectedCategory === 'nature' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('nature')}>
                  Nature
                </Button>
                <Button
                  size="sm"
                  className={`btn-ghost-primary ${selectedCategory === 'travel' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('travel')}>
                  Travel
                </Button>
                <Button
                  size="sm"
                  className={`btn-ghost-primary ${selectedCategory === 'city' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('city')}>
                  City
                </Button>
              </div>
            </CardHeader>

            <CardBody>
              <div style={{ width: '100%' }}>
                <RowsPhotoAlbum photos={filteredItems} onClick={({ index: current }) => setIndex(current)} />

                <Lightbox
                  index={index}
                  slides={filteredItems}
                  controller={{ closeOnBackdropClick: true }}
                  open={index >= 0}
                  close={() => setIndex(-1)}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
