'use client'

import dynamic from 'next/dynamic'

const NumericFormatClient = dynamic(() => import('react-number-format').then((mod) => mod.NumericFormat), { ssr: false })

const PatternFormatClient = dynamic(() => import('react-number-format').then((mod) => mod.PatternFormat), { ssr: false })

export { NumericFormatClient, PatternFormatClient }
