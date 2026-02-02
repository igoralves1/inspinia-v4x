'use client'
import dynamic from 'next/dynamic'

const TypeaheadClient = dynamic(() => import('react-bootstrap-typeahead').then((mod) => mod.Typeahead), { ssr: false })

export default TypeaheadClient
