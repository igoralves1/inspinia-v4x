import type { ApexOptions } from 'apexcharts'
import { lazy, useEffect, useRef, useState } from 'react'
import { createDailyTimeSeries, generateNewPoint, getRealTimeChartOptions } from '../data'

const ReactApexChart = lazy(() => import('react-apexcharts'))

type DataPoint = [number, number]

const RealTimeChart = () => {
  const [series, setSeries] = useState<{ data: DataPoint[] }[]>([{ data: [] }])
  const [options, setOptions] = useState<ApexOptions>(() => getRealTimeChartOptions([]))

  const dataRef = useRef<DataPoint[]>([])
  const lastDateRef = useRef<number>(0)

  useEffect(() => {
    const initialData = createDailyTimeSeries(new Date('11 May 2024 GMT').getTime(), 10, { min: 10, max: 90 })
    dataRef.current = initialData
    lastDateRef.current = initialData[initialData.length - 1][0]

    setSeries([{ data: [...initialData] }])
    setOptions(getRealTimeChartOptions(initialData))

    const updateInterval = setInterval(() => {
      const newPoint = generateNewPoint(lastDateRef.current, {
        min: 10,
        max: 90,
      })
      lastDateRef.current = newPoint[0]
      dataRef.current.push(newPoint)
      setSeries([{ data: [...dataRef.current] }])
    }, 2000)

    const resetInterval = setInterval(() => {
      dataRef.current = dataRef.current.slice(-10)
      setSeries([{ data: [...dataRef.current] }])
    }, 60000)

    return () => {
      clearInterval(updateInterval)
      clearInterval(resetInterval)
    }
  }, [])

  return <ReactApexChart options={options} series={series} type="line" height={350} />
}

export default RealTimeChart
