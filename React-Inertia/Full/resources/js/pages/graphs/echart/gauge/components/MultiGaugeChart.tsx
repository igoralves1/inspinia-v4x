import { useLayoutContext } from '@/context/useLayoutContext'
import { GaugeChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { lazy, useEffect, useMemo } from 'react'
import { getMultiGaugeChart, setGaugeChartInstance, startGaugeAnimation } from '../data'

const EChartsReact = lazy(() => import('echarts-for-react'))

const MultiGaugeChart = () => {
  const { skin, theme } = useLayoutContext()

  const options = useMemo(() => getMultiGaugeChart(), [skin, theme])

  useEffect(() => {
    startGaugeAnimation()
  }, [])

  return (
    <EChartsReact option={options} style={{ height: 300 }} onChartReady={setGaugeChartInstance} echarts={{ use: [GaugeChart, CanvasRenderer] }} />
  )
}

export default MultiGaugeChart
