import type { ApexOptions } from 'apexcharts'

import product1 from '@/assets/images/products/1.png'
import product10 from '@/assets/images/products/10.png'
import product2 from '@/assets/images/products/2.png'
import product3 from '@/assets/images/products/3.png'
import product4 from '@/assets/images/products/4.png'
import product5 from '@/assets/images/products/5.png'
import product6 from '@/assets/images/products/6.png'
import product7 from '@/assets/images/products/7.png'
import product8 from '@/assets/images/products/8.png'
import product9 from '@/assets/images/products/9.png'

export type ProductType = {
    image: string
    name: string
    sku: string
    price: string
    rating: number
    reviews: number
    views: string
    orders: number
    conversion: string
    chartType: 'bar' | 'line'
}

export const productsData: ProductType[] = [
    {
        image: product2,
        name: 'Smart Fitness Watch',
        sku: 'FW-54201',
        price: '$129.99',
        rating: 4,
        reviews: 54,
        views: '45.2k',
        orders: 820,
        conversion: '7.3%',
        chartType: 'bar',
    },
    {
        image: product3,
        name: 'Portable Bluetooth Speaker',
        sku: 'BS-20894',
        price: '$79.50',
        rating: 3.5,
        reviews: 31,
        views: '28.9k',
        orders: 410,
        conversion: '5.8%',
        chartType: 'line',
    },
    {
        image: product4,
        name: 'Gaming Mouse',
        sku: 'GM-77215',
        price: '$49.99',
        rating: 4.5,
        reviews: 67,
        views: '22.4k',
        orders: 340,
        conversion: '6.4%',
        chartType: 'bar',
    },
    {
        image: product5,
        name: 'Noise Cancelling Headphones',
        sku: 'NC-88321',
        price: '$199.00',
        rating: 5,
        reviews: 128,
        views: '60.1k',
        orders: 1500,
        conversion: '9.8%',
        chartType: 'line',
    },
    {
        image: product6,
        name: '4K Action Camera',
        sku: 'AC-90763',
        price: '$249.99',
        rating: 4.5,
        reviews: 94,
        views: '18.9k',
        orders: 610,
        conversion: '6.0%',
        chartType: 'bar',
    },
    {
        image: product7,
        name: 'Wireless Charger Pad',
        sku: 'WC-23815',
        price: '$39.95',
        rating: 3.5,
        reviews: 41,
        views: '12.3k',
        orders: 220,
        conversion: '4.1%',
        chartType: 'line',
    },
    {
        image: product8,
        name: 'Mechanical Keyboard',
        sku: 'MK-48519',
        price: '$89.00',
        rating: 4.5,
        reviews: 77,
        views: '30.5k',
        orders: 540,
        conversion: '7.2%',
        chartType: 'bar',
    },
    {
        image: product9,
        name: 'Drone with Camera',
        sku: 'DR-61208',
        price: '$399.00',
        rating: 5,
        reviews: 189,
        views: '75.9k',
        orders: 1900,
        conversion: '10.2%',
        chartType: 'line',
    },
    {
        image: product10,
        name: 'Smart Home Hub',
        sku: 'SH-30051',
        price: '$149.99',
        rating: 4,
        reviews: 58,
        views: '21.7k',
        orders: 470,
        conversion: '5.5%',
        chartType: 'bar',
    },
    {
        image: product1,
        name: 'Mini Projector',
        sku: 'MP-12081',
        price: '$219.00',
        rating: 4,
        reviews: 35,
        views: '15.9k',
        orders: 310,
        conversion: '4.7%',
        chartType: 'line',
    },
]

function generateRandomData(count = 15, min = 5, max = 20) {
    return Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min)
}

export const getReportsChartOptions = (type: 'line' | 'bar'): ApexOptions => {
    return {
        chart: {
            type: type,
            height: 30,
            width: 100,
            sparkline: {
                enabled: true,
            },
        },
        stroke: {
            width: type === 'line' ? 2 : 0,
            curve: (type === 'line' ? 'smooth' : 'straight') as 'smooth' | 'straight',
        },
        plotOptions: {
            bar: {
                columnWidth: '50%',
                borderRadius: 2,
            },
        },
        series: [
            {
                data: generateRandomData(),
            },
        ],
        colors: ['#3b82f6'],
        tooltip: {
            enabled: false,
        },
    }
}
