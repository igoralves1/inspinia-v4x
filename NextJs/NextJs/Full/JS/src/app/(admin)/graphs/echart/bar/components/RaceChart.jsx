'use client';

import { getBarRaceChart, setBarRaceChartInstance, startBarRaceChart } from '@/app/(admin)/graphs/echart/bar/data';
import { useLayoutContext } from '@/context/useLayoutContext';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import dynamic from 'next/dynamic';
import { useEffect, useMemo } from 'react';
const EChartsReact = dynamic(() => import('echarts-for-react'), {
  ssr: false
});
const RaceChart = () => {
  const {
    skin,
    theme
  } = useLayoutContext();
  const options = useMemo(() => getBarRaceChart(), [skin, theme]);
  useEffect(() => {
    startBarRaceChart();
  }, []);
  return <EChartsReact option={options} style={{
    height: 300
  }} onChartReady={setBarRaceChartInstance} echarts={{
    use: [BarChart, CanvasRenderer]
  }} />;
};
export default RaceChart;