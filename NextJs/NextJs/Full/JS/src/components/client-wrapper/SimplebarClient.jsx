'use client';

import SimpleBar from 'simplebar-react';
const SimplebarClient = ({
  children,
  ...restProps
}) => {
  return <SimpleBar {...restProps}> {children}</SimpleBar>;
};
export default SimplebarClient;