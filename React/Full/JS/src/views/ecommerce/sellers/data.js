import seller1 from '@/assets/images/sellers/1.png';
import seller10 from '@/assets/images/sellers/10.png';
import seller2 from '@/assets/images/sellers/2.png';
import seller3 from '@/assets/images/sellers/3.png';
import seller4 from '@/assets/images/sellers/4.png';
import seller5 from '@/assets/images/sellers/5.png';
import seller6 from '@/assets/images/sellers/6.png';
import seller7 from '@/assets/images/sellers/7.png';
import seller8 from '@/assets/images/sellers/8.png';
import seller9 from '@/assets/images/sellers/9.png';
import flagAU from '@/assets/images/flags/au.svg';
import flagBR from '@/assets/images/flags/br.svg';
import flagCA from '@/assets/images/flags/ca.svg';
import flagDE from '@/assets/images/flags/de.svg';
import flagFR from '@/assets/images/flags/fr.svg';
import flagGB from '@/assets/images/flags/gb.svg';
import flagIN from '@/assets/images/flags/in.svg';
import flagIT from '@/assets/images/flags/it.svg';
import flagJP from '@/assets/images/flags/jp.svg';
import flagUS from '@/assets/images/flags/us.svg';
export const sellers = [{
  id: 1,
  name: 'GreenTech Solutions',
  image: seller3,
  sinceYear: 2005,
  products: 1456,
  orders: 18120,
  rating: 4.5,
  location: 'CA',
  flag: flagCA,
  balance: 92.5,
  chartType: 'bar'
}, {
  id: 2,
  name: 'TechTonic Store',
  image: seller4,
  sinceYear: 2010,
  products: 2378,
  orders: 25892,
  rating: 3,
  location: 'UK',
  flag: flagGB,
  balance: 145.7,
  chartType: 'line'
}, {
  id: 3,
  name: 'UrbanTech Gadgets',
  image: seller5,
  sinceYear: 2012,
  products: 3120,
  orders: 35210,
  rating: 3.5,
  location: 'IN',
  flag: flagIN,
  balance: 300.4,
  chartType: 'line'
}, {
  id: 4,
  name: 'NextGen Electronics',
  image: seller6,
  sinceYear: 2018,
  products: 1748,
  orders: 12563,
  rating: 2,
  location: 'FR',
  flag: flagFR,
  balance: 78.9,
  chartType: 'bar'
}, {
  id: 5,
  name: 'SmartHome Goods',
  image: seller7,
  sinceYear: 2015,
  products: 520,
  orders: 3321,
  rating: 2,
  location: 'DE',
  flag: flagDE,
  balance: 56.2,
  chartType: 'line'
}, {
  id: 6,
  name: 'TechMasters',
  image: seller8,
  sinceYear: 2013,
  products: 2160,
  orders: 40500,
  rating: 5,
  location: 'US',
  flag: flagUS,
  balance: 600,
  chartType: 'line'
}, {
  id: 7,
  name: 'FutureGizmos',
  image: seller9,
  sinceYear: 2020,
  products: 1400,
  orders: 30000,
  rating: 2,
  location: 'IT',
  flag: flagIT,
  balance: 170.2,
  chartType: 'line'
}, {
  id: 8,
  name: 'GizmoX',
  image: seller10,
  sinceYear: 2016,
  products: 2100,
  orders: 28950,
  rating: 2,
  location: 'AU',
  flag: flagAU,
  balance: 210.3,
  chartType: 'bar'
}, {
  id: 9,
  name: 'NextWave Electronics',
  image: seller1,
  sinceYear: 2017,
  products: 1900,
  orders: 22510,
  rating: 3.5,
  location: 'BR',
  flag: flagBR,
  balance: 125.4,
  chartType: 'bar'
}, {
  id: 10,
  name: 'FutureTech Innovations',
  image: seller2,
  sinceYear: 2019,
  products: 3250,
  orders: 40300,
  rating: 4,
  location: 'JP',
  flag: flagJP,
  balance: 340.7,
  chartType: 'line'
}];
function generateRandomData(count = 15, min = 5, max = 20) {
  return Array.from({
    length: count
  }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}
export const getSellerReportChartOptions = type => {
  return {
    chart: {
      type: type,
      height: 30,
      width: 100,
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      width: type === 'line' ? 2 : 0,
      curve: type === 'line' ? 'smooth' : 'straight'
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
        borderRadius: 2
      }
    },
    series: [{
      data: generateRandomData()
    }],
    colors: ['#3b82f6'],
    tooltip: {
      enabled: false
    }
  };
};