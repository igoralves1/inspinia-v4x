import {EChartsOption} from 'echarts';
import {CountType, VariantType} from '@/app/types';

export type StatisticsWidgetType = {
    title: string;
    badge?: {
        text: string;
        variant: 'success' | 'primary' | 'info' | 'warning';
    };
    value: number;
    prefix?: string;
    suffix?: string;
    description: string;
    chartOptions?: () => EChartsOption;
};

export type StatisticsWithChartType = {
    title: string;
    badge?: {
        text: string;
        variant: VariantType
    };
    count: CountType;
    description: string;
    chartOptions: () => EChartsOption;
    chartHeight: string;
    chartWidth: string;
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
