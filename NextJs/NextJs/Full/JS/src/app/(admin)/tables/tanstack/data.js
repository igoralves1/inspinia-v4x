import { format, startOfYear, subDays } from 'date-fns';
import product1 from '@/assets/images/products/1.png';
import product10 from '@/assets/images/products/10.png';
import product2 from '@/assets/images/products/2.png';
import product3 from '@/assets/images/products/3.png';
import product4 from '@/assets/images/products/4.png';
import product5 from '@/assets/images/products/5.png';
import product6 from '@/assets/images/products/6.png';
import product7 from '@/assets/images/products/7.png';
import product8 from '@/assets/images/products/8.png';
import product9 from '@/assets/images/products/9.png';
const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};
const today = new Date();
const sevenDaysAgo = subDays(today, 7);
const thirtyDaysAgo = subDays(today, 30);
const yearStart = startOfYear(today);
const productDates = [...Array(3).fill(null).map(() => randomDate(new Date(today.setHours(0, 0, 0, 0)), new Date())), ...Array(3).fill(null).map(() => randomDate(sevenDaysAgo, today)), ...Array(2).fill(null).map(() => randomDate(thirtyDaysAgo, sevenDaysAgo)), ...Array(2).fill(null).map(() => randomDate(yearStart, thirtyDaysAgo))];
export const products = [{
  image: product1,
  name: 'Wireless Earbuds',
  brand: 'My Furniture',
  code: 'WB-10245',
  category: 'Electronics',
  stock: 56,
  price: 59.99,
  sold: 124,
  rating: 5,
  reviews: 87,
  status: 'published',
  date: format(productDates[0], 'dd MMM, yyyy'),
  time: format(productDates[0], 'h:mm a'),
  url: ''
}, {
  image: product2,
  name: 'Smart LED Desk Lamp',
  brand: 'BrightLite',
  code: 'SL-89012',
  category: 'Home & Office',
  stock: 32,
  price: 39.49,
  sold: 78,
  rating: 4,
  reviews: 54,
  status: 'pending',
  date: format(productDates[1], 'dd MMM, yyyy'),
  time: format(productDates[1], 'h:mm a'),
  url: ''
}, {
  image: product3,
  name: "Men's Running Shoes",
  brand: 'ActiveWear Co.',
  code: 'RS-20450',
  category: 'Fashion',
  stock: 120,
  price: 89.0,
  sold: 231,
  rating: 5,
  reviews: 142,
  status: 'published',
  date: format(productDates[2], 'dd MMM, yyyy'),
  time: format(productDates[2], 'h:mm a'),
  url: ''
}, {
  image: product4,
  name: 'Fitness Tracker Watch',
  brand: 'FitPulse',
  code: 'FT-67123',
  category: 'Fitness',
  stock: 78,
  price: 49.95,
  sold: 198,
  rating: 4,
  reviews: 89,
  status: 'published',
  date: format(productDates[3], 'dd MMM, yyyy'),
  time: format(productDates[3], 'h:mm a'),
  url: ''
}, {
  image: product5,
  name: 'Gaming Mouse RGB',
  brand: 'HyperClick',
  code: 'GM-72109',
  category: 'Gaming',
  stock: 120,
  price: 29.99,
  sold: 243,
  rating: 3,
  reviews: 102,
  status: 'published',
  date: format(productDates[4], 'dd MMM, yyyy'),
  time: format(productDates[4], 'h:mm a'),
  url: ''
}, {
  image: product6,
  name: 'Modern Lounge Chair',
  brand: 'UrbanLiving',
  code: 'FC-31220',
  category: 'Furniture',
  stock: 24,
  price: 199,
  sold: 38,
  rating: 5,
  reviews: 27,
  status: 'rejected',
  date: format(productDates[5], 'dd MMM, yyyy'),
  time: format(productDates[5], 'h:mm a'),
  url: ''
}, {
  image: product7,
  name: 'Plush Toy Bear',
  brand: 'Softies',
  code: 'TY-00788',
  category: 'Toys',
  stock: 150,
  price: 15.99,
  sold: 305,
  rating: 4,
  reviews: 120,
  status: 'published',
  date: format(productDates[6], 'dd MMM, yyyy'),
  time: format(productDates[6], 'h:mm a'),
  url: ''
}, {
  image: product8,
  name: '55\" Ultra HD Smart TV',
  brand: 'ViewMaster',
  code: 'TV-5588',
  category: 'Electronics',
  stock: 64,
  price: 499,
  sold: 142,
  rating: 4,
  reviews: 88,
  status: 'published',
  date: format(productDates[7], 'dd MMM, yyyy'),
  time: format(productDates[7], 'h:mm a'),
  url: ''
}, {
  image: product9,
  name: 'Apple iMac 24\" M3',
  brand: 'Apple',
  code: 'IMAC-M3-24',
  category: 'Computers',
  stock: 18,
  price: 1399,
  sold: 29,
  rating: 5,
  reviews: 16,
  status: 'pending',
  date: format(productDates[8], 'dd MMM, yyyy'),
  time: format(productDates[8], 'h:mm a'),
  url: ''
}, {
  image: product10,
  name: 'Smart Watch Pro X2',
  brand: 'FitTech',
  code: 'SWPX2-GL',
  category: 'Wearables',
  stock: 85,
  price: 149.5,
  sold: 197,
  rating: 4,
  reviews: 65,
  status: 'published',
  date: format(productDates[9], 'dd MMM, yyyy'),
  time: format(productDates[9], 'h:mm a'),
  url: ''
}];