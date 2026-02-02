export type CountryDataType = {
    rank: number
    code: string
    name: string
    flag: string
    visitors: number
    trend: {
        value: number
        type: 'success' | 'danger' | 'warning'
    }
}

export type ChatItemType = {
    id: number
    name: string
    avatar?: string
    avatarText?: string
    avatarColor?: string
    status?: 'active' | 'inactive'
    badge?: number
    time?: string
    message: string
}

export type CampaignDataType = {
    id: number
    name: string
    icon: string
    iconProps: {
        className: string
    }
    visitors: number
    newUsers: number
    sessions: number
    bounceRate: number
    pagesPerVisit: number
    avgDuration: string
    leads: number
    revenue: string
    conversion: number
}

export type AnalyticsCardProps = {
    id: number
    value: number
    unit: string
    percentage: number
    isPositive: boolean
    title: string
    icon: string
    percentageIcon: string
}
