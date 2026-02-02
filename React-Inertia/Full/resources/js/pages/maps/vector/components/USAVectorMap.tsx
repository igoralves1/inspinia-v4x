import BaseVectorMap from '@/components/maps/BaseVectorMap'

import 'jsvectormap'
import 'jsvectormap/dist/maps/us-aea-en'
import { getUSAMapOptions } from '@/pages/maps/vector/data'

const USAVectorMap = () => {
  return <BaseVectorMap id="usa-map" options={getUSAMapOptions()} style={{ height: 360 }} />
}

export default USAVectorMap
