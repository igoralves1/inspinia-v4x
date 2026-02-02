import type { IconType } from 'react-icons'
import { TbCheck, TbX } from 'react-icons/tb'

export type PricingPlanType = {
  name: string
  description: string
  price: number
  paymentType: string
  text: string
  features: {
    icon: IconType
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
      { icon: TbCheck, name: '1 user license', variant: 'success' },
      { icon: TbCheck, name: 'Access to basic components', variant: 'success' },
      { icon: TbCheck, name: 'Community support only', variant: 'success' },
      { icon: TbCheck, name: 'Limited documentation', variant: 'success' },
      { icon: TbX, name: 'No commercial use', variant: 'danger' },
      { icon: TbX, name: 'No Figma/design files', variant: 'danger' },
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
      { icon: TbCheck, name: '3 user licenses', variant: 'success' },
      { icon: TbCheck, name: 'Full component access', variant: 'success' },
      { icon: TbCheck, name: 'Commercial project rights', variant: 'success' },
      { icon: TbCheck, name: 'Email support', variant: 'success' },
      { icon: TbCheck, name: 'Lifetime updates', variant: 'success' },
      { icon: TbCheck, name: 'Figma design files', variant: 'success' },
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
      { icon: TbCheck, name: 'Unlimited users', variant: 'success' },
      { icon: TbCheck, name: 'All premium components & layouts', variant: 'success' },
      { icon: TbCheck, name: 'Commercial & SaaS usage rights', variant: 'success' },
      { icon: TbCheck, name: 'Dedicated support & onboarding', variant: 'success' },
      { icon: TbCheck, name: 'Custom Figma UI kits', variant: 'success' },
      { icon: TbCheck, name: 'Priority feature requests', variant: 'success' },
    ],
    buttonText: 'Contact Sales',
  },
]
