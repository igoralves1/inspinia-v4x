import CustomApexChart from '@/components/CustomApexChart'
import { getSalesChartOptions } from '../data'

const SalesChart = () => {
  return <CustomApexChart getOptions={getSalesChartOptions} series={getSalesChartOptions().series} type="line" height={400} />
}
export default SalesChart
