'use client'
import { getSpainMapOptions } from '@/app/(admin)/maps/vector/data'
import BaseVectorMap from '@/components/maps/BaseVectorMap'

import 'jsvectormap'
import 'jsvectormap/dist/maps/spain'

const SpainVectorMap = () => {
  return <BaseVectorMap id="spain-map" options={getSpainMapOptions()} style={{ height: 360 }} />
}

export default SpainVectorMap
