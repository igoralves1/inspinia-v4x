'use client'

import dynamic from 'next/dynamic'

const WizardClient = dynamic(() => import('react-use-wizard').then((mod) => mod.Wizard), { ssr: false })

export default WizardClient
