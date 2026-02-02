export type PricingPlanType = {
  name: string
  description: string
  price: number
  paymentType: string
  text: string
  features: {
    icon: string
    name: string
    variant: string
  }[]
  buttonText: string
  isPopular?: boolean
}

export const pricingPlans: PricingPlanType[] = [
  {
    name: 'Free Plan',
    description: 'Great for solo developers trying things out',
    price: 0,
    paymentType: 'No credit card required',
    text: 'Free forever',
    features: [
      { icon: 'tabler:check', name: '1 user license', variant: 'success' },
      { icon: 'tabler:check', name: 'Access to basic components', variant: 'success' },
      { icon: 'tabler:check', name: 'Community support only', variant: 'success' },
      { icon: 'tabler:check', name: 'Limited documentation', variant: 'success' },
      { icon: 'tabler:x', name: 'No commercial use', variant: 'danger' },
      { icon: 'tabler:x', name: 'No Figma/design files', variant: 'danger' },
    ],
    buttonText: 'Start Free',
  },
  {
    name: 'Pro Plan',
    description: 'Ideal for freelancers and small teams with commercial needs',
    price: 129,
    paymentType: 'One-time payment',
    text: 'Plus applicable taxes',
    features: [
      { icon: 'tabler:check', name: '3 user licenses', variant: 'success' },
      { icon: 'tabler:check', name: 'Full component access', variant: 'success' },
      { icon: 'tabler:check', name: 'Commercial project rights', variant: 'success' },
      { icon: 'tabler:check', name: 'Email support', variant: 'success' },
      { icon: 'tabler:check', name: 'Lifetime updates', variant: 'success' },
      { icon: 'tabler:check', name: 'Figma design files', variant: 'success' },
    ],
    buttonText: 'Upgrade Now',
    isPopular: true,
  },
  {
    name: 'Enterprise Plan',
    description: 'Best for companies with scaling teams and critical projects',
    price: 499,
    paymentType: 'One-time payment',
    text: 'Includes extended support',
    features: [
      { icon: 'tabler:check', name: 'Unlimited users', variant: 'success' },
      { icon: 'tabler:check', name: 'All premium components & layouts', variant: 'success' },
      { icon: 'tabler:check', name: 'Commercial & SaaS usage rights', variant: 'success' },
      { icon: 'tabler:check', name: 'Dedicated support & onboarding', variant: 'success' },
      { icon: 'tabler:check', name: 'Custom Figma UI kits', variant: 'success' },
      { icon: 'tabler:check', name: 'Priority feature requests', variant: 'success' },
    ],
    buttonText: 'Contact Sales',
  },
]
