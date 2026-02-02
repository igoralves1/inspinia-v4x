import BaseVectorMap from '@/components/maps/BaseVectorMap'

import 'jsvectormap'
import 'jsvectormap/dist/maps/iraq'
import { getIraqMapOptions } from '@/pages/maps/vector/data'

const IraqVectorMap = () => {
  return <BaseVectorMap id="iraq-map" options={getIraqMapOptions()} style={{ height: 360 }} />
}

export default IraqVectorMap
