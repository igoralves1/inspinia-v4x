'use client'
import dynamic from 'next/dynamic'

const SelectClient = dynamic(() => import('react-select'), { ssr: false })

export default SelectClient
