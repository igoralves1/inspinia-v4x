import {getColor} from "@/app/utils/color-utils"
import moment from "moment"
import {ApexOptions} from "ng-apexcharts"

export const basicTimelineOptions: () => ApexOptions = () => ({
    series: [{
        data: [
            {
                x: 'Venue Booking',
                y: [
                    new Date('2024-06-01').getTime(),
                    new Date('2024-06-03').getTime()
                ]
            },
            {
                x: 'Vendor Coordination',
                y: [
                    new Date('2024-06-04').getTime(),
                    new Date('2024-06-07').getTime()
                ]
            },
            {
                x: 'Marketing',
                y: [
                    new Date('2024-06-08').getTime(),
                    new Date('2024-06-12').getTime()
                ]
            },
            {
                x: 'Event Execution',
                y: [
                    new Date('2024-06-13').getTime(),
                    new Date('2024-06-15').getTime()
                ]
            }
        ]
    }],
    colors: [getColor('primary')],
    chart: {
        height: 350,
        type: 'rangeBar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: true
        }
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            show: false,
        }
    }
})

export const distributedTimelineOptions: () => ApexOptions = () => ({
    series: [{
        data: [
            {
                x: 'Market Research',
                y: [
                    new Date('2024-07-01').getTime(),
                    new Date('2024-07-05').getTime()
                ]
            },
            {
                x: 'MVP Design',
                y: [
                    new Date('2024-07-06').getTime(),
                    new Date('2024-07-10').getTime()
                ]
            },
            {
                x: 'Development Sprint 1',
                y: [
                    new Date('2024-07-09').getTime(),
                    new Date('2024-07-15').getTime()
                ]
            },
            {
                x: 'Beta Testing',
                y: [
                    new Date('2024-07-14').getTime(),
                    new Date('2024-07-19').getTime()
                ]
            },
            {
                x: 'Public Launch',
                y: [
                    new Date('2024-07-20').getTime(),
                    new Date('2024-07-25').getTime()
                ]
            }
        ]
    }],
    colors: [getColor('secondary'), getColor('success'), getColor('warning'), getColor('danger'), getColor('info')],
    chart: {
        height: 350,
        type: 'rangeBar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
            distributed: true,
            dataLabels: {
                hideOverflowingLabels: false
            }
        }
    },
    dataLabels: {
        enabled: true,
        formatter: function (val: any, opts) {
            let label = opts.w.globals.labels[opts.dataPointIndex]
            let a = moment(val[0])
            let b = moment(val[1])
            let diff = b.diff(a, 'days')
            return diff + (diff > 1 ? ' days' : ' day')
        },
        style: {
            colors: ['#f3f4f5', '#fff']
        }
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            show: false,
        }
    },
    yaxis: {
        show: true
    }
})

export const multiSeriesTimelineOptions: () => ApexOptions = () => ({
    series: [
        {
            name: 'Fedex',
            data: [
                {
                    x: 'Pickup',
                    y: [new Date('2024-10-01').getTime(), new Date('2024-10-02').getTime()]
                },
                {
                    x: 'Transit',
                    y: [new Date('2024-10-03').getTime(), new Date('2024-10-07').getTime()]
                },
                {
                    x: 'Delivered',
                    y: [new Date('2024-10-08').getTime(), new Date('2024-10-09').getTime()]
                }
            ]
        },
        {
            name: 'DHL',
            data: [
                {
                    x: 'Pickup',
                    y: [new Date('2024-09-30').getTime(), new Date('2024-10-01').getTime()]
                },
                {
                    x: 'Transit',
                    y: [new Date('2024-10-02').getTime(), new Date('2024-10-06').getTime()]
                },
                {
                    x: 'Delivered',
                    y: [new Date('2024-10-07').getTime(), new Date('2024-10-08').getTime()]
                }
            ]
        }
    ],
    colors: [getColor('purple'), getColor('secondary')],
    chart: {
        height: 350,
        type: 'rangeBar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
        }
    },
    dataLabels: {
        enabled: true,
        formatter: function (val: any) {
            const a = moment(val[0])
            const b = moment(val[1])
            const diff = b.diff(a, 'days')
            return diff + (diff > 1 ? ' days' : ' day')
        }
    },
    fill: {
        type: 'solid',
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            show: false,
        }
    },
    legend: {
        position: 'top'
    },
})

export const advancedTimelineOptions: () => ApexOptions = () => ({
    series: [
        {
            name: 'Team Alpha',
            data: [
                {
                    x: 'Planning',
                    y: [new Date('2024-08-01').getTime(), new Date('2024-08-03').getTime()]
                },
                {
                    x: 'Development',
                    y: [new Date('2024-08-04').getTime(), new Date('2024-08-09').getTime()]
                },
                {
                    x: 'Testing',
                    y: [new Date('2024-08-10').getTime(), new Date('2024-08-15').getTime()]
                },
                {
                    x: 'Testing',
                    y: [new Date('2024-08-16').getTime(), new Date('2024-08-18').getTime()]
                },
                {
                    x: 'Release Prep',
                    y: [new Date('2024-08-19').getTime(), new Date('2024-08-22').getTime()]
                }
            ]
        },
        {
            name: 'Team Beta',
            data: [
                {
                    x: 'Planning',
                    y: [new Date('2024-08-02').getTime(), new Date('2024-08-05').getTime()]
                },
                {
                    x: 'Development',
                    y: [new Date('2024-08-06').getTime(), new Date('2024-08-11').getTime()]
                },
                {
                    x: 'Testing',
                    y: [new Date('2024-08-12').getTime(), new Date('2024-08-20').getTime()],
                    goals: [
                        {
                            name: 'UAT Milestone',
                            value: new Date('2024-08-17').getTime(),
                            strokeColor: getColor('danger')
                        }
                    ]
                },
                {
                    x: 'Launch',
                    y: [new Date('2024-08-25').getTime(), new Date('2024-08-27').getTime()]
                }
            ]
        },
        {
            name: 'Team Gamma',
            data: [
                {
                    x: 'Development',
                    y: [new Date('2024-08-15').getTime(), new Date('2024-08-22').getTime()]
                },
                {
                    x: 'QA Review',
                    y: [new Date('2024-08-10').getTime(), new Date('2024-08-14').getTime()],
                    goals: [
                        {
                            name: 'QA Blocker',
                            value: new Date('2024-08-12').getTime(),
                            strokeColor: getColor('warning')
                        }
                    ]
                }
            ]
        }
    ],
    chart: {
        height: 350,
        type: 'rangeBar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: '80%'
        }
    },
    colors: [getColor('success'), getColor('danger'), getColor('warning')],
    xaxis: {
        type: 'datetime',
        axisBorder: {
            show: false,
        }
    },
    stroke: {
        width: 1
    },
    fill: {
        type: 'solid',
        opacity: 0.6
    },
    legend: {
        position: 'top',
        horizontalAlign: 'left'
    },
})

export const groupRowsTimelineOptions: () => ApexOptions = () => ({
    series: [
        {
            name: 'Sophia Miller',
            data: [{
                x: 'Operations',
                y: [new Date(2022, 0, 3).getTime(), new Date(2022, 3, 15).getTime()]
            }]
        },
        {
            name: 'Liam Johnson',
            data: [
                {
                    x: 'Operations',
                    y: [new Date(2022, 3, 16).getTime(), new Date(2022, 6, 30).getTime()]
                },
                {
                    x: 'Finance',
                    y: [new Date(2021, 6, 1).getTime(), new Date(2022, 3, 15).getTime()]
                }
            ]
        },
        {
            name: 'Olivia Patel',
            data: [
                {
                    x: 'Operations',
                    y: [new Date(2022, 7, 1).getTime(), new Date(2022, 11, 31).getTime()]
                },
                {
                    x: 'Finance',
                    y: [new Date(2022, 3, 16).getTime(), new Date(2022, 6, 30).getTime()]
                },
                {
                    x: 'HR',
                    y: [new Date(2021, 2, 1).getTime(), new Date(2021, 11, 31).getTime()]
                }
            ]
        },
        {
            name: 'Noah Chen',
            data: [{
                x: 'Finance',
                y: [new Date(2023, 0, 1).getTime(), new Date(2023, 6, 30).getTime()]
            }]
        },
        {
            name: 'Emma Davis',
            data: [{
                x: 'Finance',
                y: [new Date(2023, 7, 1).getTime(), new Date(2024, 0, 15).getTime()]
            }]
        },
        {
            name: 'Aiden Scott',
            data: [{
                x: 'HR',
                y: [new Date(2021, 4, 15).getTime(), new Date(2021, 6, 30).getTime()]
            }]
        },
        {
            name: 'Mia Lopez',
            data: [{
                x: 'HR',
                y: [new Date(2021, 7, 1).getTime(), new Date(2022, 1, 15).getTime()]
            }]
        },
        {
            name: 'Ethan Brooks',
            data: [{
                x: 'HR',
                y: [new Date(2022, 1, 16).getTime(), new Date(2022, 7, 1).getTime()]
            }]
        },
        {
            name: 'Aria Kim',
            data: [{
                x: 'HR',
                y: [new Date(2022, 7, 2).getTime(), new Date(2023, 0, 1).getTime()]
            }]
        },
        {
            name: 'Lucas Nguyen',
            data: [{
                x: 'HR',
                y: [new Date(2023, 0, 2).getTime(), new Date(2023, 3, 30).getTime()]
            }]
        },
        {
            name: 'Harper White',
            data: [{
                x: 'HR',
                y: [new Date(2023, 4, 1).getTime(), new Date(2023, 6, 30).getTime()]
            }]
        },
        {
            name: 'Benjamin Reyes',
            data: [{
                x: 'HR',
                y: [new Date(2023, 7, 1).getTime(), new Date(2024, 0, 1).getTime()]
            }]
        }
    ],
    colors: [getColor('primary'), getColor('secondary'), getColor('warning'), getColor('danger'), getColor('info'), getColor('purple'), getColor('pink'), getColor('dark'), getColor('gray'), getColor('orange')],
    chart: {
        height: 350,
        type: 'rangeBar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: '50%',
            rangeBarGroupRows: true
        }
    },
    fill: {
        type: 'solid'
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            show: false,
        }
    },
    legend: {
        position: 'right'
    }
})
