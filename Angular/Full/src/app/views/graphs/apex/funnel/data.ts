import {getColor} from "@/app/utils/color-utils";
import {ApexOptions} from "ng-apexcharts";

export const basicFunnelChart: () => ApexOptions = () => ({
    series: [
        {
            name: "E-commerce Sales",
            data: [2000, 1700, 1250, 980, 750, 500, 300, 120],
        },
    ],
    chart: {
        type: 'bar',
        height: 350,
        dropShadow: {
            enabled: true,
        },
        toolbar: {
            show: false,
        },
    },
    colors: [getColor('primary')],
    plotOptions: {
        bar: {
            borderRadius: 0,
            horizontal: true,
            barHeight: '80%',
            isFunnel: true,
        },
    },
    dataLabels: {
        enabled: true,


        dropShadow: {
            enabled: true,
        },
    },
    xaxis: {
        categories: [
            'Visited Website',
            'Viewed Product',
            'Added to Cart',
            'Initiated Checkout',
            'Entered Info',
            'Payment Started',
            'Payment Completed',
            'Order Delivered',
        ],
    },
    legend: {
        show: false,
    },
    grid: {
        padding: {top: -20, bottom: 0}
    }
})

export const pyramidFunnelChart: () => ApexOptions = () => ({
    series: [
        {
            name: "",
            data: [100, 300, 500, 720, 850, 970, 1150, 1500],
        },
    ],
    chart: {
        type: 'bar',
        height: 350,
        dropShadow: {
            enabled: true,
        },
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            borderRadius: 0,
            horizontal: true,
            distributed: true,
            barHeight: '80%',
            isFunnel: true,
        },
    },
    colors: [
        getColor('light'),
        getColor('gray'),
        getColor('danger'),
        getColor('warning'),
        getColor('success'),
        getColor('info'),
        getColor('purple'),
        getColor('secondary'),
    ],
    dataLabels: {
        enabled: true,


        dropShadow: {
            enabled: true,
        },
    },
    xaxis: {
        categories: [
            'Converted Customers',
            'Qualified Leads',
            'Demo Booked',
            'Webinar Attended',
            'Email Clicked',
            'Email Opened',
            'Ad Clicked',
            'Impressions'
        ],
    },
    legend: {
        show: false,
    },
    grid: {
        padding: {top: -20, bottom: 0}
    }
})
