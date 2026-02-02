import Loader from '@/components/Loader'
import { useLayoutContext } from '@/context/useLayoutContext'
import type { ApexOptions } from 'apexcharts'
import { lazy, Suspense, useMemo } from 'react'

const ReactApexChart = lazy(() => import('react-apexcharts'))

type PropsType = {
  type?: ApexChart['type']
  height?: number | string
  width?: number | string
  getOptions: () => ApexOptions
  series: ApexOptions['series']
  className?: string
}

const CustomApexChart = ({ type, height, width = '100%', getOptions, series, className }: PropsType) => {
  const { skin, theme } = useLayoutContext()

  const options = useMemo(() => getOptions(), [skin, theme])

  return (
    <Suspense fallback={<Loader />}>
      <ReactApexChart type={type} height={height} width={width} options={options} series={series} className={className} />
    </Suspense>
  )
}

export default CustomApexChart
