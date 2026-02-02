'use client'
import { getCanadaMapOptions } from '@/app/(admin)/maps/vector/data'
import BaseVectorMap from '@/components/maps/BaseVectorMap'

import 'jsvectormap'
import 'jsvectormap/dist/maps/canada'

const CanadaVectorMap = () => {
  return <BaseVectorMap id="canada-map" options={getCanadaMapOptions()} style={{ height: 360 }} />
}

export default CanadaVectorMap
