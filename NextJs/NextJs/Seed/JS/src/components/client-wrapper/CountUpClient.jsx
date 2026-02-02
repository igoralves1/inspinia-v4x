'use client';

import CountUp from 'react-countup';
const CountUpClient = ({
  ...restProps
}) => {
  return <CountUp {...restProps} />;
};
export default CountUpClient;