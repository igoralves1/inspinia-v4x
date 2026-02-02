import { useLayoutContext } from '@/context/useLayoutContext'
import { BarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { lazy, useEffect, useMemo } from 'react'
import { getBarRaceChart, setBarRaceChartInstance, startBarRaceChart } from '../data'

const EChartsReact = lazy(() => import('echarts-for-react'))

const RaceChart = () => {
  const { skin, theme } = useLayoutContext()

  const options = useMemo(() => getBarRaceChart(), [skin, theme])

  useEffect(() => {
    startBarRaceChart()
  }, [])

  return (
    <EChartsReact
      option={options}
      style={{ height: 300 }}
      onChartReady={setBarRaceChartInstance}
      echarts={{
        use: [BarChart, CanvasRenderer],
      }}
    />
  )
}

export default RaceChart
