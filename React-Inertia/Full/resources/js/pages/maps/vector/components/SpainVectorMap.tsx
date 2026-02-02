import BaseVectorMap from '@/components/maps/BaseVectorMap'

import 'jsvectormap'
import 'jsvectormap/dist/maps/spain'
import { getSpainMapOptions } from '@/pages/maps/vector/data'

const SpainVectorMap = () => {
  return <BaseVectorMap id="spain-map" options={getSpainMapOptions()} style={{ height: 360 }} />
}

export default SpainVectorMap
