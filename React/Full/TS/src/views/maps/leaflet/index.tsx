import ComponentCard from '@/components/cards/ComponentCard'
import PageBreadcrumb from '@/components/PageBreadcrumb'

import L, { type LatLngExpression } from 'leaflet'
import { Col, Container, Row } from 'react-bootstrap'
import { Circle, LayerGroup, LayersControl, MapContainer, Marker, Polygon, Popup, TileLayer, Tooltip } from 'react-leaflet'

import marketImg from '@/assets/images/leaflet/marker-icon.png'
import markerShadowImg from '@/assets/images/leaflet/marker-shadow.png'

import leafGreen from '@/assets/images/leaflet/leaf-green.png'
import leafOrange from '@/assets/images/leaflet/leaf-orange.png'
import leafRed from '@/assets/images/leaflet/leaf-red.png'
import leafShadow from '@/assets/images/leaflet/leaf-shadow.png'

import { useMemo, useRef, useState } from 'react'

const BasicMap = () => {
  const center: LatLngExpression = [42.35, -71.08]

  return (
    <Row className="g-3">
      <Col lg={4}>
        <h5 className="mb-1">Basic Map</h5>
        <p className="text-muted mb-0">A simple Leaflet map centered with default tile layer and controls.</p>
      </Col>
      <Col lg={8}>
        <MapContainer center={center} zoom={10} scrollWheelZoom={false} style={{ height: '300px' }}>
          <TileLayer
            attribution='&copy; <a to="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </Col>
    </Row>
  )
}

const PopupWithMarker = () => {
  const center: LatLngExpression = [51.5, -0.09]

  return (
    <Row className="g-3">
      <Col lg={4}>
        <h5 className="mb-1">Popup with Marker</h5>
        <p className="text-muted mb-0">A Leaflet map with a marker that shows a popup on click.</p>
      </Col>
      <Col lg={8}>
        <MapContainer center={center} zoom={12} scrollWheelZoom={false} style={{ height: '300px' }}>
          <TileLayer
            attribution='&copy; <a to="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker icon={L.icon({ iconUrl: marketImg, shadowUrl: markerShadowImg })} position={center}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </Col>
    </Row>
  )
}

const TooltipWithMarker = () => {
  const center: LatLngExpression = [51.5, -0.09]

  return (
    <Row className="g-3">
      <Col lg={4}>
        <h5 className="mb-1">Tooltip with Marker</h5>
        <p className="text-muted mb-0">A Leaflet map with a marker that shows a tooltip on hover.</p>
      </Col>
      <Col lg={8}>
        <MapContainer center={center} zoom={12} scrollWheelZoom={false} style={{ height: '300px' }}>
          <TileLayer
            attribution='&copy; <a to="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker icon={L.icon({ iconUrl: marketImg, shadowUrl: markerShadowImg })} position={center}>
            <Tooltip>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Tooltip>
          </Marker>
        </MapContainer>
      </Col>
    </Row>
  )
}

const CircleAndPolygon = () => {
  const center: LatLngExpression = [51.5, -0.09]

  return (
    <Row className="g-3">
      <Col lg={4}>
        <h5 className="mb-1"> Circle and Polygon</h5>
        <p className="text-muted mb-0">A Leaflet map with a circle and polygon.</p>
      </Col>
      <Col lg={8}>
        <MapContainer center={center} zoom={12.5} scrollWheelZoom={false} style={{ height: '300px' }}>
          <TileLayer
            attribution='&copy; <a to="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Circle center={[51.508, -0.11]} pathOptions={{ color: 'red', fillColor: '#f03', fillOpacity: 0.5 }} radius={500} />
          <Polygon
            positions={[
              [51.509, -0.08],
              [51.503, -0.06],
              [51.51, -0.047],
            ]}
          />
        </MapContainer>
      </Col>
    </Row>
  )
}

const DraggableMarker = () => {
  const center: LatLngExpression = [51.5, -0.09]

  const [position, setPosition] = useState(center)
  const markerRef = useRef(null)
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker !== null) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          setPosition(marker.getLatLng())
        }
      },
    }),
    [],
  )

  return (
    <Row className="g-3">
      <Col lg={4}>
        <h5 className="mb-1">Draggable Marker</h5>
        <p className="text-muted mb-0">A Leaflet map with a draggable marker.</p>
      </Col>
      <Col lg={8}>
        <MapContainer center={center} zoom={12} scrollWheelZoom={false} style={{ height: '300px' }}>
          <TileLayer
            attribution='&copy; <a to="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            icon={L.icon({ iconUrl: marketImg, shadowUrl: markerShadowImg })}
            position={position}
            draggable={true}
            eventHandlers={eventHandlers}
            ref={markerRef}
          />
        </MapContainer>
      </Col>
    </Row>
  )
}

const CustomIcon = () => {
  const center: LatLngExpression = [51.5, -0.09]

  return (
    <Row className="g-3">
      <Col lg={4}>
        <h5 className="mb-1">Custom Icon</h5>
        <p className="text-muted mb-0">Demonstrates using custom image icons for Leaflet map markers.</p>
      </Col>
      <Col lg={8}>
        <MapContainer center={center} zoom={10} scrollWheelZoom={false} style={{ height: '300px' }}>
          <TileLayer
            attribution='&copy; <a to="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            icon={L.icon({
              iconUrl: leafRed,
              shadowUrl: leafShadow,
              iconSize: [38, 95],
              shadowSize: [50, 64],
              iconAnchor: [22, 94],
              shadowAnchor: [4, 62],
              popupAnchor: [-3, -76],
            })}
            position={[51.5, -0.09]}
          />
          <Marker
            icon={L.icon({
              iconUrl: leafGreen,
              shadowUrl: leafShadow,
              iconSize: [38, 95],
              shadowSize: [50, 64],
              iconAnchor: [22, 94],
              shadowAnchor: [4, 62],
              popupAnchor: [-3, -76],
            })}
            position={[51.4, -0.51]}
          />
          <Marker
            icon={L.icon({
              iconUrl: leafOrange,
              shadowUrl: leafShadow,
              iconSize: [38, 95],
              shadowSize: [50, 64],
              iconAnchor: [22, 94],
              shadowAnchor: [4, 62],
              popupAnchor: [-3, -76],
            })}
            position={[51.49, -0.45]}
          />
        </MapContainer>
      </Col>
    </Row>
  )
}

const LayerControl = () => {
  const center: LatLngExpression = [39.73, -104.99]

  const customIcon = new L.Icon({
    iconUrl: marketImg,
    shadowUrl: markerShadowImg,
  })

  return (
    <Row className="g-3">
      <Col lg={4}>
        <h5 className="mb-1">Layer Control</h5>
        <p className="text-muted mb-0">Toggles between multiple map layers or overlays using Leaflet’s layer control.</p>
      </Col>
      <Col lg={8}>
        <MapContainer center={center} zoom={9} scrollWheelZoom={false} style={{ height: '300px' }}>
          <LayersControl position="topright">
            {/* Base Layers */}
            <LayersControl.BaseLayer checked name="Street">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a to="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
            </LayersControl.BaseLayer>

            <LayersControl.BaseLayer name="CartoDB Dark">
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a to="https://carto.com/">CARTO</a>'
              />
            </LayersControl.BaseLayer>

            {/* Overlay Layer Group for Cities */}
            <LayersControl.Overlay checked name="Cities">
              <LayerGroup>
                <Marker position={[39.61, -105.02]} icon={customIcon}>
                  <Popup>This is Littleton, CO.</Popup>
                </Marker>
                <Marker position={[39.74, -104.99]} icon={customIcon}>
                  <Popup>This is Denver, CO.</Popup>
                </Marker>
                <Marker position={[39.73, -104.8]} icon={customIcon}>
                  <Popup>This is Aurora, CO.</Popup>
                </Marker>
                <Marker position={[39.77, -105.23]} icon={customIcon}>
                  <Popup>This is Golden, CO.</Popup>
                </Marker>
              </LayerGroup>
            </LayersControl.Overlay>
          </LayersControl>
        </MapContainer>
      </Col>
    </Row>
  )
}

const Page = () => {
  return (
    <>
      <Container fluid>
        <PageBreadcrumb title="Leaflet Maps" />
      </Container>

      <Container>
        <Row>
          <Col lg={12}>
            <ComponentCard title="Examples">
              <BasicMap />

              <div className="my-4 border-top border-dashed"></div>

              <PopupWithMarker />

              <div className="my-4 border-top border-dashed"></div>

              <TooltipWithMarker />

              <div className="my-4 border-top border-dashed"></div>

              <CircleAndPolygon />

              <div className="my-4 border-top border-dashed"></div>

              <DraggableMarker />

              <div className="my-4 border-top border-dashed"></div>

              <CustomIcon />

              <div className="my-4 border-top border-dashed"></div>

              <LayerControl />
            </ComponentCard>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Page
