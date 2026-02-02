import type { VariantType } from "@/types"

export type Widget1Type = {
    title: string
    icon: string
    description: string
    variant: VariantType
    count: {
        value: number
        prefix?: string
        suffix?: string
    }
    totalCount: string
}

export type SellerStatisticType = {
    title: string
    icon: string
    description: string
    variant: VariantType
    count: {
        value: number
        prefix?: string
        suffix?: string
    }
    totalCount: string
}

export type SellerProductType = {
    id: number
    name: string
    image: string
    category: string
    stock: number
    price: number
    orders: number
    status: 'published' | 'pending' | 'out-of-stock'
}