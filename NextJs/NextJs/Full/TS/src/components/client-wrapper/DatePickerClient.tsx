'use client'
import dynamic from 'next/dynamic'
import { type ComponentType } from 'react'
import type { DatePickerProps } from 'react-datepicker'

const DatePickerClient = dynamic<DatePickerProps>(
  () => import('react-datepicker').then((mod) => mod.default as unknown as ComponentType<DatePickerProps>),
  { ssr: false },
)

export default DatePickerClient
