import {ApexOptions} from 'ng-apexcharts';

export type ApiStatisticsWidgetType = {
    icon: string;
    variant: string;
    title: string;
    count: string;
    chartOptions?: () => ApexOptions;
};

export type ApiClientType = {
    name: string;
    author: string;
    avatar: string;
    apiKey: string;
    status: "pending" | "revoked" | "active" | "suspended" | "trial" | "expired";
    created: string;
    expiryDate: string;
    region: string;
    regionFlag: string;
    selected?: boolean;
}
