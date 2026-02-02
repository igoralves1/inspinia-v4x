'use client'
import dynamic from 'next/dynamic'

const DayPickerClient = dynamic(() => import('react-day-picker').then((mod) => mod.DayPicker), {
  ssr: false,
})

export default DayPickerClient
