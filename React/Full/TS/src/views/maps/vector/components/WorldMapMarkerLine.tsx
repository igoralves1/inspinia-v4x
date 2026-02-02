import BaseVectorMap from '@/components/maps/BaseVectorMap'

import 'jsvectormap/dist/maps/world-merc'
import { getWorldMarkerLineOptions } from '@/views/maps/vector/data.ts'

const WorldMapMarkerLine = () => {
  return <BaseVectorMap id="world-map-marker-line" options={getWorldMarkerLineOptions()} style={{ height: 360 }} />
}

export default WorldMapMarkerLine
