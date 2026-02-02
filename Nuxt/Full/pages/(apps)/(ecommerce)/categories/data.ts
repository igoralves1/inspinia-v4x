export type CategoryStatus = 'Active' | 'Inactive'

export type CategoryType = {
    id: number
    name: string
    slug: string
    image: string
    products: number
    orders: string
    earnings: string
    lastModified: string
    lastModifiedTime: string
    status: CategoryStatus
}

export const categoriesData: CategoryType[] = [
    {
        id: 1,
        name: 'Furnitures',
        slug: 'furniture',
        image: '/images/products/1.png',
        products: 5248,
        orders: '95.6k',
        earnings: '$40.5M',
        lastModified: '18 Apr, 2025',
        lastModifiedTime: '12:24 PM',
        status: 'Active',
    },
    {
        id: 2,
        name: 'Electronics',
        slug: 'electronics',
        image: '/images/products/2.png',
        products: 9854,
        orders: '112.3k',
        earnings: '$30.4M',
        lastModified: '20 Apr, 2025',
        lastModifiedTime: '09:10 AM',
        status: 'Active',
    },
    {
        id: 3,
        name: 'Smartphones',
        slug: 'electronics-smartphones',
        image: '/images/products/3.png',
        products: 1324,
        orders: '50.1k',
        earnings: '$22.3M',
        lastModified: '22 Apr, 2025',
        lastModifiedTime: '11:45 AM',
        status: 'Inactive',
    },
    {
        id: 4,
        name: 'Headphones',
        slug: 'accessories',
        image: '/images/products/4.png',
        products: 5123,
        orders: '70.8k',
        earnings: '$5.7M',
        lastModified: '25 Apr, 2025',
        lastModifiedTime: '08:20 AM',
        status: 'Active',
    },
    {
        id: 5,
        name: 'Table Lamps',
        slug: 'furniture-tables',
        image: '/images/products/5.png',
        products: 7589,
        orders: '88.7k',
        earnings: '$13.2M',
        lastModified: '27 Apr, 2025',
        lastModifiedTime: '03:15 PM',
        status: 'Inactive',
    },
    {
        id: 6,
        name: 'Kitchen Appliances',
        slug: 'appliances',
        image: '/images/products/6.png',
        products: 3021,
        orders: '110.4k',
        earnings: '$12.1M',
        lastModified: '30 Apr, 2025',
        lastModifiedTime: '06:00 PM',
        status: 'Active',
    },
    {
        id: 7,
        name: 'Smart Watches',
        slug: 'wearables',
        image: '/images/products/7.png',
        products: 6245,
        orders: '95.3k',
        earnings: '$8.9M',
        lastModified: '28 Apr, 2025',
        lastModifiedTime: '10:45 AM',
        status: 'Active',
    },
    {
        id: 8,
        name: 'Laptops',
        slug: 'electronics',
        image: '/images/products/8.png',
        products: 4890,
        orders: '67.2k',
        earnings: '$15.4M',
        lastModified: '29 Apr, 2025',
        lastModifiedTime: '02:30 PM',
        status: 'Inactive',
    },
    {
        id: 9,
        name: 'Gaming Consoles',
        slug: 'gaming',
        image: '/images/products/9.png',
        products: 3756,
        orders: '82.1k',
        earnings: '$10.7M',
        lastModified: '27 Apr, 2025',
        lastModifiedTime: '09:10 AM',
        status: 'Active',
    },
    {
        id: 10,
        name: 'Bluetooth Speakers',
        slug: 'audio',
        image: '/images/products/10.png',
        products: 5432,
        orders: '78.9k',
        earnings: '$6.3M',
        lastModified: '26 Apr, 2025',
        lastModifiedTime: '04:20 PM',
        status: 'Active',
    },
]
