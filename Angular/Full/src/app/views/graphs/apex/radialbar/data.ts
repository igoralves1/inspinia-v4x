import {getColor} from "@/app/utils/color-utils"
import {ApexOptions} from "ng-apexcharts"

export const basicRadialBar: () => ApexOptions = () => ({
    chart: {
        height: 320,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            hollow: {

                size: '70%',
            },
            track: {
                background: "rgba(170,184,197, 0.2)"
            }
        },
    },
    series: [82],
    labels: ['Task Completion'],
    colors: [getColor('success')],
})

export const multipleRadialBars: () => ApexOptions = () => ({
    chart: {
        height: 320,
        type: 'radialBar',
    },
    plotOptions: {
        circle: {
            dataLabels: {
                showOn: 'hover'
            }
        },
        radialBar: {
            track: {
                margin: 20,
                background: "rgba(170,184,197, 0.2)"
            },
            hollow: {
                size: '5%',
            },
            dataLabels: {
                name: {
                    show: false,
                },
                value: {
                    show: false,
                },
                style: {
                    fontSize: '14px',
                    fontWeight: 500,
                }
            }
        }
    },
    stroke: {
        lineCap: 'round'
    },
    series: [75, 60, 85],
    labels: ['Marketing', 'Sales', 'Engineering', 'HR'],
    responsive: [{
        breakpoint: 380,
        options: {
            chart: {
                height: 260,
            }
        }
    }],
    colors: [getColor('secondary'), getColor('danger'), getColor('primary'),]
})

export const customAngleCircle: () => ApexOptions = () => ({
    chart: {
        height: 380,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            offsetY: -30,
            startAngle: 0,
            endAngle: 270,
            hollow: {
                margin: 5,
                size: '30%',
                background: 'transparent',
                image: undefined,
            },
            track: {
                background: "rgba(170,184,197, 0.2)"
            },
            dataLabels: {
                name: {
                    show: false,

                },
                value: {
                    show: false,
                }
            }
        }
    },
    series: [82, 65, 74, 58],
    labels: ['getColortagram', 'YouTube', 'TikTok', 'Snapchat'],
    colors: [getColor('purple'), getColor('secondary'), getColor('info'), getColor('warning')],
    legend: {
        show: true,
        floating: true,
        fontSize: '14px',
        fontWeight: 500,
        position: 'left',
        offsetX: 10,
        offsetY: 10,
        labels: {
            useSeriesColors: true,
        },
        formatter: function (seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
        },
        itemMargin: {
            horizontal: 1,
        }
    },
})

export const imageFillCircle: () => ApexOptions = () => ({
    chart: {
        height: 360,
        type: 'radialBar',
    },
    fill: {
        type: 'image',
        image: {
            src: ['assets/images/stock/small-6.jpg'],
        }
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '70%',
            }
        },
    },
    series: [82],
    stroke: {
        lineCap: 'round'
    },
    labels: ['Portfolio Growth'],
    grid: {
        padding: {bottom: -5, top: -5}
    },
})

export const strokedGauge: () => ApexOptions = () => ({
    chart: {
        height: 380,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
                name: {
                    fontSize: '14px',
                    fontWeight: 500,
                    offsetY: 120
                },
                value: {
                    offsetY: 76,
                    fontSize: '22px',
                    color: undefined,
                    formatter: function (val) {
                        return val + "%";
                    }
                }
            },
            track: {
                background: "rgba(170,184,197, 0.2)",
                margin: 0
            },
        }
    },
    colors: [getColor('secondary')],
    fill: {
        gradient: {
            enabled: true,
            shade: 'dark',
            shadeIntensity: 0.2,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91]
        },
    },
    stroke: {
        dashArray: 4
    },
    series: [58],
    labels: ['CPU Utilization'],
    grid: {
        padding: {bottom: -10, top: -10}
    },
})

export const gradientCircle: () => ApexOptions = () => ({
    chart: {
        height: 330,
        type: 'radialBar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
                margin: 0,
                size: '70%',
                background: 'transparent',
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'front',
                dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 0,
                    blur: 4,
                    opacity: 0.24
                }
            },
            track: {
                background: "rgba(170,184,197, 0.2)",
                strokeWidth: '67%',
                margin: 0
            },

            dataLabels: {
                show: true,
                showOn: 'always',
                name: {
                    offsetY: -10,
                    show: true,
                    fontSize: '14px',
                    fontWeight: 500
                },
                value: {
                    show: true,
                    formatter: function (val: any) {
                        return parseInt(val).toString();
                        ;
                    },
                    color: '#111',
                    fontSize: '36px',
                }
            }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
        }
    },
    series: [62],
    stroke: {
        lineCap: 'round'
    },
    labels: ['System Load'],
    colors: [getColor('info'), getColor('purple')],
})

export const semiCircleGauge: () => ApexOptions = () => ({
    series: [80],
    chart: {
        type: 'radialBar',
        offsetY: -20,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
                background: "rgba(170,184,197, 0.2)",
                strokeWidth: '97%',
                margin: 5, // margin is in pixels
                dropShadow: {
                    top: 2,
                    left: 0,
                    color: '#eef2f7',
                    opacity: 1,
                    blur: 2
                }
            },
            dataLabels: {
                name: {
                    show: false
                },
                value: {
                    offsetY: -2,
                    fontSize: '22px'
                }
            }
        }
    },
    grid: {
        padding: {
            top: -10
        }
    },
    labels: ['Average Results'],
    colors: [getColor('warning')],
})
