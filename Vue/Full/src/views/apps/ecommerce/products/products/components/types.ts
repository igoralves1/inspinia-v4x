export type ProductType = {
  id: string
  image: string
  name: string
  brand: string
  sku: string
  category: string
  stock: number
  price: number
  orders: number
  rating: number
  reviews: number
  status: 'Published' | 'Out of Stock' | 'Pending'
  lastModified: string
  publishedDate: string
  publishedTime: string
}

export type StatCard = {
  id: string
  title: string
  value: string
  newCount: string
  icon: string
  iconBg: string
  iconColor: string
  metric: string
  metricValue: string
  metricColor: string
  isCompact?: boolean
}