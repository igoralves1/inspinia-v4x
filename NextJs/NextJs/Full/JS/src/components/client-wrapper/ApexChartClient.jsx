'use client';

import Loader from '@/components/Loader';
import { useLayoutContext } from '@/context/useLayoutContext';
import dynamic from 'next/dynamic';
import { Suspense, useMemo } from 'react';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false
});
const ApexChartClient = ({
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
export default ApexChartClient;