'use client'
import { getUSAMapOptions } from '@/app/(admin)/maps/vector/data'
import BaseVectorMap from '@/components/maps/BaseVectorMap'

import 'jsvectormap'
import 'jsvectormap/dist/maps/us-aea-en'

const USAVectorMap = () => {
  return <BaseVectorMap id="usa-map" options={getUSAMapOptions()} style={{ height: 360 }} />
}

export default USAVectorMap
