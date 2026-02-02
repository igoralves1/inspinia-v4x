import {ApexOptions} from 'ng-apexcharts';

export type SellerType = {
    id: number;
    name: string;
    image: string;
    products: number;
    orders: number;
    rating: number;
    location: string;
    flag: string;
    balance: number;
    sinceYear: number;
    reportChartOptions: () => ApexOptions;
    selected?: boolean;
};
