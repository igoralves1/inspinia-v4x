import {ApiClientType, ApiStatisticsWidgetType} from '@/app/views/other-apps/api-keys/types';
import {ApexOptions} from 'ng-apexcharts';
import {getColor} from '@/app/utils/color-utils';

const sparklineConfig: (data: number[], color: string) => ApexOptions = (data, color) => ({
    chart: {
        type: 'area',
        height: 60,
        sparkline: { enabled: true }
    },
    stroke: {
        curve: 'smooth',
        width: 2
    },
    series: [{ data }],
    colors: [color],
    tooltip: {
        enabled: false
    }
});

const dummyNewUsers = [
    Math.sin(0) * 50 + 500,
    Math.sin(1) * 60 + 500,
    Math.sin(2) * 70 + 500,
    Math.sin(3) * 80 + 500,
    Math.sin(4) * 90 + 500,
    Math.sin(5) * 100 + 500,
    Math.sin(6) * 110 + 500
];

const dummyActiveUsers = [
    89000 + Math.sin(0) * 500,
    89200 + Math.sin(1) * 600,
    89700 + Math.sin(2) * 700,
    90500 + Math.sin(3) * 800,
    91000 + Math.sin(4) * 900,
    91300 + Math.sin(5) * 1000,
    92000 + Math.sin(6) * 1100
];

const dummyBlockedUsers = [
    2600 + Math.sin(0) * 10,
    2605 + Math.sin(1) * 12,
    2610 + Math.sin(2) * 15,
    2608 + Math.sin(3) * 18,
    2612 + Math.sin(4) * 20
];

const dummyTables = [
    7000 + Math.sin(0) * 150,
    7100 + Math.sin(1) * 160,
    7200 + Math.sin(2) * 170,
    7400 + Math.sin(3) * 180,
    7850 + Math.sin(4) * 200
];

export const apiStatisticsData: ApiStatisticsWidgetType[] = [
    {
        title: "Total API Calls",
        count: "1,254,300",
        icon: "tablerServer2",
        variant: 'success',
        chartOptions: () => sparklineConfig(dummyNewUsers, getColor('secondary'))
    },
    {
        title: "Successful Conversions",
        count: "1,192,450",
        icon: "tablerChecks",
        variant: 'success',
        chartOptions: () => sparklineConfig(dummyActiveUsers, getColor('warning'))
    },
    {
        title: "Failed Requests",
        count: "61,850",
        icon: "tablerAlertTriangle",
        variant: 'danger',
        chartOptions: () => sparklineConfig(dummyBlockedUsers, getColor('info'))
    },
    {
        title: "Active Endpoints",
        count: "143",
        icon: "tablerCodeDots",
        variant: 'info',
        chartOptions: () => sparklineConfig(dummyTables, getColor('danger'))
    },
]

export const apiClients: ApiClientType[] = [
    {
        name: "APINexus",
        author: "Mark Reynolds",
        avatar: "assets/images/users/user-2.jpg",
        apiKey: "e4A7Fc98z120XYz776abc90MNZ",
        status: "pending",
        created: "Jan 10, 2025",
        expiryDate: "Nov 15, 2025",
        region: "DE",
        regionFlag: "assets/images/flags/de.svg"
    },
    {
        name: "DataPulse",
        author: "Sophia Turner",
        avatar: "assets/images/users/user-4.jpg",
        apiKey: "9BcD456Xy78LmN0zPQR12sA3Z",
        status: "revoked",
        created: "Mar 5, 2025",
        expiryDate: "Aug 20, 2025",
        region: "UK",
        regionFlag: "assets/images/flags/gb.svg"
    },
    {
        name: "AuthKit",
        author: "Liam Watson",
        avatar: "assets/images/users/user-5.jpg",
        apiKey: "ZZ99xC8K23Fm10TyPLqZa17d",
        status: "active",
        created: "Apr 22, 2025",
        expiryDate: "Dec 31, 2025",
        region: "IN",
        regionFlag: "assets/images/flags/in.svg"
    },
    {
        name: "APIxEdge",
        author: "Ava Turner",
        avatar: "assets/images/users/user-2.jpg",
        apiKey: "XY91kLpB42Ga98WxRTzEe55n",
        status: "pending",
        created: "Apr 10, 2025",
        expiryDate: "Oct 10, 2025",
        region: "US",
        regionFlag: "assets/images/flags/us.svg"
    },
    {
        name: "DataLinker",
        author: "Noah Reed",
        avatar: "assets/images/users/user-7.jpg",
        apiKey: "BB22zWqT65Op90VxMLaRt18c",
        status: "suspended",
        created: "Mar 15, 2025",
        expiryDate: "Sep 15, 2025",
        region: "DE",
        regionFlag: "assets/images/flags/de.svg"
    },
    {
        name: "WebhookMate",
        author: "Sophia Lee",
        avatar: "assets/images/users/user-3.jpg",
        apiKey: "RM19yUlP75Kl44YvNJdHg09s",
        status: "active",
        created: "Jan 01, 2025",
        expiryDate: "Dec 31, 2025",
        region: "UK",
        regionFlag: "assets/images/flags/gb.svg"
    },
    {
        name: "DevPortal",
        author: "Mason Clark",
        avatar: "assets/images/users/user-4.jpg",
        apiKey: "AA47qBcJ61Tr77WpKKzTy39k",
        status: "trial",
        created: "Feb 01, 2025",
        expiryDate: "May 01, 2025",
        region: "AU",
        regionFlag: "assets/images/flags/au.svg"
    },
    {
        name: "NotifyX",
        author: "Ella James",
        avatar: "assets/images/users/user-6.jpg",
        apiKey: "ZP83mXcD28Uv11MtYYoXx03b",
        status: "active",
        created: "Apr 01, 2025",
        expiryDate: "Jan 01, 2026",
        region: "CA",
        regionFlag: "assets/images/flags/ca.svg"
    },
    {
        name: "TokenVault",
        author: "Lucas Hill",
        avatar: "assets/images/users/user-8.jpg",
        apiKey: "LK35yTrF82Lo99UiSSpPr47x",
        status: "expired",
        created: "Jul 15, 2024",
        expiryDate: "Jan 15, 2025",
        region: "FR",
        regionFlag: "assets/images/flags/fr.svg"
    },
    {
        name: "StreamAPI",
        author: "Mia Bennett",
        avatar: "assets/images/users/user-9.jpg",
        apiKey: "DW64aUvQ11Gh32PpDDjWw72t",
        status: "active",
        created: "Mar 05, 2025",
        expiryDate: "Dec 05, 2025",
        region: "IN",
        regionFlag: "assets/images/flags/in.svg"
    }
];
