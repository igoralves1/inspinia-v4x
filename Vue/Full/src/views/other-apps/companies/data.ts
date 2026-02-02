import airbnbLogo from '@/assets/images/logos/airbnb.svg'
import amazonLogo from '@/assets/images/logos/amazon.svg'
import appleLogo from '@/assets/images/logos/apple.svg'
import googleLogo from '@/assets/images/logos/google.svg'
import metaLogo from '@/assets/images/logos/meta.svg'
import shellLogo from '@/assets/images/logos/shell.svg'
import spotifyLogo from '@/assets/images/logos/spotify.svg'
import starbucksLogo from '@/assets/images/logos/starbucks.svg'
import walmartLogo from '@/assets/images/logos/walmart.svg'


export type CompanyProfileType = {
  name: string
  logo: string
  website: string
  location: string
  category: {
    label: string
    icon: string
  }
  description: string
  employees: string
  revenue: string
  rating: number
}

export const companies: CompanyProfileType[] = [
  {
    name: 'Amazon Inc.',
    logo: amazonLogo,
    website: 'https://www.amazon.com',
    location: 'Seattle, WA',
    category: { label: 'eCommerce', icon: 'tabler:shopping-cart' },
    description: 'Amazon.com, Inc. is an American multinational technology company focusing on e-commerce, cloud computing, and digital streaming.',
    employees: '1.5M+',
    revenue: '$514B',
    rating: 4,
  },
  {
    name: 'Apple Inc.',
    logo: appleLogo,
    website: 'https://www.apple.com',
    location: 'Cupertino, CA',
    category: { label: 'Tech', icon: 'tabler:device-mobile' },
    description: 'Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, and accessories.',
    employees: '160K+',
    revenue: '$383B',
    rating: 4,
  },
  {
    name: 'Walmart Inc.',
    logo: walmartLogo,
    website: 'https://www.walmart.com',
    location: 'Bentonville, AR',
    category: { label: 'Retail', icon: 'tabler:building-store' },
    description: 'Walmart operates a chain of hypermarkets, discount department stores, and grocery stores worldwide.',
    employees: '2.1M+',
    revenue: '$611B',
    rating: 3,
  },
  {
    name: 'Starbucks',
    logo: starbucksLogo,
    website: 'https://www.starbucks.com',
    location: 'Seattle, WA',
    category: { label: 'Food & Beverage', icon: 'tabler:coffee' },
    description: 'Starbucks is a multinational chain of coffeehouses and roastery reserves headquartered in Seattle, Washington.',
    employees: '400K+',
    revenue: '$36B',
    rating: 3,
  },
  {
    name: 'Meta Platforms',
    logo: metaLogo,
    website: 'https://about.meta.com',
    location: 'Menlo Park, CA',
    category: { label: 'Tech', icon: 'tabler:network' },
    description: 'Meta develops social media platforms and technologies including Facebook, Instagram, and the Metaverse.',
    employees: '86K+',
    revenue: '$117B',
    rating: 4,
  },
  {
    name: 'Spotify',
    logo: spotifyLogo,
    website: 'https://www.spotify.com',
    location: 'Stockholm, Sweden',
    category: { label: 'Entertainment', icon: 'tabler:music' },
    description: 'Spotify is a digital music, podcast, and video streaming service with millions of active users worldwide.',
    employees: '8K+',
    revenue: '$13B',
    rating: 3,
  },
  {
    name: 'Google LLC',
    logo: googleLogo,
    website: 'https://www.google.com',
    location: 'Mountain View, CA',
    category: { label: 'Tech', icon: 'tabler:world' },
    description: 'Google specializes in internet-related services and products, including search, ads, cloud, and more.',
    employees: '180K+',
    revenue: '$324B',
    rating: 4,
  },
  {
    name: 'Airbnb',
    logo: airbnbLogo,
    website: 'https://www.airbnb.com',
    location: 'San Francisco, CA',
    category: { label: 'Hospitality', icon: 'tabler:home' },
    description: 'Airbnb is a global platform for lodging, primarily homestays for vacation rentals and tourism activities.',
    employees: '6K+',
    revenue: '$9.9B',
    rating: 3,
  },
  {
    name: 'Shell plc',
    logo: shellLogo,
    website: 'https://www.shell.com',
    location: 'London, UK',
    category: { label: 'Energy', icon: 'tabler:gas-station' },
    description: 'Shell is a global energy and petrochemical company focused on oil, gas, and renewable energy solutions.',
    employees: '90K+',
    revenue: '$381B',
    rating: 3,
  },
]
