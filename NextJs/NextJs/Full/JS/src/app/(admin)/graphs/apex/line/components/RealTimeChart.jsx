'use client';

import { createDailyTimeSeries, generateNewPoint, getRealTimeChartOptions } from '@/app/(admin)/graphs/apex/line/data';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false
});
const RealTimeChart = () => {
  const [series, setSeries] = useState([{
    data: []
  }]);
  const [options, setOptions] = useState(() => getRealTimeChartOptions([]));
  const dataRef = useRef([]);
  const lastDateRef = useRef(0);
  useEffect(() => {
    const initialData = createDailyTimeSeries(new Date('11 May 2024 GMT').getTime(), 10, {
      min: 10,
      max: 90
    });
    dataRef.current = initialData;
    lastDateRef.current = initialData[initialData.length - 1][0];
    setSeries([{
      data: [...initialData]
    }]);
    setOptions(getRealTimeChartOptions(initialData));
    const updateInterval = setInterval(() => {
      const newPoint = generateNewPoint(lastDateRef.current, {
        min: 10,
        max: 90
      });
      lastDateRef.current = newPoint[0];
      dataRef.current.push(newPoint);
      setSeries([{
        data: [...dataRef.current]
      }]);
    }, 2000);
    const resetInterval = setInterval(() => {
      dataRef.current = dataRef.current.slice(-10);
      setSeries([{
        data: [...dataRef.current]
      }]);
    }, 60000);
    return () => {
      clearInterval(updateInterval);
      clearInterval(resetInterval);
    };
  }, []);
  return <ReactApexChart options={options} series={series} type="line" height={350} />;
};
export default RealTimeChart;