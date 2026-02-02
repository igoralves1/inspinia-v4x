import user2 from '@/assets/images/users/user-2.jpg';
import user3 from '@/assets/images/users/user-3.jpg';
import user4 from '@/assets/images/users/user-4.jpg';
import user5 from '@/assets/images/users/user-5.jpg';
import user6 from '@/assets/images/users/user-6.jpg';
import user7 from '@/assets/images/users/user-7.jpg';
import user8 from '@/assets/images/users/user-8.jpg';
import user9 from '@/assets/images/users/user-9.jpg';
import auFlag from '@/assets/images/flags/au.svg';
import caFlag from '@/assets/images/flags/ca.svg';
import deFlag from '@/assets/images/flags/de.svg';
import frFlag from '@/assets/images/flags/fr.svg';
import gbFlag from '@/assets/images/flags/gb.svg';
import inFlag from '@/assets/images/flags/in.svg';
import usFlag from '@/assets/images/flags/us.svg';
import { getColor } from '@/helpers/color';
import { TbAlertTriangle, TbChecks, TbCodeDots, TbServer2 } from 'react-icons/tb';
const sparklineConfig = (data, color) => ({
  chart: {
    type: 'area',
    height: 60,
    sparkline: {
      enabled: true
    }
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  series: [{
    data
  }],
  colors: [color],
  tooltip: {
    enabled: false
  }
});
const dummyNewUsers = [Math.sin(0) * 50 + 500, Math.sin(1) * 60 + 500, Math.sin(2) * 70 + 500, Math.sin(3) * 80 + 500, Math.sin(4) * 90 + 500, Math.sin(5) * 100 + 500, Math.sin(6) * 110 + 500];
const dummyActiveUsers = [89000 + Math.sin(0) * 500, 89200 + Math.sin(1) * 600, 89700 + Math.sin(2) * 700, 90500 + Math.sin(3) * 800, 91000 + Math.sin(4) * 900, 91300 + Math.sin(5) * 1000, 92000 + Math.sin(6) * 1100];
const dummyBlockedUsers = [2600 + Math.sin(0) * 10, 2605 + Math.sin(1) * 12, 2610 + Math.sin(2) * 15, 2608 + Math.sin(3) * 18, 2612 + Math.sin(4) * 20];
const dummyTables = [7000 + Math.sin(0) * 150, 7100 + Math.sin(1) * 160, 7200 + Math.sin(2) * 170, 7400 + Math.sin(3) * 180, 7850 + Math.sin(4) * 200];
export const apiStatistics = [{
  title: 'Total API Calls',
  value: '1,254,300',
  icon: TbServer2,
  variant: 'success',
  chartOptions: () => sparklineConfig(dummyNewUsers, getColor('secondary'))
}, {
  title: 'Successful Conversions',
  value: '1,192,450',
  icon: TbChecks,
  variant: 'success',
  chartOptions: () => sparklineConfig(dummyActiveUsers, getColor('warning'))
}, {
  title: 'Failed Requests',
  value: '61,850',
  icon: TbAlertTriangle,
  variant: 'danger',
  chartOptions: () => sparklineConfig(dummyBlockedUsers, getColor('info'))
}, {
  title: 'Active Endpoints',
  value: '143',
  icon: TbCodeDots,
  variant: 'info',
  chartOptions: () => sparklineConfig(dummyTables, getColor('danger'))
}];
export const apiClients = [{
  name: 'APINexus',
  author: 'Mark Reynolds',
  image: user2,
  apiKey: 'e4A7Fc98z120XYz776abc90MNZ',
  status: 'pending',
  createdAt: 'Jan 10, 2025',
  expiresAt: 'Nov 15, 2025',
  region: 'DE',
  regionFlag: deFlag
}, {
  name: 'DataPulse',
  author: 'Sophia Turner',
  image: user4,
  apiKey: '9BcD456Xy78LmN0zPQR12sA3Z',
  status: 'revoked',
  createdAt: 'Mar 5, 2025',
  expiresAt: 'Aug 20, 2025',
  region: 'UK',
  regionFlag: gbFlag
}, {
  name: 'AuthKit',
  author: 'Liam Watson',
  image: user5,
  apiKey: 'ZZ99xC8K23Fm10TyPLqZa17d',
  status: 'active',
  createdAt: 'Apr 22, 2025',
  expiresAt: 'Dec 31, 2025',
  region: 'IN',
  regionFlag: inFlag
}, {
  name: 'APIxEdge',
  author: 'Ava Turner',
  image: user2,
  apiKey: 'XY91kLpB42Ga98WxRTzEe55n',
  status: 'pending',
  createdAt: 'Apr 10, 2025',
  expiresAt: 'Oct 10, 2025',
  region: 'US',
  regionFlag: usFlag
}, {
  name: 'DataLinker',
  author: 'Noah Reed',
  image: user7,
  apiKey: 'BB22zWqT65Op90VxMLaRt18c',
  status: 'suspended',
  createdAt: 'Mar 15, 2025',
  expiresAt: 'Sep 15, 2025',
  region: 'DE',
  regionFlag: deFlag
}, {
  name: 'WebhookMate',
  author: 'Sophia Lee',
  image: user3,
  apiKey: 'RM19yUlP75Kl44YvNJdHg09s',
  status: 'active',
  createdAt: 'Jan 01, 2025',
  expiresAt: 'Dec 31, 2025',
  region: 'UK',
  regionFlag: gbFlag
}, {
  name: 'DevPortal',
  author: 'Mason Clark',
  image: user4,
  apiKey: 'AA47qBcJ61Tr77WpKKzTy39k',
  status: 'trial',
  createdAt: 'Feb 01, 2025',
  expiresAt: 'May 01, 2025',
  region: 'AU',
  regionFlag: auFlag
}, {
  name: 'NotifyX',
  author: 'Ella James',
  image: user6,
  apiKey: 'ZP83mXcD28Uv11MtYYoXx03b',
  status: 'active',
  createdAt: 'Apr 01, 2025',
  expiresAt: 'Jan 01, 2026',
  region: 'CA',
  regionFlag: caFlag
}, {
  name: 'TokenVault',
  author: 'Lucas Hill',
  image: user8,
  apiKey: 'LK35yTrF82Lo99UiSSpPr47x',
  status: 'expired',
  createdAt: 'Jul 15, 2024',
  expiresAt: 'Jan 15, 2025',
  region: 'FR',
  regionFlag: frFlag
}, {
  name: 'StreamAPI',
  author: 'Mia Bennett',
  image: user9,
  apiKey: 'DW64aUvQ11Gh32PpDDjWw72t',
  status: 'active',
  createdAt: 'Mar 05, 2025',
  expiresAt: 'Dec 05, 2025',
  region: 'IN',
  regionFlag: inFlag
}];