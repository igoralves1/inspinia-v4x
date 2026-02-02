import {VariantType} from '@/app/types';

type CountType = {
    value: number;
    prefix?: string;
    suffix?: string;
}

export type StatisticCard1Type = {
    title: string;
    icon: string;
    description: string;
    variant: VariantType;
    count: CountType;
    totalCount: CountType;
}

export type StatisticCard2Type = {
    title: string;
    variant?: VariantType;
    count: CountType;
    percentage: number;
    percentageIcon: string;
    isPositive: boolean;
    progress: number;
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

export type CommentType = {
    name: string;
    avatar: string;
    date: string;
    time: string;
    message: string;
    views: number;
    likes: number;
    comments: number;
    reply: CommentType[]
}

export type ChatMessageType = {
    message: string;
    time: string;
    fromUser: boolean;
    avatar: string;
}

export type FileItemType = {
    name: string;
    icon: string;
    size: number;
    users: string[];
}

export type StatisticCard3Type = {
    title: string;
    description: string;
    icon: string;
    label: string;
    variant: VariantType;
    count: CountType;
}

export type StatisticCard4Type = {
    title: string;
    icon: string;
    variant: VariantType;
    count: CountType;
}

export type StatisticCard5Type = {
    title: string;
    progress: number;
    description: string;
    status: string;
}
export type StatisticCard6Type = {
    title: string;
    icon: string;
    variant: VariantType;
    count: CountType;
}
