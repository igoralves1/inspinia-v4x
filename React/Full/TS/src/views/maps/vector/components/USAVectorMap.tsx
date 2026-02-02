import BaseVectorMap from '@/components/maps/BaseVectorMap'

import 'jsvectormap'
import 'jsvectormap/dist/maps/us-aea-en'
import { getUSAMapOptions } from '@/views/maps/vector/data.ts'

const USAVectorMap = () => {
  return <BaseVectorMap id="usa-map" options={getUSAMapOptions()} style={{ height: 360 }} />
}

export default USAVectorMap
