import PageBreadcrumb from '@/components/PageBreadcrumb'
import ComponentCard from '@/components/cards/ComponentCard'
import { AdvancedMarker, APIProvider, InfoWindow, Map, Pin } from '@vis.gl/react-google-maps'
import { Col, Container, Row } from 'react-bootstrap'

const BasicMap = () => {
  return (
    <Row className="g-3">
      <Col lg={4}>
        <h5 className="mb-1">Basic Map</h5>
        <p className="text-muted mb-0">The simplest example possible, just rendering a google map with some settings adjusted.</p>
      </Col>
      <Col lg={8}>
        <APIProvider apiKey={import.meta.env.GOOGLE_MAPS_API_KEY ?? ''}>
          <Map defaultCenter={{ lat: 37.8, lng: -122.4 }} defaultZoom={14} style={{ width: '100%', height: '360px' }} />
        </APIProvider>
      </Col>
    </Row>
  )
}

const MapWithMarker = () => {
  return (
    <Row className="g-3">
      <Col lg={4}>
        <h5 className="mb-1">Markers and InfoWindows</h5>
        <p className="text-muted mb-0">This example shows ways to add markers and infowindows to the map.</p>
      </Col>
      <Col lg={8}>
        <APIProvider apiKey={import.meta.env.GOOGLE_MAPS_API_KEY ?? ''}>
          <Map mapId={'bf51a910020fa25b'} style={{ width: '100%', height: '360px' }} defaultCenter={{ lat: 37.8, lng: -122.4 }} defaultZoom={10}>
            {/* advanced marker with pin */}
            <AdvancedMarker position={{ lat: 37.8, lng: -122.4 }} title={'AdvancedMarker with customized pin.'}>
              <Pin />
            </AdvancedMarker>

            {/* advanced marker with html-content */}
            <AdvancedMarker position={{ lat: 37.7, lng: -122.48 }} title={'AdvancedMarker with custom html content.'}>
              <div
                style={{
                  width: 20,
                  height: 20,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  background: '#1dbe80',
                  border: '2px solid #0e6443',
                  borderRadius: '50%',
                  transform: 'translate(-50%, -50%)',
                }}></div>
            </AdvancedMarker>

            {/* simple positioned infowindow */}
            <InfoWindow position={{ lat: 37.85, lng: -122.48 }} maxWidth={150}>
              <p>This is the HTML content.</p>
            </InfoWindow>
          </Map>
        </APIProvider>
      </Col>
    </Row>
  )
}

const MapStyle = () => {
  return (
    <Row className="g-3">
      <Col lg={4}>
        <h5 className="mb-1">Map Styles - Hybrid ("light" mapId)</h5>
        <p className="text-muted mb-0">
          The Map component can switch between multiple styles, even between cloud-based and local styles, on the fly.{' '}
        </p>
      </Col>
      <Col lg={8}>
        <APIProvider apiKey={import.meta.env.GOOGLE_MAPS_API_KEY ?? ''}>
          <Map
            defaultCenter={{ lat: 37.8, lng: -122.4 }}
            defaultZoom={14}
            mapId={'49ae42fed52588c3'}
            mapTypeId={'hybrid'}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
            style={{ width: '100%', height: '360px' }}
          />
        </APIProvider>
      </Col>
    </Row>
  )
}

const Page = () => {
  return (
    <>
      <Container fluid>
        <PageBreadcrumb title="Google Maps" />
      </Container>

      <Container>
        <Row>
          <Col sm={12}>
            <ComponentCard title="Examples">
              <BasicMap />

              <div className="my-4 border-top border-dashed" />

              <MapWithMarker />

              <div className="my-4 border-top border-dashed" />

              <MapStyle />
            </ComponentCard>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Page
