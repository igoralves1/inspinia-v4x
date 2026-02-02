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
import type { SellerProductType, SellerStatisticType } from './types'


function generateRandomData(count: number = 15, min: number = 5, max: number = 20): number[] {
    return Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min)
}

export const sellerStatistics: SellerStatisticType[] = [
    {
        title: 'Orders',
        icon: 'tabler:shopping-cart',
        description: 'Total Orders',
        variant: 'success',
        count: { value: 1250 },
        totalCount: '15,320',
    },
    {
        title: 'Revenue',
        icon: 'tabler:currency-dollar',
        description: 'Total Revenue',
        variant: 'warning',
        count: { value: 98.7, prefix: '$', suffix: 'k' },
        totalCount: '$1.2M',
    },
    {
        title: 'Ratings',
        icon: 'tabler:star',
        description: 'Average Rating',
        variant: 'info',
        count: { value: 4.8 },
        totalCount: '5k Reviews',
    },
    {
        title: 'Products',
        icon: 'tabler:box',
        description: 'Total Products',
        variant: 'secondary',
        count: { value: 350 },
        totalCount: '750 Variants',
    },
]

export const getSellerChartOptions: () => ApexOptions = () => ({
    series: [
        {
            name: 'Orders',
            type: 'area',
            data: generateRandomData(12, 40, 100),
        },
        {
            name: 'Earnings',
            type: 'bar',
            data: generateRandomData(12, 70, 150).map((x) => parseFloat((x * 1.1).toFixed(2))),
        },
        {
            name: 'Refunds',
            type: 'line',
            data: generateRandomData(12, 3, 12),
        },
    ],

    dataLabels: {
        enabled: false,
    },
    chart: {
        height: 370,
        type: 'line',
        toolbar: {
            show: false,
        },
    },
    stroke: {
        curve: 'straight',
        dashArray: [0, 0, 8],
        width: [2, 0, 2.2],
    },
    fill: {
        opacity: [0.1, 0.9, 1],
    },
    markers: {
        size: [0, 0, 0],
        strokeWidth: 2,
        hover: {
            size: 4,
        },
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisTicks: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
    },
    grid: {
        show: true,
        xaxis: {
            lines: {
                show: true,
            },
        },
        yaxis: {
            lines: {
                show: false,
            },
        },
        padding: {
            top: 0,
            right: 0,
            bottom: 10,
            left: 0,
        },
    },
    legend: {
        show: true,
        horizontalAlign: 'center',
        offsetX: 0,
        offsetY: 5,
        markers: {
            shape: 'circle',
        },
        itemMargin: {
            horizontal: 10,
            vertical: 0,
        },
    },
    plotOptions: {
        bar: {
            columnWidth: '30%',
            barHeight: '70%',
            borderRadius: 5,
        },
    },
    colors: ['#1ab394', '#308fcb', '#f9b367'],
    tooltip: {
        intersect: false,
        shared: true,
        y: [
            {
                formatter: function (y: number) {
                    if (typeof y !== 'undefined') {
                        return y.toFixed(0) + ' Sales'
                    }
                    return y
                },
            },
            {
                formatter: function (y: number) {
                    if (typeof y !== 'undefined') {
                        return '$' + y.toFixed(2) + 'k'
                    }
                    return y
                },
            },
            {
                formatter: function (y: number) {
                    if (typeof y !== 'undefined') {
                        return y.toFixed(0) + ' Sales'
                    }
                    return y
                },
            },
        ],
    },
})

export const sellerProducts: SellerProductType[] = [
    {
        id: 1,
        name: 'Gaming Laptop Pro',
        image: product1,
        category: 'Computers',
        stock: 15,
        price: 1299.0,
        orders: 45,
        status: 'published',
    },
    {
        id: 2,
        name: 'Vintage Leather Wallet',
        image: product2,
        category: 'Accessories',
        stock: 78,
        price: 49.95,
        orders: 210,
        status: 'pending',
    },
    {
        id: 3,
        name: "Men's Running Shoes",
        image: product3,
        category: 'Fashion',
        stock: 120,
        price: 89.0,
        orders: 231,
        status: 'published',
    },
    {
        id: 4,
        name: 'Fitness Tracker Watch',
        image: product4,
        category: 'Fitness',
        stock: 78,
        price: 49.95,
        orders: 198,
        status: 'published',
    },
    {
        id: 5,
        name: 'Gaming Mouse RGB',
        image: product5,
        category: 'Gaming',
        stock: 120,
        price: 29.99,
        orders: 243,
        status: 'published',
    },
    {
        id: 6,
        name: 'Modern Lounge Chair',
        image: product6,
        category: 'Furniture',
        stock: 24,
        price: 199.0,
        orders: 38,
        status: 'out-of-stock',
    },
    {
        id: 7,
        name: 'Plush Toy Bear',
        image: product7,
        category: 'Toys',
        stock: 150,
        price: 15.99,
        orders: 305,
        status: 'published',
    },
    {
        id: 8,
        name: '55" Ultra HD Smart TV',
        image: product8,
        category: 'Electronics',
        stock: 64,
        price: 499.0,
        orders: 142,
        status: 'published',
    },
    {
        id: 9,
        name: 'Apple iMac 24" M3',
        image: product9,
        category: 'Computers',
        stock: 18,
        price: 1399.0,
        orders: 29,
        status: 'pending',
    },
    {
        id: 10,
        name: 'Smart Watch Pro X2',
        image: product10,
        category: 'Wearables',
        stock: 85,
        price: 149.5,
        orders: 197,
        status: 'published',
    },
]
