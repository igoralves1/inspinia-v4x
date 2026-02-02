export type AnalyticStatsType = {
    id: number,
    icon: string;
    count: {
        prefix?: string,
        value: number,
        suffix?: string
    },
    title: string
    percentage: number;
    percentageIcon: string;
    isPositive: boolean
}
export type SessionPageViewData = {
    sessions: number[];
    pageViews: number[];
}

export type DeviceSeries = {
    name: string;
    data: {
        x: number;
        y: number;
        z: number;
    }[];
}

export type DeviceSessionType = {
    name: string,
    platforms: string,
    users: number,
    change: number,
    percentage: number,
    isPositive: boolean
}

export type  PageVisitType = {
    url: string;
    uniqueVisitors: number;
    totalPageviews: number;
}

export type CountryType = {
    name: string;
    flag: string;
    count: number;
    change: number;
    variant: 'danger' | 'success' | 'warning'
}

export type CampaignType = {
    id: number;
    name: string;
    icon: string;
    variant: string;
    visitors: number;
    newUsers: number;
    sessions: number;
    bounceRate: number;
    pageVisits: number;
    avgDuration: string;
    leads: number;
    revenue: number;
    conversion: number;
    isPositive: boolean;
}
