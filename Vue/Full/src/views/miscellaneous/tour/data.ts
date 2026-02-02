export type FeatureCard = {
  icon: string
  title: string
  description: string
}

export const features: FeatureCard[] = [
  {
    icon: 'tabler:device-desktop',
    title: 'Multiple Frameworks',
    description: 'Support for Bootstrap, Tailwind, React, Vue, Angular, Laravel, and more — use what suits your stack.',
  },
  {
    icon: 'tabler:layout',
    title: 'Multiple Demos',
    description: 'Choose from a variety of pre-built demos to match your use case — from CRM to SaaS dashboards.',
  },
  {
    icon: 'tabler:brush',
    title: 'Customizable UI',
    description: 'Easily tailor colors, layouts, and components to match your branding and requirements.',
  },
  {
    icon: 'tabler:rocket',
    title: 'High Performance',
    description: 'Optimized for speed and efficiency, our admin panel ensures a seamless experience for developers and users alike.',
  },
]
