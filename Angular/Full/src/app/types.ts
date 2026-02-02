export type CountType = {
    prefix?: string;
    suffix?: string;
    value: number;
}

export type VariantType = "primary" | "danger" | "warning" | "success" | "info" | "dark" | "secondary" | "purple" | "light"

export type StatisticWidget1Type = {
    title: string;
    description: string;
    label: string;
    icon: string;
    count: CountType;
    variant: string;
    totalCount: CountType;
}

export type StatisticWidgetType = {
    title: string;
    subTitle: string;
    icon: string;
    variant: string;
    count: CountType;
    totalCount: CountType;
}
