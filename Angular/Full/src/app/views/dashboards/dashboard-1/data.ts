import {MessageType, ProjectType, QuarterlyReportType, UserMessageType} from '@/app/views/dashboards/dashboard-1/types';
import {EChartsOption} from 'echarts';
import {getColor} from '@/app/utils/color-utils';
import {StatisticWidget1Type} from '@/app/types';


function generateRandomData() {
    const dataName = ['Charity A', 'Charity B', 'Charity C'];
    const randomData = dataName.map(name => ({
        name: name,
        value: Math.floor(Math.random() * 100) + 1
    }));
    const total = randomData.reduce((sum, item) => sum + item.value, 0);
    randomData.forEach(item => {
        item.value = (item.value / total) * 100;
    });
    return randomData;
}

export const messages: MessageType[] = [
    {
        label: "Reviewed project proposal",
        timestamp: "09:30 AM",
        variant: "primary"
    },
    {
        label: "Team stand-up meeting",
        timestamp: "11:00 AM",
        variant: "info"
    },
    {
        label: "Sent client invoice",
        timestamp: "01:15 PM",
        variant: "secondary"
    },
    {
        label: "Responded to support tickets",
        timestamp: "03:40 PM",
        variant: "light"
    },
    {
        label: "Finalized design mockups",
        timestamp: "05:10 PM",
        variant: "warning"
    }
]

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
        variant: 'secondary',
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
        variant: 'secondary',
        totalCount: {value: 9835}
    },
    {
        title: 'Revenue',
        description: 'Total Revenue',
        label: '+1.5%',
        icon: 'tablerCreditCard',
        count: {prefix: '$', value: 125.5, suffix: 'k'},
        variant: 'primary',
        totalCount: {prefix: '$', value: 12.5, suffix: 'M'}
    }
];

export const quarterlyReports: QuarterlyReportType[] = [
    {
        id: 1,
        label: 'Quarter 1',
        date: 'January - March 2024',
        revenue: {value: 210, prefix: '$', suffix: 'k'},
        expense: {value: 165, prefix: '$', suffix: 'k'},
        margin: {value: 45, prefix: '$', suffix: 'k'},
        chartOptions: () => ({
            tooltip: {show: false}, series: [{
                type: 'pie',
                radius: ['60%', '100%'],
                hoverAnimation: false,
                label: {show: false},
                labelLine: {show: false},
                data: generateRandomData().map((item, index) => ({
                    value: item.value, itemStyle: {
                        color: index === 0 ? getColor('primary') : index === 1 ? getColor('secondary') : "#bbcae14d"
                    }
                }))
            }]
        })
    },
    {
        id: 2,
        label: 'Quarter 2',
        date: 'April - June 2024',
        revenue: {value: 225, prefix: '$', suffix: 'k'},
        expense: {value: 175, prefix: '$', suffix: 'k'},
        margin: {value: 50, prefix: '$', suffix: 'k'},
        chartOptions: () => ({
            tooltip: {show: false}, series: [{
                type: 'pie',
                radius: ['60%', '100%'],
                hoverAnimation: false,
                label: {show: false},
                labelLine: {show: false},
                data: generateRandomData().map((item, index) => ({
                    value: item.value, itemStyle: {
                        color: index === 0 ? getColor('primary') : index === 1 ? getColor('secondary') : "#bbcae14d"
                    }
                }))
            }]
        })
    },
    {
        id: 3,
        label: 'Quarter 3',
        date: 'July - September 2024',
        revenue: {value: 240, prefix: '$', suffix: 'k'},
        expense: {value: 190, prefix: '$', suffix: 'k'},
        margin: {value: 50, prefix: '$', suffix: 'k'},
        chartOptions: () => ({
            tooltip: {show: false}, series: [{
                type: 'pie',
                radius: ['60%', '100%'],
                hoverAnimation: false,
                label: {show: false},
                labelLine: {show: false},
                data: generateRandomData().map((item, index) => ({
                    value: item.value, itemStyle: {
                        color: index === 0 ? getColor('primary') : index === 1 ? getColor('secondary') : "#bbcae14d"
                    }
                }))
            }]
        })
    },
    {
        id: 4,
        label: 'Quarter 4',
        date: 'October - December 2024',
        revenue: {value: 260, prefix: '$', suffix: 'k'},
        expense: {value: 200, prefix: '$', suffix: 'k'},
        margin: {value: 60, prefix: '$', suffix: 'k'},
        chartOptions: () => ({
            tooltip: {show: false}, series: [{
                type: 'pie',
                radius: ['60%', '100%'],
                hoverAnimation: false,
                label: {show: false},
                labelLine: {show: false},
                data: generateRandomData().map((item, index) => ({
                    value: item.value, itemStyle: {
                        color: index === 0 ? getColor('primary') : index === 1 ? getColor('secondary') : "#bbcae14d"
                    }
                }))
            }]
        })
    }
];

export const projectUpdates: ProjectType[] = [
    {
        id: 1,
        title: 'New Feature Released',
        description: 'Launched the real-time chat feature across all user accounts.',
        category: 'Deploy',
        name: 'Natalie Brooks',
        avatar: 'assets/images/users/user-6.jpg',
        date: 'Today',
        time: '3:45 PM',
        icon: 'tablerRocket',
        variant: 'primary'
    },
    {
        id: 2,
        title: 'Team Sync-Up',
        description: 'Reviewed sprint progress and discussed remaining tasks with the dev team.',
        category: 'Meeting',
        name: 'Oliver Grant',
        avatar: 'assets/images/users/user-4.jpg',
        date: 'Today',
        time: '2:00 PM',
        icon: 'tablerCalendarEvent',
        variant: 'warning'
    },
    {
        id: 3,
        title: 'UI Design Review',
        description: 'Updated component spacing and colors for improved accessibility.',
        category: 'Design',
        name: 'Clara Jensen',
        avatar: 'assets/images/users/user-9.jpg',
        date: 'Today',
        time: '1:15 PM',
        icon: 'tablerPalette',
        variant: 'success'
    },
    {
        id: 4,
        title: 'Database Optimization',
        description: 'Improved DB query performance, reducing load time by 35%.',
        category: 'Backend',
        name: 'Leo Armstrong',
        avatar: 'assets/images/users/user-10.jpg',
        date: 'Today',
        time: '12:30 PM',
        icon: 'tablerDatabase',
        variant: 'danger'
    },
    {
        id: 5,
        title: 'Security Audit Completed',
        description: 'Completed internal security audit with no critical issues found.',
        category: 'Audit',
        name: 'Liam Carter',
        avatar: 'assets/images/users/user-8.jpg',
        date: 'Today',
        time: '11:00 AM',
        icon: 'tablerShieldCheck',
        variant: 'info'
    },
    {
        id: 6,
        title: 'New Team Member Joined',
        description: 'Michael Lee has joined the development team as a Frontend Engineer.',
        category: 'Onboarding',
        name: 'Emma Davis',
        avatar: 'assets/images/users/user-7.jpg',
        date: 'Today',
        time: '10:15 AM',
        icon: 'tablerUserPlus',
        variant: 'success'
    }
]

export const  userMessages:UserMessageType[] = [
    {
        id: 1,
        name: 'Alex Johnson',
        avatar: 'assets/images/users/user-8.jpg',
        message: 'Excited to share our latest project update with everyone!',
        time: '10m ago'
    },
    {
        id: 2,
        name: 'Den Nowdya',
        avatar: '',
        message: 'Looking forward to the upcoming team meeting.',
        time: '1h ago'
    },
    {
        id: 3,
        name: 'Michael Brown',
        avatar: 'assets/images/users/user-10.jpg',
        message: "Great insights shared in today's brainstorming session!",
        time: '16h ago'
    },
    {
        id: 4,
        name: 'Emily Watson',
        avatar: 'assets/images/users/user-1.jpg',
        message: 'Wrapping up an amazing design concept for the client.',
        time: '20h ago'
    },
    {
        id: 5,
        name: 'Monica Smith',
        avatar: 'assets/images/users/user-6.jpg',
        message: 'Testing some new UI enhancements—excited for feedback!',
        time: '2 days ago'
    }
];

export const revenueChartOptions = (): EChartsOption => ({
    textStyle: {
        fontFamily: getComputedStyle(document.body).fontFamily
    }, tooltip: {
        trigger: "axis",
        padding: [5, 0],
        backgroundColor: getColor("secondary-bg"),
        borderColor: getColor("border-color"),
        textStyle: {color: getColor("light-text-emphasis")},
        borderWidth: 1,
        transitionDuration: 0.125,
        axisPointer: {type: "none"},
        shadowBlur: 2,
        shadowColor: "rgba(76, 76, 92, 0.15)",
        shadowOffsetX: 0,
        shadowOffsetY: 1,
        formatter: (params: any) => {
            const title = params[0].name;
            let content = `<div style="font-size: 14px; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid ${getColor("border-color")}; margin-bottom: 8px; padding: 3px 10px 8px;">${title}</div>`;
            params.forEach((item: any) => {
                const valueLabel = item.seriesName === 'Total Revenue' ? `$${item.value}` : `${item.value} sales`;
                content += `<div style="margin-top: 4px; padding: 3px 15px;">
                          <span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:${item.color};"></span>
                          ${item.seriesName} : <strong>${valueLabel}</strong>
                        </div>`;
            });
            return content;
        }
    },
    xAxis: {
        type: "category", data: Array.from({length: 15}, (_, i) => `Day ${i + 1}`), boundaryGap: false, axisLine: {
            show: false
        }, axisTick: {show: false}, axisLabel: {
            color: getColor("secondary-color"), margin: 15
        }, splitLine: {show: false}
    },
    yAxis: {
        type: "value", splitLine: {
            lineStyle: {
                color: "#676b891f", type: "dashed"
            }
        },
        // boundaryGap: false,
        axisLabel: {
            show: true, color: getColor("secondary-color"), margin: 15, formatter: function (value) {
                return "$" + value;
            }
        }, axisTick: {show: false}, axisLine: {show: false}
    },
    series: [{
        name: "Total Revenue",
        type: "line",
        smooth: true,
        symbolSize: 2,
        itemStyle: {
            color: getColor("primary"), borderColor: getColor("primary"), borderWidth: 2
        },
        areaStyle: {
            opacity: 0.2, color: getColor("primary")
        },
        lineStyle: {
            color: getColor("primary")
        },
        symbol: "circle",
        stack: "data",
        data: [45, 88, 120, 160, 210, 240, 350, 420, 380, 500, 640, 710, 890, 1150, 1200]
    }, {
        name: "Orders",
        type: "line",
        smooth: true,
        symbolSize: 2,
        itemStyle: {
            color: getColor("secondary"), borderColor: getColor("secondary"), borderWidth: 2
        },
        areaStyle: {
            opacity: 0.2, color: getColor("secondary")
        },
        lineStyle: {
            color: getColor("secondary")
        },
        symbol: "circle",
        stack: "data",
        data: [15, 30, 35, 50, 55, 75, 95, 120, 135, 160, 180, 210, 250, 390, 450]
    }], grid: {
        right: 20, left: 5, bottom: 5, top: 8, containLabel: true
    }
})

export const projectProgressChartOptions = (): EChartsOption => ({
    tooltip: {
        trigger: 'item',
        padding: [8, 15],
        backgroundColor: getColor("secondary-bg"),
        borderColor: getColor("border-color"),
        textStyle: {color: getColor("light-text-emphasis")},
        borderWidth: 1,
        transitionDuration: 0.125,
        axisPointer: {type: "none"},
        shadowBlur: 2,
        shadowColor: "rgba(76, 76, 92, 0.15)",
        shadowOffsetX: 0,
        shadowOffsetY: 1,
    }, textStyle: {
        fontFamily: getComputedStyle(document.body).fontFamily
    }, series: [{
        name: 'Project Progress',
        type: 'pie',
        radius: [60, 100],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
            borderRadius: 8
        },
        label: {
            color: getColor('secondary-color')
        },
        data: [{value: 85, name: 'Website Redesign', itemStyle: {color: getColor('primary')}}, {
            value: 70,
            name: 'Mobile App',
            itemStyle: {color: getColor('secondary')}
        }, {value: 55, name: 'CRM Integration', itemStyle: {color: getColor('info')}}, {
            value: 60,
            name: 'Product Launch',
            itemStyle: {color: getColor('success')}
        }, {value: 75, name: 'Backend Refactor', itemStyle: {color: getColor('light')}}, {
            value: 50,
            name: 'Client Dashboard',
            itemStyle: {color: getColor('warning')}
        }]
    }]
})
