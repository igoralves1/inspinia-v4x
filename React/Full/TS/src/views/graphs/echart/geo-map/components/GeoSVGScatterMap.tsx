import ComponentCard from '@/components/cards/ComponentCard'
import CustomEChart from '@/components/CustomEChart.tsx'
import { getColor } from '@/helpers/color'
import { type EChartsOption, registerMap } from 'echarts'
import { EffectScatterChart } from 'echarts/charts'
import { GeoComponent, TooltipComponent } from 'echarts/components'
import { SVGRenderer } from 'echarts/renderers'
import { useEffect, useState } from 'react'

const dataPoints = [
  [488.23, 459.7, 100],
  [770.34, 757.96, 30],
  [1180.03, 743.61, 80],
  [894.03, 1188.19, 61],
  [1372.98, 477.38, 70],
  [1378.62, 935.67, 81],
]

const GeoSVGScatterMap = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    fetch('/images/iceland.svg')
      .then((res) => res.text())
      .then((svg) => {
        registerMap('iceland', { svg })
        setLoaded(true)
      })
  }, [])

  const getOptions = (): EChartsOption => ({
    tooltip: {},
    geo: {
      tooltip: {
        show: true,
        backgroundColor: getColor('secondary-bg'),
        borderColor: getColor('border-color'),
        textStyle: { color: getColor('light-text-emphasis') },
      },
      map: 'iceland',
      layoutCenter: ['50%', '50%'],
      layoutSize: '125%',
      roam: true,
    },
    series: {
      type: 'effectScatter',
      coordinateSystem: 'geo',
      geoIndex: 0,
      symbolSize: function (params) {
        return (params[2] / 100) * 15 + 5
      },
      itemStyle: {
        color: '#b02a02',
      },
      encode: {
        tooltip: 2,
      },
      data: dataPoints,
    },
  })

  return (
    <ComponentCard title="Geo SVG Scatter Map">
      {loaded && (
        <CustomEChart
          getOptions={getOptions}
          extensions={[SVGRenderer, GeoComponent, TooltipComponent, EffectScatterChart]}
          style={{ height: '400px' }}
        />
      )}
    </ComponentCard>
  )
}

export default GeoSVGScatterMap
