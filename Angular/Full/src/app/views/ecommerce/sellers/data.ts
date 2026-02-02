import {SellerType} from '@/app/views/ecommerce/sellers/types';
import {ApexOptions} from 'ng-apexcharts';

function generateRandomData(count: number = 15, min: number = 5, max: number = 20): number[] {
    return Array.from({length: count}, () =>
        Math.floor(Math.random() * (max - min + 1)) + min
    );
}

const sellerChartOptions1:() => ApexOptions = () => ({
    chart: {
        type: 'bar', height: 30, width: 100, sparkline: {
            enabled: true
        }
    }, stroke: {
        width: 0,
        curve: 'smooth'
    }, plotOptions: {
        bar: {
            columnWidth: '50%', borderRadius: 2
        }
    }, series: [{
        data: generateRandomData()
    }],
    colors: ['#3b82f6'], tooltip: {
        enabled: false
    }
})

const sellerChartOptions2:() => ApexOptions = () => ({
    chart: {
        type: 'line', height: 30, width: 100, sparkline: {
            enabled: true
        }
    }, stroke: {
        width: 2,
        curve: 'smooth'
    }, plotOptions: {
        bar: {
            columnWidth: '50%', borderRadius: 2
        }
    }, series: [{
        data: generateRandomData()
    }],
    colors: ['#3b82f6'], tooltip: {
        enabled: false
    }
})


export const sellers: SellerType[] = [
    {
        id: 1,
        name: 'GreenTech Solutions',
        image: 'assets/images/sellers/3.png',
        sinceYear: 2005,
        products: 1456,
        orders: 18120,
        rating: 4.5,
        location: 'CA',
        flag: 'assets/images/flags/ca.svg',
        balance: 925,
        reportChartOptions: sellerChartOptions1,
    },
    {
        id: 2,
        name: 'TechTonic Store',
        image: 'assets/images/sellers/4.png',
        sinceYear: 2010,
        products: 2378,
        orders: 25892,
        rating: 3,
        location: 'UK',
        flag: 'assets/images/flags/gb.svg',
        balance: 145.7,
        reportChartOptions: sellerChartOptions2,
    },
    {
        id: 3,
        name: 'UrbanTech Gadgets',
        image: 'assets/images/sellers/5.png',
        sinceYear: 2012,
        products: 3120,
        orders: 35210,
        rating: 3.5,
        location: 'IN',
        flag: 'assets/images/flags/in.svg',
        balance: 300.4,
        reportChartOptions: sellerChartOptions2,
    },
    {
        id: 4,
        name: 'NextGen Electronics',
        image: 'assets/images/sellers/6.png',
        sinceYear: 2018,
        products: 1748,
        orders: 12563,
        rating: 2,
        location: 'FR',
        flag: 'assets/images/flags/fr.svg',
        balance: 789,
        reportChartOptions: sellerChartOptions1,
    },
    {
        id: 5,
        name: 'SmartHome Goods',
        image: 'assets/images/sellers/7.png',
        sinceYear: 2015,
        products: 520,
        orders: 3321,
        rating: 2,
        location: 'DE',
        flag: 'assets/images/flags/de.svg',
        balance: 562,
        reportChartOptions: sellerChartOptions2,
    },
    {
        id: 6,
        name: 'TechMasters',
        image: 'assets/images/sellers/8.png',
        sinceYear: 2013,
        products: 2160,
        orders: 40500,
        rating: 5,
        location: 'US',
        flag: 'assets/images/flags/us.svg',
        balance: 600,
        reportChartOptions: sellerChartOptions2,
    },
    {
        id: 7,
        name: 'FutureGizmos',
        image: 'assets/images/sellers/9.png',
        sinceYear: 2020,
        products: 1400,
        orders: 30000,
        rating: 2,
        location: 'IT',
        flag: 'assets/images/flags/it.svg',
        balance: 170.2,
        reportChartOptions: sellerChartOptions2,
    },
    {
        id: 8,
        name: 'GizmoX',
        image: 'assets/images/sellers/10.png',
        sinceYear: 2016,
        products: 2100,
        orders: 28950,
        rating: 2,
        location: 'AU',
        flag: 'assets/images/flags/au.svg',
        balance: 210.3,
        reportChartOptions: sellerChartOptions1,
    },
    {
        id: 9,
        name: 'NextWave Electronics',
        image: 'assets/images/sellers/1.png',
        sinceYear: 2017,
        products: 1900,
        orders: 22510,
        rating: 3.5,
        location: 'BR',
        flag: 'assets/images/flags/br.svg',
        balance: 125.4,
        reportChartOptions: sellerChartOptions1,
    },
    {
        id: 10,
        name: 'FutureTech Innovations',
        image: 'assets/images/sellers/2.png',
        sinceYear: 2019,
        products: 3250,
        orders: 40300,
        rating: 4,
        location: 'JP',
        flag: 'assets/images/flags/jp.svg',
        balance: 340.7,
        reportChartOptions: sellerChartOptions2,
    }
];
