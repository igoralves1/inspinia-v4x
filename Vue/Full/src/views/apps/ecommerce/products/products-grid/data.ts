import product1 from '@/assets/images/products/1.png'
import product2 from '@/assets/images/products/2.png'
import product3 from '@/assets/images/products/3.png'
import product4 from '@/assets/images/products/4.png'
import product5 from '@/assets/images/products/5.png'
import product6 from '@/assets/images/products/6.png'
import product7 from '@/assets/images/products/7.png'
import product8 from '@/assets/images/products/8.png'

export type ProductType = {
  id: number
  title: string
  image: string
  alt: string
  originalPrice: string
  discountedPrice: string
  discount: number
  rating: number
  reviews: number
}

export const productsData: ProductType[] = [
  {
    id: 1,
    title: 'Modern Minimalist Fabric Sofa Single Seater',
    image: product1,
    alt: 'modern-sofa',
    originalPrice: '$899.00',
    discountedPrice: '$764.15',
    discount: 15,
    rating: 3.5,
    reviews: 45,
  },
  {
    id: 2,
    title: 'Funky Streetwear Sneakers - Neon Splash',
    image: product2,
    alt: 'funky-shoes',
    originalPrice: '$59.99',
    discountedPrice: '$44.99',
    discount: 25,
    rating: 3,
    reviews: 32,
  },
  {
    id: 3,
    title: 'Noise Canceling Wireless Earbuds - Black Edition',
    image: product3,
    alt: 'earbuds',
    originalPrice: '$49.99',
    discountedPrice: '$42.49',
    discount: 15,
    rating: 3,
    reviews: 58,
  },
  {
    id: 4,
    title: 'Minimalist Solid Wood Dining Chair',
    image: product4,
    alt: 'wooden-chair',
    originalPrice: '$120.00',
    discountedPrice: '$96.00',
    discount: 20,
    rating: 3.5,
    reviews: 46,
  },
  {
    id: 5,
    title: 'Modern Black Minimalist Wall Clock',
    image:product5,
    alt: 'black-wall-watch',
    originalPrice: '$49.99',
    discountedPrice: '$39.99',
    discount: 20,
    rating: 4,
    reviews: 62,
  },
  {
    id: 6,
    title: 'Elegant Brown Wooden Chair',
    image: product6,
    alt: 'brown-chair',
    originalPrice: '$120.00',
    discountedPrice: '$96.00',
    discount: 20,
    rating: 4,
    reviews: 48,
  },
  {
    id: 7,
    title: 'Apple iMac 24" Retina 4.5K Display',
    image: product7,
    alt: 'imac',
    originalPrice: '$1,299.00',
    discountedPrice: '$1,039.20',
    discount: 20,
    rating: 4.5,
    reviews: 65,
  },
  {
    id: 8,
    title: 'Coolest Ergonomic Lounge Chair',
    image: product8,
    alt: 'coolest-chair',
    originalPrice: '$320.00',
    discountedPrice: '$256.00',
    discount: 20,
    rating: 4,
    reviews: 52,
  },
]
