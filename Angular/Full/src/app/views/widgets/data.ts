import {
    ChatMessageType,
    CommentType,
    CountryType, FileItemType,
    PageVisitType,
    StatisticCard1Type,
    StatisticCard2Type, StatisticCard3Type, StatisticCard4Type, StatisticCard5Type, StatisticCard6Type
} from '@/app/views/widgets/types';
import {StatisticWidget1Type} from '@/app/types';

export const statisticCards1: StatisticCard1Type[] = [
    {
        title: 'Orders',
        icon: 'tablerShoppingCart',
        description: 'Total Orders',
        variant: 'success',
        count: {value: 1250},
        totalCount: {value: 15320}
    },
    {
        title: 'Revenue',
        icon: 'tablerCurrencyDollar',
        description: 'Total Revenue',
        variant: 'warning',
        count: {value: 98.7, prefix: '$', suffix: 'k'},
        totalCount: {value: 1.2, prefix: '$', suffix: 'M'}
    },
    {
        title: 'Ratings',
        icon: 'tablerStar',
        description: 'Average Rating',
        variant: 'info',
        count: {value: 4.8},
        totalCount: {value: 5, suffix: 'k Reviews'}
    },
    {
        title: 'Products',
        icon: 'tablerBox',
        description: 'Total Products',
        variant: 'secondary',
        count: {value: 350},
        totalCount: {value: 750, suffix: ' Variants'}
    }
];

export const statisticCards2: StatisticCard2Type[] = [
    {
        title: 'Total sales in period',
        variant: 'primary',
        count: {value: 24500, prefix: '$'},
        percentage: 18.45,
        percentageIcon: 'tablerArrowUp',
        isPositive: true,
        progress: 18.45
    },
    {
        title: 'Number of customers',
        count: {value: 1240},
        percentage: 10.35,
        percentageIcon: 'tablerArrowDown',
        isPositive: false,
        progress: 10.35
    },
    {
        title: 'Average order value',
        count: {value: 65.49, prefix: '$', suffix: ' USD'},
        percentage: 5.92,
        percentageIcon: 'tablerArrowUp',
        isPositive: true,
        progress: 5.92
    },
    {
        title: 'Products sold in the period',
        variant: 'secondary',
        count: {value: 3750},
        percentage: 22.61,
        percentageIcon: 'tablerBolt',
        isPositive: true,
        progress: 22.61
    },
    {
        title: 'Total sales in period',
        variant: 'warning',
        count: {value: 24500, prefix: '$'},
        percentage: 18.45,
        percentageIcon: 'tablerArrowUp',
        isPositive: true,
        progress: 18.45
    },
    {
        title: 'Number of customers',
        count: {value: 1240},
        percentage: 10.35,
        percentageIcon: 'tablerArrowDown',
        isPositive: false,
        progress: 10.35
    }
];

export const pageVisits: PageVisitType[] = [
    {url: '/dashboard', uniqueVisitors: 9.8, totalPageviews: 8.5},
    {url: '/ecommerce-index', uniqueVisitors: 8.2, totalPageviews: 7.1},
    {url: '/apps/projects-overview', uniqueVisitors: 7.6, totalPageviews: 6.2},
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

export const comments: CommentType[] = [
    {
        name: 'Liam Carter',
        avatar: 'assets/images/users/user-8.jpg',
        date: '15 Apr 2025',
        time: '09:20AM',
        message: 'Loving the new dashboard update! The UI feels much smoother and more intuitive now. Great job!',
        views: 1200,
        likes: 320,
        comments: 14,
        reply: [
            {
                name: 'Nina Bryant',
                avatar: 'assets/images/users/user-10.jpg',
                date: '15 Apr 2025',
                time: '10:00AM',
                message: 'Totally agree! The load speed is noticeably faster too.',
                views: 860,
                likes: 150,
                comments: 6,
                reply: []
            },
            {
                name: 'Sophie Allen',
                avatar: 'assets/images/users/user-3.jpg',
                date: '15 Apr 2025',
                time: '12:10PM',
                message: 'Hope we get more dark mode themes next!',
                views: 580,
                likes: 90,
                comments: 3,
                reply: []
            }
        ]
    }
];

export const messages: ChatMessageType[] = [
    {
        message: 'Hey! Are you available for a quick call? 📞',
        time: '08:55 am',
        fromUser: false,
        avatar: 'assets/images/users/user-5.jpg'
    },
    {
        message: 'Sure, give me 5 minutes. Just wrapping something up.',
        time: '08:57 am',
        fromUser: true,
        avatar: 'assets/images/users/user-2.jpg'
    },
    {
        message: "Perfect. Let me know when you're ready 👍",
        time: '08:58 am',
        fromUser: false,
        avatar: 'assets/images/users/user-5.jpg'
    },
    {
        message: 'Ready now. Calling you!',
        time: '09:00 am',
        fromUser: true,
        avatar: 'assets/images/users/user-2.jpg'
    },
    {
        message: 'Thanks for your time earlier!',
        time: '09:45 am',
        fromUser: false,
        avatar: 'assets/images/users/user-5.jpg'
    },
    {
        message: 'Of course! It was a productive discussion.',
        time: '09:46 am',
        fromUser: true,
        avatar: 'assets/images/users/user-2.jpg'
    },
    {
        message: 'I’ll send over the updated files by noon.',
        time: '09:50 am',
        fromUser: false,
        avatar: 'assets/images/users/user-5.jpg'
    }
];

export const fileItems: FileItemType[] = [
    {
        name: 'Meeting-Notes.docx',
        icon: 'tablerFileText',
        size: 1200,
        users: [
            'assets/images/users/user-4.jpg',
            'assets/images/users/user-7.jpg',
            'assets/images/users/user-1.jpg',
            'assets/images/users/user-2.jpg'
        ]
    },
    {
        name: 'Design-Specs.pdf',
        icon: 'tablerFileTypePdf',
        size: 3600,
        users: [
            'assets/images/users/user-8.jpg',
            'assets/images/users/user-2.jpg',
            'assets/images/users/user-6.jpg',
            'assets/images/users/user-9.jpg',
            'assets/images/users/user-10.jpg'
        ]
    },
    {
        name: 'Assets-Package.zip',
        icon: 'tablerFileTypeZip',
        size: 7400,
        users: [
            'assets/images/users/user-1.jpg',
            'assets/images/users/user-6.jpg'
        ]
    },
    {
        name: 'Marketing-Plan.pptx',
        icon: 'tablerFileTypePpt',
        size: 5000,
        users: [
            'assets/images/users/user-10.jpg',
            'assets/images/users/user-4.jpg',
            'assets/images/users/user-1.jpg',
            'assets/images/users/user-3.jpg',
            'assets/images/users/user-6.jpg'
        ]
    },
    {
        name: 'Wireframe.png',
        icon: 'tablerPhoto',
        size: 820,
        users: [
            'assets/images/users/user-9.jpg'
        ]
    }
];

export const statisticWidgets: StatisticWidget1Type[] = [
    {
        title: 'My Tasks',
        description: 'Total Tasks',
        label: '+3 New',
        icon: 'tablerChecklist',
        count: {value: 124},
        variant: 'primary',
        totalCount: {value: 12450}
    },
    {
        title: 'Messages',
        description: 'Total Messages',
        label: '+5 New',
        icon: 'tablerMessageCircle',
        count: {value: 69.5, suffix: 'k'},
        variant: 'purple',
        totalCount: {value: 32.1, suffix: 'M'}
    },
    {
        title: 'Approvals',
        description: 'Total Approvals',
        label: '+2 New',
        icon: 'tablerFileCheck',
        count: {value: 32},
        variant: 'dark',
        totalCount: {value: 1024}
    },
    {
        title: 'Clients',
        description: 'Total Clients',
        label: '+4 New',
        icon: 'tablerUsers',
        count: {value: 184},
        variant: 'info',
        totalCount: {value: 9835}
    },
    {
        title: 'Revenue',
        description: 'Total Revenue',
        label: '+1.5%',
        icon: 'tablerCreditCard',
        count: {prefix: '$', value: 125.5, suffix: 'k'},
        variant: 'danger',
        totalCount: {prefix: '$', value: 12.5, suffix: 'M'}
    }
];

export const statisticCards3: StatisticCard3Type[] = [
    {
        title: 'Total Sales',
        description: 'Monthly Total Sales',
        icon: 'tablerCreditCard',
        label: 'Monthly',
        variant: 'success',
        count: {value: 320, prefix: '$', suffix: 'K'}
    },
    {
        title: 'Total Orders',
        description: 'Monthly Total Orders',
        icon: 'tablerPackage',
        label: 'Monthly',
        variant: 'primary',
        count: {value: 245}
    },
    {
        title: 'New Customers',
        description: 'Monthly New Customers',
        icon: 'tablerUsers',
        label: 'Monthly',
        variant: 'info',
        count: {value: 4382}
    },
    {
        title: 'Revenue',
        description: 'Monthly Revenue',
        icon: 'tablerChartBar',
        label: 'Monthly',
        variant: 'warning',
        count: {value: 89.45, prefix: '$', suffix: 'K'}
    }
]

export const statisticCards4: StatisticCard4Type[] = [
    {
        title: 'Total Property Value',
        icon: 'tablerHomeHeart',
        variant: 'primary',
        count: {value: 150, prefix: '$', suffix: 'M'}
    },
    {
        title: 'Monthly Rental Income',
        icon: 'tablerWallet',
        variant: 'secondary',
        count: {value: 80, prefix: '$', suffix: 'M'}
    },
    {
        title: 'Average Property Price',
        icon: 'tablerTags',
        variant: 'info',
        count: {value: 500, prefix: '$', suffix: 'K'}
    },
    {
        title: 'Latest Property Sale',
        icon: 'tablerBuilding',
        variant: 'danger',
        count: {value: 1.2, prefix: '$', suffix: 'M'}
    }
]

export const statisticCards5: StatisticCard5Type[] = [
    {
        title: 'Backend API Integration',
        progress: 72.5,
        description: 'Estimated completion: 2 days.',
        status: 'in-progress',
    },
    {
        title: 'UI Design',
        progress: 100,
        description: 'Delivered yesterday at 5:00 pm.',
        status: 'completed',
    },
    {
        title: 'Database Optimization',
        progress: 45,
        description: 'Next review: Monday 10:00 am.',
        status: 'pending',
    },
    {
        title: 'Server Uptime',
        progress: 99.9,
        description: 'Last downtime: 7 days ago.',
        status: 'stable',
    }
]

export const statisticCards6: StatisticCard6Type[] = [
    {
        title: 'Total Property Value',
        icon: 'tablerBuildingSkyscraper',
        variant: 'primary',
        count: { value: 150, prefix: '$', suffix: 'M' }
    },
    {
        title: 'Properties Sold',
        icon: 'tablerHomeDollar',
        variant: 'success',
        count: { value: 320 }
    },
    {
        title: 'Active Listings',
        icon: 'tablerBuildingStore',
        variant: 'warning',
        count: { value: 180 }
    },
    {
        title: 'Agents Available',
        icon: 'tablerUsersGroup',
        variant: 'info',
        count: { value: 85 }
    },
    {
        title: 'Upcoming Viewings',
        icon: 'tablerCalendarTime',
        variant: 'danger',
        count: { value: 42 }
    },
    {
        title: 'New Constructions',
        icon: 'tablerBuildingWarehouse',
        variant: 'secondary',
        count: { value: 27 }
    }
]

