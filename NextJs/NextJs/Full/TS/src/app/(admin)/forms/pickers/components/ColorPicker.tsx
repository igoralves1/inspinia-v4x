'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap'
import { HexColorPicker, RgbaColorPicker } from 'react-colorful'
import { TbChevronRight } from 'react-icons/tb'

const ColorPicker = () => {
  const [hexColor, setHexColor] = useState('#1ab394')

  const [rgbaColor, setRgbaColor] = useState({ r: 200, g: 150, b: 35, a: 0.5 })

  return (
    <Card>
      <CardHeader>
        <CardTitle as="h4">React Colorful</CardTitle>
      </CardHeader>

      <CardBody>
        <p className="text-muted mb-2">React Colorful is a tiny yet powerful and efficient color picker component for React.</p>

        <Link className="btn btn-link p-0 fw-semibold" href="https://github.com/omgovich/react-colorful" target="_blank">
          React Colorful
          <TbChevronRight className="ms-1" />
        </Link>
      </CardBody>

      <div className="border-top border-dashed"></div>

      <CardBody>
        <CardTitle as="h4" className="mb-3">
          Examples
        </CardTitle>

        <Row className="align-items-center g-4">
          <Col lg={6}>
            <h5 className="fw-semibold mb-1">HEX Color Picker</h5>
            <p className="text-muted mb-0">
              Use <code>HexColorPicker</code> component to select a color in HEX format.
            </p>
          </Col>
          <Col lg={6}>
            <HexColorPicker color={hexColor} onChange={setHexColor} />
            <p className="pt-3 mb-0">{hexColor}</p>
          </Col>
        </Row>

        <div className="my-4 border-top border-dashed"></div>

        <Row className="align-items-center g-4">
          <Col lg={6}>
            <h5 className="fw-semibold mb-1">RGBA Color Picker</h5>
            <p className="text-muted mb-0">
              Use <code>RgbaColorPicker</code> component to select a color in RGBA format.
            </p>
          </Col>
          <Col lg={6}>
            <RgbaColorPicker color={rgbaColor} onChange={setRgbaColor} />
            <p className="pt-3 mb-0">{JSON.stringify(rgbaColor)}</p>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default ColorPicker
