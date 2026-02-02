'use client';

import { useLayoutContext } from '@/context/useLayoutContext';
import { GaugeChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import dynamic from 'next/dynamic';
import { useEffect, useMemo } from 'react';
import { getTemperatureChart, setTemperatureChartInstance, startTemperatureAnimation } from '../data';
const EChartsReact = dynamic(() => import('echarts-for-react'), {
  ssr: false
});
const TemperatureChart = () => {
  const {
    skin,
    theme
  } = useLayoutContext();
  const options = useMemo(() => getTemperatureChart(), [skin, theme]);
  useEffect(() => {
    startTemperatureAnimation();
  }, []);
  return <EChartsReact option={options} style={{
    height: 300
  }} onChartReady={setTemperatureChartInstance} echarts={{
    use: [GaugeChart, CanvasRenderer]
  }} />;
};
export default TemperatureChart;