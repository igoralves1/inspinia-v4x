'use client'
import { type EChartsOption } from 'echarts'
import { EChartsReactProps } from 'echarts-for-react'
import * as echarts from 'echarts/core'
import dynamic from 'next/dynamic'
import { useMemo } from 'react'

import Loader from '@/components/Loader'
import { useLayoutContext } from '@/context/useLayoutContext'

const ReactECharts = dynamic(() => import('echarts-for-react'), {
  ssr: false,
  loading: () => <Loader />,
})

type EChartClientProps = {
  getOptions: () => EChartsOption
  extensions: any[]
} & Omit<EChartsReactProps, 'option'>

let extensionsRegistered = false

const EChartClient = ({ getOptions, extensions, ...props }: EChartClientProps) => {
  if (!extensionsRegistered) {
    echarts.use(extensions)
    extensionsRegistered = true
  }

  const { skin, theme } = useLayoutContext()

  const options = useMemo(() => getOptions(), [getOptions, skin, theme])

  return <ReactECharts echarts={echarts} {...props} option={options} />
}

export default EChartClient
