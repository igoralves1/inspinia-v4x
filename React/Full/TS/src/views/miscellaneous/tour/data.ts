import type { IconType } from 'react-icons'
import { TbBrush, TbDeviceDesktop, TbLayout, TbRocket } from 'react-icons/tb'

export type FeatureCard = {
  icon: IconType
  title: string
  description: string
}

export const features: FeatureCard[] = [
  {
    icon: TbDeviceDesktop,
    title: 'Multiple Frameworks',
    description: 'Support for Bootstrap, Tailwind, React, Vue, Angular, Laravel, and more — use what suits your stack.',
  },
  {
    icon: TbLayout,
    title: 'Multiple Demos',
    description: 'Choose from a variety of pre-built demos to match your use case — from CRM to SaaS dashboards.',
  },
  {
    icon: TbBrush,
    title: 'Customizable UI',
    description: 'Easily tailor colors, layouts, and components to match your branding and requirements.',
  },
  {
    icon: TbRocket,
    title: 'High Performance',
    description: 'Optimized for speed and efficiency, our admin panel ensures a seamless experience for developers and users alike.',
  },
]
