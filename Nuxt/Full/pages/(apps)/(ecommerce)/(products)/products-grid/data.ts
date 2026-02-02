

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
    image: '/images/products/1.png',
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
    image: '/images/products/2.png',
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
    image: '/images/products/3.png',
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
    image: '/images/products/4.png',
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
    image: '/images/products/5.png',
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
    image: '/images/products/6.png',
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
    image: '/images/products/7.png',
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
    image: '/images/products/8.png',
    alt: 'coolest-chair',
    originalPrice: '$320.00',
    discountedPrice: '$256.00',
    discount: 20,
    rating: 4,
    reviews: 52,
  },
]
