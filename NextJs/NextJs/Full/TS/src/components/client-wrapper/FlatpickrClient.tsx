'use client'
import dynamic from 'next/dynamic'

const FlatpickrClient = dynamic(() => import('react-flatpickr'), { ssr: false })

export default FlatpickrClient
