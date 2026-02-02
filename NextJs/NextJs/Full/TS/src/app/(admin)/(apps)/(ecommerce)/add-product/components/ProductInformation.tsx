'use client'
import QuillClient from '@/components/client-wrapper/QuillClient'
import { useState } from 'react'
import { Card, CardBody, CardHeader, Col, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'

const modules = {
  toolbar: [['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', { list: 'ordered' }, 'link', 'image']],
}

const ProductInformation = () => {
  const [value, setValue] = useState(`
    <p>
      Introducing the
      <strong>
        <em>Azure Comfort Single Sofa</em>
      </strong>
      , a perfect blend of modern design and luxurious comfort.
    </p>
    <p>
      This premium blue single sofa is designed to elevate any living space with its sleek profile and rich, durable fabric.
      It's the perfect seating option for your living room, lounge area, or cozy reading nook.
    </p>
    <ul>
      <li>Crafted with a solid mahogany frame for enhanced durability.</li>
      <li>Upholstered in a high-quality blue fabric that offers both style and comfort.</li>
    </ul>
    `)

  return (
    <Card>
      <CardHeader className="d-block p-3">
        <h4 className="card-title mb-1">Product Information</h4>
        <p className="text-muted mb-0">To add a new product, please provide the necessary details in the fields below.</p>
      </CardHeader>
      <CardBody>
        <Row>
          <Col xs={12}>
            <FormGroup className="mb-3">
              <FormLabel htmlFor="productName">
                Product Name <span className="text-danger">*</span>
              </FormLabel>
              <FormControl type="text" id="productName" placeholder="Enter product name" required />
            </FormGroup>
          </Col>
          <Col lg={6}>
            <FormGroup className="mb-3">
              <FormLabel htmlFor="skuId">
                SKU <span className="text-danger">*</span>
              </FormLabel>
              <FormControl type="text" id="skuId" placeholder="SOFA-10058" required />
            </FormGroup>
          </Col>
          <Col lg={6}>
            <FormGroup className="mb-3">
              <FormLabel htmlFor="stockNumber">
                Stock <span className="text-danger">*</span>
              </FormLabel>
              <FormControl type="number" id="stockNumber" placeholder="250" />
            </FormGroup>
          </Col>
          <Col xs={12}>
            <FormGroup>
              <FormLabel>
                Product Description <span className="text-muted">(Optional)</span>
              </FormLabel>
              <div id="snow-editor">
                <QuillClient theme="snow" modules={modules} value={value} onChange={setValue} />
              </div>
            </FormGroup>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default ProductInformation
