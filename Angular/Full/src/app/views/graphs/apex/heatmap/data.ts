import {getColor} from "@/app/utils/color-utils";
import {ApexOptions} from "ng-apexcharts";

function generateData(count: any, yrange: any) {
    let i = 0;
    const series = [];
    while (i < count) {
        const x = (i + 1).toString();
        const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({
            x: x,
            y: y
        });
        i++;
    }
    return series;
}

export const singleSeriesHeatmapChart: () => ApexOptions = () => ({
    chart: {
        height: 350,
        type: 'heatmap',
        toolbar: {show: false}
    },
    dataLabels: {
        enabled: false
    },
    colors: [getColor('primary')],
    series: [
        {
            name: 'Metric 1',
            data: generateData(10, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 2',
            data: generateData(10, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 3',
            data: generateData(10, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 4',
            data: generateData(10, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 5',
            data: generateData(10, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric  6',
            data: generateData(10, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 7',
            data: generateData(10, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 8',
            data: generateData(10, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 9',
            data: generateData(10, {
                min: 0,
                max: 90
            })
        }
    ],
    xaxis: {
        type: 'category',
    },
    grid: {
        borderColor: getColor('border-color'),
        padding: {
            top: -25,   // You can use negative or positive values here
            right: 5,
            bottom: -10,
            left: 15
        }
    }

})

export const multipleSeriesHeatmapChart: () => ApexOptions = () => ({
    chart: {
        height: 350,
        type: 'heatmap',
        toolbar: {show: false}
    },
    dataLabels: {
        enabled: false
    },
    colors: [getColor('primary'), getColor('secondary'), getColor('info'), getColor('danger'), getColor('success'), getColor('warning'), getColor('purple'), getColor('orange')],
    series: [
        {
            name: 'Metric 1',
            data: generateData(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 2',
            data: generateData(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 3',
            data: generateData(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 4',
            data: generateData(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 5',
            data: generateData(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 6',
            data: generateData(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 7',
            data: generateData(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 8',
            data: generateData(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 9',
            data: generateData(15, {
                min: 0,
                max: 90
            })
        }
    ],
    xaxis: {
        type: 'category',
    },
    grid: {
        borderColor: getColor('border-color'),
        padding: {
            top: -25,   // You can use negative or positive values here
            right: 5,
            bottom: -10,
            left: 15
        }
    }
})

export const colorRangeHeatmapChart: () => ApexOptions = () => ({
    chart: {
        height: 350,
        type: 'heatmap',
        toolbar: {show: false}
    },
    plotOptions: {
        heatmap: {
            shadeIntensity: 0.5,

            colorScale: {
                ranges: [{
                    from: -30,
                    to: 5,
                    name: 'Low',
                    color: getColor('success')
                },
                    {
                        from: 6,
                        to: 20,
                        name: 'Medium',
                        color: getColor('info')
                    },
                    {
                        from: 21,
                        to: 45,
                        name: 'High',
                        color: getColor('warning')
                    },
                    {
                        from: 46,
                        to: 55,
                        name: 'Extreme',
                        color: getColor('danger')
                    }
                ]
            }
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        offsetY: -7,
    },
    series: [
        {
            name: 'Jan',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Feb',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Mar',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Apr',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'May',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Jun',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Jul',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Aug',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Sep',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        }
    ],
    grid: {
        borderColor: getColor('border-color'),
        padding: {
            top: -25,   // You can use negative or positive values here
            right: 5,
            bottom: -10,
            left: 15
        }
    }
})

export const rangeWithoutShadesHeatmapChart: () => ApexOptions = () => ({
    chart: {
        height: 350,
        type: 'heatmap',
        toolbar: {show: false}
    },
    stroke: {
        width: 0
    },
    plotOptions: {
        heatmap: {
            radius: 30,
            enableShades: false,
            colorScale: {
                ranges: [{
                    from: 0,
                    to: 50,
                    color: getColor('info')
                },
                    {
                        from: 51,
                        to: 100,
                        color: getColor('success')
                    },
                ],
            },

        }
    },
    legend: {
        offsetY: -7,
    },
    dataLabels: {
        enabled: true,
        style: {
            colors: ['#fff']
        }
    },
    series: [
        {
            name: 'iPhone 11',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'iPhone 12',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'iPhone 13',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'iPhone 14',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'iPhone 15',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'iPhone 15 Pro',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'iPhone 16',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'iPhone 16 Pro',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'iPhone 16 Pro Max',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        }
    ],

    xaxis: {
        type: 'category',
    },
    grid: {
        borderColor: getColor('border-color')
    }
})
