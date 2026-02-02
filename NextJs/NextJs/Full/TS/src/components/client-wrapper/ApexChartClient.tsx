'use client'
import Loader from '@/components/Loader'
import { useLayoutContext } from '@/context/useLayoutContext'
import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
import { Suspense, useMemo } from 'react'

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

type PropsType = {
  type?: ApexChart['type']
  height?: number | string
  width?: number | string
  getOptions: () => ApexOptions
  series: ApexOptions['series']
  className?: string
}

const ApexChartClient = ({ type, height, width = '100%', getOptions, series, className }: PropsType) => {
  const { skin, theme } = useLayoutContext()

  const options = useMemo(() => getOptions(), [skin, theme])

  return (
    <Suspense fallback={<Loader />}>
      <ReactApexChart type={type} height={height} width={width} options={options} series={series} className={className} />
    </Suspense>
  )
}

export default ApexChartClient
