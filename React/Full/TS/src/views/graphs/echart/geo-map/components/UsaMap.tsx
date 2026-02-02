import ComponentCard from '@/components/cards/ComponentCard'
import CustomEChart from '@/components/CustomEChart.tsx'
import { getColor } from '@/helpers/color'
import { type EChartsOption, registerMap } from 'echarts'
import { MapChart } from 'echarts/charts'
import { GeoComponent, TooltipComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { useCallback, useEffect, useState } from 'react'

const UsaMap = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    fetch('/data/usa_geo.json')
      .then((res) => res.json())
      .then((usaGeoJson) => {
        registerMap('USA', usaGeoJson, {
          Alaska: { left: -131, top: 25, width: 15 },
          Hawaii: { left: -112, top: 25, width: 5 },
          'Puerto Rico': { left: -76, top: 26, width: 2 },
        })
        setLoaded(true)
      })
  }, [])

  const getOptions = useCallback((): EChartsOption => {
    return {
      tooltip: {
        trigger: 'item',
        formatter: '{b}',
        padding: [7, 10],
        backgroundColor: getColor('secondary-bg'),
        borderColor: getColor('border-color'),
        textStyle: { color: getColor('light-text-emphasis') },
        borderWidth: 1,
        transitionDuration: 0,
      },
      textStyle: {
        fontFamily: getComputedStyle(document.body).fontFamily,
      },
      geo: {
        map: 'USA',
        roam: true,
        zoom: 1.2,
        center: [-98, 37],
        scaleLimit: { min: 1, max: 5 },
        itemStyle: {
          borderColor: getColor('border-color'),
          areaColor: getColor('info'),
        },
        label: { color: '#fff' },
        emphasis: {
          label: { show: true, color: '#fff' },
          itemStyle: { areaColor: getColor('warning') },
        },
      },
      series: [
        {
          name: 'USA Map',
          type: 'map',
          map: 'USA',
          geoIndex: 0,
          roam: true,
          zoom: 1.2,
          scaleLimit: { min: 1, max: 5 },
        },
      ],
    }
  }, [])

  return (
    <ComponentCard title="USA Map">
      {loaded && (
        <CustomEChart extensions={[MapChart, GeoComponent, TooltipComponent, CanvasRenderer]} getOptions={getOptions} style={{ height: '400px' }} />
      )}
    </ComponentCard>
  )
}

export default UsaMap
