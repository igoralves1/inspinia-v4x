'use client'
import { useState } from 'react'
import { Badge, Button, Card, CardBody, Col, FormCheck, Nav, NavItem, Offcanvas } from 'react-bootstrap'
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput'
import { LuSearch } from 'react-icons/lu'
import { getTrackBackground, Range } from 'react-range'
import { Direction, IRenderThumbParams, IRenderTrackParams } from 'react-range/lib/types'

import Rating from '@/components/Rating'
import { getColor } from '@/helpers/color'

const STEP = 0.1
const MIN = 1
const MAX = 9999

const categories = [
  { id: 'electronics', name: 'Electronics', count: 8 },
  { id: 'computers', name: 'Computers', count: 5 },
  { id: 'home-office', name: 'Home & Office', count: 6 },
  { id: 'accessories', name: 'Accessories' },
  { id: 'gaming', name: 'Gaming', count: 9 },
  { id: 'mobile-phones', name: 'Mobile Phones', count: 12 },
  { id: 'appliances', name: 'Appliances' },
]

const brands = [
  { id: 'apple', name: 'Apple', count: 14 },
  { id: 'samsung', name: 'Samsung', count: 20 },
  { id: 'sony', name: 'Sony' },
  { id: 'dell', name: 'Dell', count: 7 },
  { id: 'hp', name: 'HP' },
]

const ratings = [
  { id: '5', name: '5', count: 120 },
  { id: '4', name: '4', count: 210 },
  { id: '3', name: '3', count: 325 },
  { id: '2', name: '2', count: 145 },
  { id: '1', name: '1', count: 58 },
]

const renderTrack = ({
  props,
  children,
  values,
  direction,
}: IRenderTrackParams & {
  values: number[]
  direction?: Direction
}) => (
  <div
    onMouseDown={props.onMouseDown}
    onTouchStart={props.onTouchStart}
    style={{
      ...props.style,
      height: '36px',
      display: 'flex',
      width: '100%',
    }}>
    <div
      ref={props.ref}
      style={{
        height: '5px',
        width: '100%',
        borderRadius: '4px',
        background: getTrackBackground({
          values,
          colors:
            values.length == 1
              ? [getColor('primary'), '#252630']
              : values.length == 2
                ? ['#252630', getColor('primary'), '#252630']
                : ['#000', getColor('primary'), getColor('secondary'), '#252630'],
          min: MIN,
          max: MAX,
          direction,
        }),
        alignSelf: 'center',
      }}>
      {children}
    </div>
  </div>
)

const renderThumb = ({ props }: IRenderThumbParams) => (
  <div
    {...props}
    key={props.key}
    style={{
      ...props.style,
      height: '16px',
      width: '16px',
      borderRadius: '50%',
      backgroundColor: getColor('primary'),
    }}
  />
)

const ProductFilter = ({ isOffcanvasOpen, setIsOffcanvasOpen }: { isOffcanvasOpen: boolean; setIsOffcanvasOpen: (value: boolean) => void }) => {
  const [values, setValues] = useState([1000, 2500])

  return (
    <Col xl={3}>
      <Offcanvas responsive="lg" placement="start" show={isOffcanvasOpen} onHide={() => setIsOffcanvasOpen(false)}>
        <Card className="h-100">
          <CardBody className="p-0">
            <div className="p-3 border-bottom border-dashed">
              <div className="app-search">
                <input type="search" className="form-control" placeholder="Search product name..." />
                <LuSearch className="app-search-icon text-muted" size={12} />
              </div>
            </div>

            <div className="p-3 border-bottom border-dashed">
              <div className="d-flex mb-2 justify-content-between align-items-center">
                <h5 className="mb-0">Category:</h5>
                <Button variant="link" size="sm" className="px-0 fw-semibold">
                  View All
                </Button>
              </div>
              <Nav className="flex-column">
                {categories.map((category) => (
                  <NavItem key={category.id} className="d-flex justify-content-between align-items-center py-1">
                    <FormCheck type="checkbox" id={`cat-${category.id}`} label={category.name} className="form-check-label mb-0" />
                    <Badge bg="light" text="dark" className="ms-2 text-bg-light">
                      {category.count}
                    </Badge>
                  </NavItem>
                ))}
              </Nav>
            </div>

            <div className="p-3 border-bottom border-dashed">
              <div className="d-flex mb-2 justify-content-between align-items-center">
                <h5 className="mb-0">Brands:</h5>
                <a href="#" className="btn btn-link btn-sm px-0 fw-semibold">
                  View All
                </a>
              </div>

              {brands.map((brand) => (
                <NavItem key={brand.id} className="d-flex justify-content-between align-items-center py-1">
                  <FormCheck type="checkbox" id={`brand-${brand.id}`} label={brand.name} className="flex-grow-1" />
                  <Badge bg="light" text="dark" className="ms-2 text-bg-light">
                    {brand.count}
                  </Badge>
                </NavItem>
              ))}
            </div>

            <div className="p-3 border-bottom">
              <h5 className="mb-0">Price:</h5>

              <Range
                step={STEP}
                min={MIN}
                max={MAX}
                values={values}
                onChange={(values) => setValues(values)}
                renderTrack={(params) => renderTrack({ ...params, values })}
                renderThumb={renderThumb}
              />

              <div className="d-flex gap-2 align-items-center mt-1">
                <div className="form-control form-control-sm text-center" id="price-filter-low">
                  ${values[0].toFixed(0)}
                </div>
                <span className="fw-semibold text-muted">to</span>
                <div className="form-control form-control-sm text-center" id="price-filter-high">
                  ${values[1].toFixed(0)}
                </div>
              </div>
            </div>

            <div className="p-3">
              <h5 className="mb-3">Ratings:</h5>

              {ratings.map((rating, idx) => (
                <div className="form-check py-1" key={idx}>
                  <FormCheckInput type="checkbox" id={`rating-${rating.id}`} />
                  <label htmlFor={`rating-${rating.id}`} className="form-check-label d-block">
                    <span className="d-flex align-items-center">
                      <span className="flex-grow-1 d-inline-flex align-items-center">
                        <Rating rating={Number(rating.id)} />
                        <span className="text-muted ms-1">{rating.name} Stars &amp; Up</span>
                      </span>
                      <span className="flex-shrink-0">
                        <span className="badge text-bg-light">{rating.count}</span>
                      </span>
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </Offcanvas>
    </Col>
  )
}

export default ProductFilter
