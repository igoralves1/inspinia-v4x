import Loader from '@/components/Loader';
import { useLayoutContext } from '@/context/useLayoutContext';
import { lazy, Suspense, useMemo } from 'react';
const ReactApexChart = lazy(() => import('react-apexcharts'));
const CustomApexChart = ({
  type,
  height,
  width = '100%',
  getOptions,
  series,
  className
}) => {
  const {
    skin,
    theme
  } = useLayoutContext();
  const options = useMemo(() => getOptions(), [skin, theme]);
  return <Suspense fallback={<Loader />}>
      <ReactApexChart type={type} height={height} width={width} options={options} series={series} className={className} />
    </Suspense>;
};
export default CustomApexChart;