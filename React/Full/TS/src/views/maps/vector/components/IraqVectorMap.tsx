import BaseVectorMap from '@/components/maps/BaseVectorMap'

import 'jsvectormap'
import 'jsvectormap/dist/maps/iraq'
import { getIraqMapOptions } from '@/views/maps/vector/data.ts'

const IraqVectorMap = () => {
  return <BaseVectorMap id="iraq-map" options={getIraqMapOptions()} style={{ height: 360 }} />
}

export default IraqVectorMap
