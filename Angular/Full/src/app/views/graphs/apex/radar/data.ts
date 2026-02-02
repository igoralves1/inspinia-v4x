import {getColor} from "@/app/utils/color-utils";
import {ApexOptions} from "ng-apexcharts"

export const basicRadarChart: () => ApexOptions = () => ({
    chart: {
        height: 350,
        type: 'radar',
        toolbar: {show: false}
    },
    series: [{
        name: 'Series 1',
        data: [85, 70, 60, 90, 75, 65],
    }],
    labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'SQL'],
    colors: [getColor('primary')],
})

export const polygonRadarChart: () => ApexOptions = () => ({
    chart: {
        height: 350,
        type: 'radar',
    },
    series: [{
        name: 'Activity Level',
        data: [80, 60, 75, 90, 50, 70, 65]
    }],
    colors: [getColor('secondary')],
    labels: ['Cardio',
        'Strength Training',
        'Flexibility',
        'Endurance',
        'Balance',
        'HIIT',
        'Mobility'],
    plotOptions: {
        radar: {
            size: 120,
        }
    },
    markers: {
        size: 4,
        colors: [getColor('danger')],
        strokeWidth: 2,
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return val + ' pts';
            }
        }
    },
    yaxis: {
        tickAmount: 7,
        labels: {
            formatter: function (val: number, i: any) {
                return val > 0 ? val.toString() : "";
            }
        }
    }
})

export const multiRadarChart: () => ApexOptions = () => ({
    chart: {
        height: 350,
        type: 'radar',
        toolbar: {show: false}
    },
    series: [
        {
            name: 'Marketing',
            data: [85, 70, 65, 90, 60, 75]
        },
        {
            name: 'Sales',
            data: [60, 80, 75, 55, 95, 70]
        },
        {
            name: 'IT',
            data: [78, 65, 80, 40, 60, 85]
        }
    ],
    colors: [getColor('primary'), getColor('secondary'), getColor('purple')],
    stroke: {
        width: 0
    },
    plotOptions: {
        radar: {
            size: 120,
        }
    },
    fill: {
        opacity: 0.4
    },
    markers: {
        size: 0
    },
    legend: {
        offsetY: 5,
    },
    labels: [
        'Customer Satisfaction',
        'Revenue Growth',
        'Efficiency',
        'Innovation',
        'Support Quality',
        'Compliance']
})


