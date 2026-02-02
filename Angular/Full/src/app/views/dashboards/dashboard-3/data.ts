import {
    AnalyticStatsType,
    CampaignType,
    CountryType,
    DeviceSeries,
    DeviceSessionType,
    PageVisitType,
    SessionPageViewData
} from '@/app/views/dashboards/dashboard-3/types';
import {ApexOptions} from 'ng-apexcharts';
import {getColor} from '@/app/utils/color-utils';

function generateRandomData(count: number, min: number, max: number): number[] {
    return Array.from({length: count}, () =>
        Math.floor(Math.random() * (max - min + 1)) + min
    );
}

function generateSessionAndPageViewData(count: number): SessionPageViewData {
    const sessions = generateRandomData(count, 250, 450);
    const pageViews = sessions.map(session =>
        Math.floor(session * (2 + Math.random() * 0.1))
    );
    return {sessions, pageViews};
}

function generateRandomDeviceData(
    name: string,
    minY: number,
    maxY: number,
    count: number = 10
): DeviceSeries {
    const data: { x: number; y: number; z: number; }[] = [];

    for (let i = 1; i <= count; i++) {
        const y = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
        const z = Math.floor(Math.random() * (35 - 15 + 1)) + 15;
        data.push({x: i, y, z});
    }

    return {name, data};
}

const {sessions, pageViews} = generateSessionAndPageViewData(19);

export const analyticsData: AnalyticStatsType[] = [
    {
        id: 1,
        icon: 'tablerEye',
        count: {value: 14.59, suffix: 'M'},
        title: 'Total Views',
        percentage: 5.2,
        percentageIcon: 'tablerTrendingUp',
        isPositive: true
    },
    {
        id: 2,
        icon: 'tablerClock',
        count: {value: 815.58, suffix: 'k'},
        title: 'Sessions',
        percentage: 3.9,
        percentageIcon: 'tablerActivity',
        isPositive: true
    },
    {
        id: 3,
        icon: 'tablerRepeatOnce',
        count: {value: 41.3, suffix: '%'},
        title: 'Bounce Rate',
        percentage: 1.1,
        percentageIcon: 'tablerArrowDownLeft',
        isPositive: false
    },
    {
        id: 4,
        icon: 'tablerUser',
        count: {value: 56.39, suffix: 'k'},
        title: 'Active Users',
        percentage: 2.3,
        percentageIcon: 'tablerUsers',
        isPositive: true
    }
]

export const analyticChartOptions: () => ApexOptions = () => ({
    chart: {
        height: 310,
        type: 'area',
        toolbar: {show: false}
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 2,
        curve: 'smooth'
    },
    colors: [getColor('primary'), getColor('secondary')],
    series: [
        {
            name: 'Sessions',
            data: sessions
        },
        {
            name: 'Page Views',
            data: pageViews
        }
    ],
    legend: {
        offsetY: 5,
    },
    xaxis: {
        categories: ["", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM",
            "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM",
            "9 PM", "10 PM", "11 PM", "12 AM", ""],
        axisBorder: {show: false},
        axisTicks: {show: false},
        tickAmount: 6,
        labels: {
            style: {
                fontSize: "12px"
            }
        }
    },
    tooltip: {
        shared: true,
        y: {
            formatter: function (val: number, opts: any) {
                const label = opts.seriesIndex === 0 ? "Sessions" : "Page Views";
                return `${val} ${label}`;
            }
        }
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.2,
            stops: [15, 120, 100]
        }
    },
    grid: {
        borderColor: getColor('border-color'),
        padding: {
            bottom: 5
        }
    }
})

export const deviceSessionsChartOptions: () => ApexOptions = () => ({
    chart: {
        height: 208,
        type: 'bubble',
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    series: [
        generateRandomDeviceData('Desktop', 20, 150),
        generateRandomDeviceData('Mobile', 20, 120),
        generateRandomDeviceData('Tablet', 20, 60)
    ],
    fill: {
        opacity: 0.8,
    },
    xaxis: {
        min: 0,
        max: 11,
        labels: {show: false},
        axisBorder: {show: false},
        axisTicks: {show: false}
    },
    yaxis: {
        min: 0,
        max: 170,
        show: false,
        labels: {show: false},
        axisBorder: {show: false},
        axisTicks: {show: false}
    },

    grid: {
        padding: {
            top: -20,
            right: 20,
            bottom: 0,
            left: 20
        },
        borderColor: getColor('border-color')
    },

    legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'center'
    }
})

export const deviceSessionData: DeviceSessionType[] = [
    {
        name: 'Mobile',
        platforms: 'Android / iOS',
        users: 4620,
        change: 3.4,
        percentage: 58,
        isPositive: true,
    },
    {
        name: 'Desktop',
        platforms: 'Windows / Mac',
        users: 2510,
        change: 1.9,
        percentage: 32,
        isPositive: true,
    },
    {
        name: 'Tablet',
        platforms: 'iPad / Android Tabs',
        users: 820,
        change: 0.8,
        percentage: 10,
        isPositive: false,
    }
]

export const pageVisits: PageVisitType[] = [
    {url: '/dashboard', uniqueVisitors: 9.8, totalPageviews: 8.5},
    {url: '/ecommerce-index', uniqueVisitors: 8.2, totalPageviews: 7.1},
    {url: '/apps/projects-overview', uniqueVisitors: 7600, totalPageviews: 6.2},
    {url: '/pages/contact', uniqueVisitors: 5.9, totalPageviews: 4.8},
    {url: '/support/faq', uniqueVisitors: 5.2, totalPageviews: 4.3},
    {url: '/login', uniqueVisitors: 4.7, totalPageviews: 3.9},
];

export const countries: CountryType[] = [
    {
        name: 'Germany',
        flag: 'assets/images/flags/de.svg',
        count: 10412,
        change: 1.5,
        variant: 'success'
    },
    {
        name: 'France',
        flag: 'assets/images/flags/fr.svg',
        count: 8934,
        change: 0.8,
        variant: 'danger'
    },
    {
        name: 'India',
        flag: 'assets/images/flags/in.svg',
        count: 14217,
        change: 3.2,
        variant: 'success'
    },
    {
        name: 'United States',
        flag: 'assets/images/flags/us.svg',
        count: 18522,
        change: 2.1,
        variant: 'success'
    },
    {
        name: 'United Kingdom',
        flag: 'assets/images/flags/gb.svg',
        count: 7614,
        change: 1.2,
        variant: 'danger'
    },
    {
        name: 'Canada',
        flag: 'assets/images/flags/ca.svg',
        count: 6221,
        change: 0.9,
        variant: 'success'
    },
    {
        name: 'Japan',
        flag: 'assets/images/flags/jp.svg',
        count: 5785,
        change: 0.0,
        variant: 'warning'
    },
    {
        name: 'Australia',
        flag: 'assets/images/flags/au.svg',
        count: 4918,
        change: 1.1,
        variant: 'success'
    },
    {
        name: 'Brazil',
        flag: 'assets/images/flags/br.svg',
        count: 3874,
        change: 0.5,
        variant: 'danger'
    },
    {
        name: 'Italy',
        flag: 'assets/images/flags/it.svg',
        count: 4105,
        change: 0.7,
        variant: 'success'
    }
];

export const campaignData: CampaignType[] = [
    {
        id: 1,
        name: 'Display Retarget',
        icon: 'tablerBroadcast',
        variant: 'muted',
        visitors: 338,
        newUsers: 160,
        sessions: 4670,
        bounceRate: 19.88,
        pageVisits: 1.92,
        avgDuration: '02:05',
        leads: 298,
        revenue: 1.95,
        conversion: 4.62,
        isPositive: false
    },

    {
        id: 2,
        name: 'Facebook Push',
        icon: 'tablerBrandFacebook',
        variant: 'info',
        visitors: 478,
        newUsers: 245,
        sessions: 6120,
        bounceRate: 21.03,
        pageVisits: 2.87,
        avgDuration: '01:28',
        leads: 398,
        revenue: 3.10,
        conversion: 5.65,
        isPositive: false
    },
    {
        id: 3,
        name: 'Holiday Buzz',
        icon: 'tablerSpeakerphone',
        variant: 'success',
        visitors: 445,
        newUsers: 230,
        sessions: 5710,
        bounceRate: 23.12,
        pageVisits: 2.45,
        avgDuration: '01:22',
        leads: 372,
        revenue: 2.86,
        conversion: 5.12,
        isPositive: false
    },
    {
        id: 4,
        name: 'Email Reconnect',
        icon: 'tablerMailFast',
        variant: 'warning',
        visitors: 392,
        newUsers: 190,
        sessions: 5210,
        bounceRate: 25.74,
        pageVisits: 2.18,
        avgDuration: '01:50',
        leads: 340,
        revenue: 2.45,
        conversion: 4.88,
        isPositive: false
    },

    {
        id: 5,
        name: 'Spring Launch',
        icon: 'tablerRocket',
        variant: 'primary',
        visitors: 502,
        newUsers: 260,
        sessions: 6845,
        bounceRate: 18.22,
        pageVisits: 3.15,
        avgDuration: '01:40',
        leads: 432,
        revenue: 3.64,
        conversion: 6.15,
        isPositive: true
    },
];

