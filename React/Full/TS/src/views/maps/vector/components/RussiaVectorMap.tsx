import BaseVectorMap from '@/components/maps/BaseVectorMap'

import 'jsvectormap'
import 'jsvectormap/dist/maps/russia'
import { getRussiaMapOptions } from '@/views/maps/vector/data.ts'

const RussiaVectorMap = () => {
  return <BaseVectorMap id="russia-map" options={getRussiaMapOptions()} style={{ height: 360 }} />
}

export default RussiaVectorMap
