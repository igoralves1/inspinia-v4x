import { Col, Row } from 'react-bootstrap'
import ComponentCard from '@/components/cards/ComponentCard'
import BaseVectorMap from '@/components/maps/BaseVectorMap'
import WorldMapMarkerLine from '@/views/maps/vector/components/WorldMapMarkerLine.tsx'
import USAVectorMap from '@/views/maps/vector/components/USAVectorMap.tsx'
import CanadaVectorMap from '@/views/maps/vector/components/CanadaVectorMap.tsx'
import RussiaVectorMap from '@/views/maps/vector/components/RussiaVectorMap.tsx'
import IraqVectorMap from '@/views/maps/vector/components/IraqVectorMap.tsx'
import SpainVectorMap from '@/views/maps/vector/components/SpainVectorMap.tsx'
import { getWorldMapOptions } from '@/views/maps/vector/data.ts'

const ExamplesCard = () => {
  return (
    <ComponentCard title="Examples">
      <Row className="g-3">
        <Col lg={4}>
          <h5 className="mb-1">World Vector Map</h5>
          <p className="text-muted mb-0">A global map showing countries with interactive markers.</p>
        </Col>
        <Col lg={8}>
          <BaseVectorMap id="world-map" options={getWorldMapOptions()} style={{ height: 360 }} />
        </Col>
      </Row>

      <div className="my-4 border-top border-dashed" />

      <Row className="g-3">
        <Col lg={4}>
          <h5 className="mb-1">World Vector Live Map</h5>
          <p className="text-muted mb-0">Live dynamic vector representation of the world with real-time features.</p>
        </Col>
        <Col lg={8}>
          <WorldMapMarkerLine />
        </Col>
      </Row>

      <div className="my-4 border-top border-dashed" />

      <Row className="g-3">
        <Col lg={4}>
          <h5 className="mb-1">US Vector Map</h5>
          <p className="text-muted mb-0">Interactive vector map of the United States with state-level details.</p>
        </Col>
        <Col lg={8}>
          <USAVectorMap />
        </Col>
      </Row>

      <div className="my-4 border-top border-dashed" />

      <Row className="g-3">
        <Col lg={4}>
          <h5 className="mb-1">Canada Vector Map</h5>
          <p className="text-muted mb-0">Displays Canadian provinces and territories with interactive regions.</p>
        </Col>
        <Col lg={8}>
          <CanadaVectorMap />
        </Col>
      </Row>

      <div className="my-4 border-top border-dashed" />

      <Row className="g-3">
        <Col lg={4}>
          <h5 className="mb-1">Russia Vector Map</h5>
          <p className="text-muted mb-0">Interactive map highlighting major regions across Russia.</p>
        </Col>
        <Col lg={8}>
          <RussiaVectorMap />
        </Col>
      </Row>

      <div className="my-4 border-top border-dashed" />

      <Row className="g-3">
        <Col lg={4}>
          <h5 className="mb-1">Iraq Vector Map</h5>
          <p className="text-muted mb-0">Vector visualization of Iraq highlighting provinces and regions.</p>
        </Col>
        <Col lg={8}>
          <IraqVectorMap />
        </Col>
      </Row>

      <div className="my-4 border-top border-dashed" />

      <Row className="g-3">
        <Col lg={4}>
          <h5 className="mb-1">Spain Vector Map</h5>
          <p className="text-muted mb-0">Geographical map of Spain with region-based interaction.</p>
        </Col>
        <Col lg={8}>
          <SpainVectorMap />
        </Col>
      </Row>
    </ComponentCard>
  )
}

export default ExamplesCard
