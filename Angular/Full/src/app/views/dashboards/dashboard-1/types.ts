import {EChartsOption} from 'echarts';

export type MessageType = {
    label: string;
    timestamp: string;
    variant: 'primary' | 'info' | 'secondary' | 'light' | 'warning';
};

type CountType = {
    value: number;
    suffix?: string;
    prefix?: string;
};

export type QuarterlyReportType = {
    id: number;
    label: string;
    date: string;
    revenue: CountType;
    expense: CountType;
    margin: CountType;
    chartOptions?: () => EChartsOption;
}

export type ProjectType = {
    id: number;
    title: string;
    description: string;
    category: string;
    name: string;
    avatar: string;
    date: string;
    time: string;
    icon: string;
    variant: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger';
}



export type UserMessageType = {
    id: number;
    name: string;
    avatar?: string;
    message: string;
    time: string;
}

