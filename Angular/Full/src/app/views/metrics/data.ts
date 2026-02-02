import {StatisticsWidgetType} from '@/app/views/dashboards/dashboard-2/types';
import {getColor} from '@/app/utils/color-utils';
import {QuarterlyReportType, StatisticsWithChartType} from '@/app/views/metrics/types';
import * as echarts from 'echarts/core';

const colors = [getColor('primary'), getColor('warning'), getColor('secondary'), "#bbcae14d"];
function generateRandomData() {
    const dataName = ['A', 'B', 'C'];
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

function generateBarData() {
    const labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const colors = [getColor('primary'), getColor('secondary'), getColor('success'), "#bbcae14d"];

    return labels.map((label, index) => ({
        name: label,
        value: Math.floor(Math.random() * 100) + 1,
        color: colors[index % colors.length]
    }));
}

function generateAreaData() {
    const labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const colors = [getColor('primary'), getColor('warning'), getColor('secondary'), "#bbcae14d"];

    return labels.map(() => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return {
            value: Math.floor(Math.random() * 100) + 1,
            color: randomColor
        };
    });
}

function generateRandomData2() {
    const dataName = ['A', 'B', 'C', 'D'];
    const randomData = dataName.map(name => ({
        name: name,
        value: Math.floor(Math.random() * 100) + 1
    }));
    return randomData;
}


export const statistics: StatisticsWidgetType[] = [
    {
        title: 'Total Sales',
        badge: {text: 'Monthly', variant: 'success'},
        value: 250,
        prefix: '$',
        suffix: 'K',
        description: 'Monthly Total Sales',
        chartOptions: () => ({
            tooltip: {show: false},
            series: [
                {
                    type: 'pie',
                    radius: ['65%', '100%'],
                    hoverAnimation: false,
                    label: {show: false},
                    labelLine: {show: false},
                    data: generateRandomData().map((item, index) => ({
                        value: item.value,
                        itemStyle: {
                            color: index === 0
                                ? getColor('primary')
                                : index === 1
                                    ? getColor('secondary')
                                    : '#bbcae14d'
                        }
                    }))
                }
            ]
        })
    },
    {
        title: 'Total Orders',
        badge: {text: 'Monthly', variant: 'primary'},
        value: 180,
        description: 'Monthly Total Orders',
        chartOptions: () => ({
            tooltip: {show: false},
            series: [
                {
                    type: 'pie',
                    radius: ['65%', '100%'],
                    hoverAnimation: false,
                    label: {show: false},
                    labelLine: {show: false},
                    data: generateRandomData().map((item, index) => ({
                        value: item.value,
                        itemStyle: {
                            color: index === 0
                                ? getColor('primary')
                                : index === 1
                                    ? getColor('secondary')
                                    : '#bbcae14d'
                        }
                    }))
                }
            ]
        })
    },
    {
        title: 'New Customers',
        badge: {text: 'Monthly', variant: 'info'},
        value: 50895,
        description: 'Monthly New Customers',
        chartOptions: () => ({
            tooltip: {show: false},
            series: [
                {
                    type: 'pie',
                    radius: ['65%', '100%'],
                    hoverAnimation: false,
                    label: {show: false},
                    labelLine: {show: false},
                    data: generateRandomData().map((item, index) => ({
                        value: item.value,
                        itemStyle: {
                            color: index === 0
                                ? getColor('primary')
                                : index === 1
                                    ? getColor('secondary')
                                    : '#bbcae14d'
                        }
                    }))
                }
            ]
        })
    },
    {
        title: 'Revenue',
        badge: {text: 'Monthly', variant: 'warning'},
        value: 50.33,
        prefix: '$',
        suffix: 'K',
        description: 'Monthly Revenue',
        chartOptions: () => ({
            tooltip: {show: false},
            series: [
                {
                    type: 'pie',
                    radius: ['65%', '100%'],
                    hoverAnimation: false,
                    label: {show: false},
                    labelLine: {show: false},
                    data: generateRandomData().map((item, index) => ({
                        value: item.value,
                        itemStyle: {
                            color: index === 0
                                ? getColor('primary')
                                : index === 1
                                    ? getColor('secondary')
                                    : '#bbcae14d'
                        }
                    }))
                }
            ]
        })
    }
];

export const statisticsData: StatisticsWithChartType[] = [
    {
        title: 'Project A - Sales',
        badge: {text: 'Monthly', variant: 'success'},
        count: {value: 320, prefix: '$', suffix: 'K'},
        description: 'Monthly Sales for Project A',
        chartHeight: '40px',
        chartWidth: '80px',
        chartOptions: () => ({
            grid: {top: 0, bottom: 0, left: 0, right: 0},
            xAxis: {type: 'category', data: generateBarData().map(d => d.name), show: false},
            yAxis: {type: 'value', show: false},
            tooltip: {show: false},
            series: [{
                type: 'bar',
                data: generateBarData().map(item => ({
                    value: item.value,
                    itemStyle: {color: item.color}
                })),
                barWidth: '50%',
                itemStyle: {borderRadius: 3}
            }]
        })
    },
    {
        title: 'Project B - Revenue',
        badge: {text: 'Monthly', variant: 'info'},
        count: {value: 450, prefix: '$', suffix: 'K'},
        description: 'Monthly Revenue for Project B',
        chartHeight: '40px',
        chartWidth: '80px',
        chartOptions: () => ({
            grid: {top: 0, bottom: 0, left: 0, right: 0},
            xAxis: {type: 'category', data: generateBarData().map(d => d.name), show: false},
            yAxis: {type: 'value', show: false},
            tooltip: {show: false},
            series: [{
                type: 'bar',
                data: generateBarData().map(item => ({
                    value: item.value,
                    itemStyle: {color: item.color}
                })),
                barWidth: '50%',
                itemStyle: {borderRadius: 3}
            }]
        })
    },
    {
        title: 'Project C - Engagement',
        badge: {text: 'Monthly', variant: 'warning'},
        count: {value: 580, prefix: '$', suffix: 'K'},
        description: 'Monthly Engagement for Project C',
        chartHeight: '40px',
        chartWidth: '80px',
        chartOptions: () => ({
            grid: {top: 0, bottom: 0, left: 0, right: 0},
            xAxis: {type: 'category', data: generateBarData().map(d => d.name), show: false},
            yAxis: {type: 'value', show: false},
            tooltip: {show: false},
            series: [{
                type: 'bar',
                data: generateBarData().map(item => ({
                    value: item.value,
                    itemStyle: {color: item.color}
                })),
                barWidth: '50%',
                itemStyle: {borderRadius: 3}
            }]
        })
    },
    {
        title: 'Project D - Expenses',
        badge: {text: 'Monthly', variant: 'danger'},
        count: {value: 700, prefix: '$', suffix: 'K'},
        description: 'Monthly Expenses for Project D',
        chartHeight: '40px',
        chartWidth: '80px',
        chartOptions: () => ({
            grid: {top: 0, bottom: 0, left: 0, right: 0},
            xAxis: {type: 'category', data: generateBarData().map(d => d.name), show: false},
            yAxis: {type: 'value', show: false},
            tooltip: {show: false},
            series: [{
                type: 'bar',
                data: generateBarData().map(item => ({
                    value: item.value,
                    itemStyle: {color: item.color}
                })),
                barWidth: '50%',
                itemStyle: {borderRadius: 3}
            }]
        })
    },
    {
        title: 'Greenfield Towers - Sales',
        badge: {text: '+$40K', variant: 'success'},
        count: {value: 550, prefix: '$', suffix: 'K'},
        description: 'Sales Change (Prev.)',
        chartHeight: '60px',
        chartWidth: '140px',
        chartOptions: () => ({
            grid: {top: 0, bottom: 0, left: 0, right: 0},
            xAxis: {
                type: 'category',
                data: generateAreaData().map((_, index) => `Label ${index + 1}`), // Use dynamic labels
                show: false
            },
            yAxis: {
                type: 'value',
                show: false
            },
            tooltip: {show: false},
            series: [
                {
                    type: 'line',
                    data: generateAreaData().map(item => item.value),
                    areaStyle: {
                        // Apply a gradient color dynamically based on the randomly selected color
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {offset: 0, color: generateAreaData()[0].color},
                            {offset: 1, color: 'rgba(255, 255, 255, 0)'}
                        ])
                    },
                    lineStyle: {
                        color: generateAreaData()[0].color,
                        width: 2
                    },
                    symbol: 'none',
                    smooth: true
                }
            ]
        })
    },
    {
        title: 'Oceanview Residences - Sales',
        badge: {text: '-$20K', variant: 'danger'},
        count: {value: 230, prefix: '$', suffix: 'K'},
        description: 'Sales Change (Prev.)',
        chartHeight: '60px',
        chartWidth: '140px',
        chartOptions: () => ({
            grid: {top: 0, bottom: 0, left: 0, right: 0},
            xAxis: {
                type: 'category',
                data: generateAreaData().map((_, index) => `Label ${index + 1}`), // Use dynamic labels
                show: false
            },
            yAxis: {
                type: 'value',
                show: false
            },
            tooltip: {show: false},
            series: [
                {
                    type: 'line',
                    data: generateAreaData().map(item => item.value),
                    areaStyle: {
                        // Apply a gradient color dynamically based on the randomly selected color
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {offset: 0, color: generateAreaData()[0].color},
                            {offset: 1, color: 'rgba(255, 255, 255, 0)'}
                        ])
                    },
                    lineStyle: {
                        color: generateAreaData()[0].color,
                        width: 2
                    },
                    symbol: 'none',
                    smooth: true
                }
            ]
        })
    },
    {
        title: 'Sunset Bay Villas - Sales',
        badge: {text: '+$50K', variant: 'warning'},
        count: {value: 650, prefix: '$', suffix: 'K'},
        description: 'Sales Change (Prev.)',
        chartHeight: '60px',
        chartWidth: '140px',
        chartOptions: () => ({
            grid: {top: 0, bottom: 0, left: 0, right: 0},
            xAxis: {
                type: 'category',
                data: generateAreaData().map((_, index) => `Label ${index + 1}`), // Use dynamic labels
                show: false
            },
            yAxis: {
                type: 'value',
                show: false
            },
            tooltip: {show: false},
            series: [
                {
                    type: 'line',
                    data: generateAreaData().map(item => item.value),
                    areaStyle: {
                        // Apply a gradient color dynamically based on the randomly selected color
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {offset: 0, color: generateAreaData()[0].color},
                            {offset: 1, color: 'rgba(255, 255, 255, 0)'}
                        ])
                    },
                    lineStyle: {
                        color: generateAreaData()[0].color,
                        width: 2
                    },
                    symbol: 'none',
                    smooth: true
                }
            ]
        })
    },
    {
        title: 'Maple Grove Homes - Sales',
        badge: {text: '+$30K', variant: 'success'},
        count: {value: 480, prefix: '$', suffix: 'K'},
        description: 'Sales Change (Prev.)',
        chartHeight: '60px',
        chartWidth: '140px',
        chartOptions: () => ({
            grid: {top: 0, bottom: 0, left: 0, right: 0},
            xAxis: {
                type: 'category',
                data: generateAreaData().map((_, index) => `Label ${index + 1}`), // Use dynamic labels
                show: false
            },
            yAxis: {
                type: 'value',
                show: false
            },
            tooltip: {show: false},
            series: [
                {
                    type: 'line',
                    data: generateAreaData().map(item => item.value),
                    areaStyle: {
                        // Apply a gradient color dynamically based on the randomly selected color
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {offset: 0, color: generateAreaData()[0].color},
                            {offset: 1, color: 'rgba(255, 255, 255, 0)'}
                        ])
                    },
                    lineStyle: {
                        color: generateAreaData()[0].color,
                        width: 2
                    },
                    symbol: 'none',
                    smooth: true
                }
            ]
        })
    },
    {
        title: 'Total Revenue',
        badge: {text: '+8.2%', variant: 'success'},
        count: {value: 1240, prefix: '$', suffix: 'K'},
        description: 'This Quarter',
        chartHeight: '70px',
        chartWidth: '70px',
        chartOptions: () => ({
            tooltip: {show: false},
            series: [
                {
                    type: 'pie',
                    radius: '90%',
                    hoverAnimation: false,
                    label: {show: false},
                    labelLine: {show: false},
                    data: generateRandomData2().map((item, index) => ({
                        value: item.value,
                        name: item.name,
                        itemStyle: {
                            color: colors[index % colors.length]
                        }
                    }))
                }
            ]
        })
    },
    {
        title: 'Total Expenses',
        badge: {text: '-2.1%', variant: 'danger'},
        count: {value: 840, prefix: '$', suffix: 'K'},
        description: 'This Quarter',
        chartHeight: '70px',
        chartWidth: '70px',
        chartOptions: () => ({
            tooltip: {show: false},
            series: [
                {
                    type: 'pie',
                    radius: '90%',
                    hoverAnimation: false,
                    label: {show: false},
                    labelLine: {show: false},
                    data: generateRandomData2().map((item, index) => ({
                        value: item.value,
                        name: item.name,
                        itemStyle: {
                            color: colors[index % colors.length]
                        }
                    }))
                }
            ]
        })
    },
    {
        title: 'Net Profit',
        badge: {text: 'Stable', variant: 'info'},
        count: {value: 400, prefix: '$', suffix: 'K'},
        description: 'This Quarter',
        chartHeight: '70px',
        chartWidth: '70px',
        chartOptions: () => ({
            tooltip: {show: false},
            series: [
                {
                    type: 'pie',
                    radius: '90%',
                    hoverAnimation: false,
                    label: {show: false},
                    labelLine: {show: false},
                    data: generateRandomData2().map((item, index) => ({
                        value: item.value,
                        name: item.name,
                        itemStyle: {
                            color: colors[index % colors.length]
                        }
                    }))
                }
            ]
        })
    },
    {
        title: 'Cash Flow',
        badge: {text: '+5.6%', variant: 'warning'},
        count: {value: 720, prefix: '$', suffix: 'K'},
        description: 'This Quarter',
        chartHeight: '70px',
        chartWidth: '70px',
        chartOptions: () => ({
            tooltip: {show: false},
            series: [
                {
                    type: 'pie',
                    radius: '90%',
                    hoverAnimation: false,
                    label: {show: false},
                    labelLine: {show: false},
                    data: generateRandomData2().map((item, index) => ({
                        value: item.value,
                        name: item.name,
                        itemStyle: {
                            color: colors[index % colors.length]
                        }
                    }))
                }
            ]
        })
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
];
