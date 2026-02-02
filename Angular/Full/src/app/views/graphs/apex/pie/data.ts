import {getColor} from "@/app/utils/color-utils"
import {ApexOptions} from "ng-apexcharts"

export const simplePieChart: () => ApexOptions = () => ({
    chart: {
        height: 320,
        type: 'pie',
    },
    series: [36, 28, 18, 12, 6],
    labels: ['Brand A', 'Brand B', 'Brand C', 'Brand D', 'Brand E'],
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        verticalAlign: 'middle',
        floating: false,
        fontSize: '14px',
        offsetX: 0,
        offsetY: 5
    },
    dataLabels: {
        enabled: true,
        style: {
            fontSize: '14px',
            fontWeight: 500
        }
    },
    colors: [getColor('primary'), getColor('warning'), getColor('danger'), getColor('info'), getColor('secondary')],
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                height: 240
            },
            legend: {
                show: false
            },
        }
    }]
})

export const simpleDonutChart: () => ApexOptions = () => ({
    chart: {
        height: 320,
        type: 'donut',
    },
    series: [48, 32, 28, 15, 7],
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        verticalAlign: 'middle',
        floating: false,
        fontSize: '14px',
        offsetX: 0,
        offsetY: 5
    },
    labels: ['Organic Search', 'Direct', 'Referral', 'Social Media', 'Email'],
    colors: [getColor('secondary'), getColor('purple'), getColor('info'), getColor('gray'), getColor('light')],
    dataLabels: {
        enabled: true,
        style: {
            fontSize: '14px',
            fontWeight: 500
        }
    }
})

export const monochromePieChart: () => ApexOptions = () => ({
    chart: {
        height: 320,
        type: 'pie',
    },
    series: [120, 90, 150, 180, 160, 70],
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        verticalAlign: 'middle',
        floating: false,
        fontSize: '14px',
        offsetX: 0,
        offsetY: 5
    },
    dataLabels: {
        enabled: true,
        style: {
            fontSize: '14px',
            fontWeight: 500
        }
    },
    theme: {
        monochrome: {
            enabled: true
        }
    },
})

export const gradientDonutChart: () => ApexOptions = () => ({
    chart: {
        height: 320,
        type: 'donut',
    },
    series: [38, 26, 18, 12, 6],
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        verticalAlign: 'middle',
        floating: false,
        fontSize: '14px',
        offsetX: 0,
        offsetY: 5
    },
    labels: ['Social', 'Productivity', 'Entertainment', 'Education', 'Health'],
    colors: [getColor('primary'), getColor('orange'), getColor('danger'), getColor('info'), getColor('secondary')],
    dataLabels: {
        enabled: true,
        style: {
            fontSize: '14px',
            fontWeight: 500
        }
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                height: 240
            },
            legend: {
                show: false
            },
        }
    }],
    fill: {
        type: 'gradient'
    }
})

export const patternedDonutChart: () => ApexOptions = () => ({
    chart: {
        height: 320,
        type: 'donut',
        dropShadow: {
            enabled: true,
            color: '#111',
            top: -1,
            left: 3,
            blur: 3,
            opacity: 0.2
        }
    },
    stroke: {
        show: true,
        width: 2,
    },
    series: [38, 27, 18, 12, 5],
    labels: ['Netflix', 'YouTube', 'Amazon Prime', 'Disney+', 'HBO Max'],
    dataLabels: {
        enabled: false
    },
    fill: {
        type: 'pattern',
        opacity: 1,
        pattern: {
            enabled: true,
            style: ['circles', 'slantedLines', 'verticalLines', 'horizontalLines', 'squares'],
        },
    },
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        verticalAlign: 'middle',
        floating: false,
        fontSize: '14px',
        offsetX: 0,
        offsetY: 5
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                height: 240
            },
            legend: {
                show: false
            },
        }
    }]
})

export const imagePieChart: () => ApexOptions = () => ({
    chart: {
        height: 320,
        type: 'pie',
    },
    labels: ['Apple', 'Tesla', 'Amazon', 'Google'],
    series: [30, 44, 60, 39],
    fill: {
        type: 'image',
        opacity: 0.85,
        image: {
            src: ['assets/images/stock/small-1.jpg', 'assets/images/stock/small-2.jpg', 'assets/images/stock/small-3.jpg', 'assets/images/stock/small-4.jpg'],
            width: 25,
            imagedHeight: 25
        },
    },
    stroke: {
        width: 4
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        verticalAlign: 'middle',
        floating: false,
        fontSize: '14px',
        offsetX: 0,
        offsetY: 7
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                height: 240
            },
            legend: {
                show: false
            },
        }
    }]
})

export const donutUpdateChart: () => ApexOptions = () => ({
    chart: {
        height: 320,
        type: 'donut',
    },
    dataLabels: {
        enabled: false
    },
    series: [64, 75, 33, 53],
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        verticalAlign: 'middle',
        floating: false,
        fontSize: '14px',
        offsetX: 0,
        offsetY: 7
    },
    colors: [getColor('purple'), getColor('warning'), getColor('danger'), getColor('info')],
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                height: 240
            },
            legend: {
                show: false
            },
        }
    }]
})
