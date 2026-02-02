'use client'
import { getWorldMarkerLineOptions } from '@/app/(admin)/maps/vector/data'
import BaseVectorMap from '@/components/maps/BaseVectorMap'

import 'jsvectormap/dist/maps/world-merc'

const WorldMapMarkerLine = () => {
  return <BaseVectorMap id="world-map-marker-line" options={getWorldMarkerLineOptions()} style={{ height: 360 }} />
}

export default WorldMapMarkerLine
