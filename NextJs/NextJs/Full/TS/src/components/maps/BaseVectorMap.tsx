'use client'
import 'jsvectormap'
import 'jsvectormap/dist/maps/world.js'

import { HTMLAttributes, useEffect, useState } from 'react'

type BaseVectorMapProps = {
  id: string
  options?: any
} & HTMLAttributes<HTMLDivElement>

const BaseVectorMap = ({ id, options, ...props }: BaseVectorMapProps) => {
  const [map, setMap] = useState<any>()

  useEffect(() => {
    if (!map) {
      // create jsvectormap
      const map = new (window as any)['jsVectorMap']({
        selector: '#' + id,
        ...options,
      })

      setMap(map)
    }
  }, [id, map, options])

  return <div id={id} {...props} />
}

export default BaseVectorMap
