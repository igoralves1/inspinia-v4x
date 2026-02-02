'use client'
import { getRussiaMapOptions } from '@/app/(admin)/maps/vector/data'
import BaseVectorMap from '@/components/maps/BaseVectorMap'

import 'jsvectormap'
import 'jsvectormap/dist/maps/russia'

const RussiaVectorMap = () => {
  return <BaseVectorMap id="russia-map" options={getRussiaMapOptions()} style={{ height: 360 }} />
}

export default RussiaVectorMap
