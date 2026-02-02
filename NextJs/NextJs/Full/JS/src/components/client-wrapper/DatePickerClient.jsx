'use client';

import dynamic from 'next/dynamic';
const DatePickerClient = dynamic(() => import('react-datepicker').then(mod => mod.default), {
  ssr: false
});
export default DatePickerClient;