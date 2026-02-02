import * as echarts from 'echarts/core';
import { lazy, useMemo } from 'react';
import { useLayoutContext } from '@/context/useLayoutContext';
const ReactECharts = lazy(() => import('echarts-for-react'));
let extensionsRegistered = false;
const CustomEChart = ({
  getOptions,
  extensions,
  ...props
}) => {
  if (!extensionsRegistered) {
    echarts.use(extensions);
    extensionsRegistered = true;
  }
  const {
    skin,
    theme
  } = useLayoutContext();
  const options = useMemo(() => getOptions(), [getOptions, skin, theme]);
  return <ReactECharts echarts={echarts} {...props} option={options} />;
};
export default CustomEChart;