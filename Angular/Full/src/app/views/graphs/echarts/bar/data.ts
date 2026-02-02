import {getColor} from "@/app/utils/color-utils";
import {EChartsOption} from "echarts";
import {echarts,} from '@/app/config/echarts-config';
import type {BarSeriesOption} from 'echarts/charts';


export const barChart = (): EChartsOption => ({
    tooltip: {
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
        shadowOffsetY: 1, // Custom HTML formatter
        formatter: function (params: any) {
            const title = params[0].name; // xAxis label
            let content = `<div style="font-size: 14px; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid ${getColor("border-color")}; margin-bottom: 8px; padding: 3px 10px 8px;">${title}</div>`;
            params.forEach((item: any) => {
                content += `<div style="margin-top: 4px; padding: 3px 15px;">
                            <span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:${item.color};"></span>
                            ${item.seriesName} : <strong>${item.value}</strong>
                        </div>`;
            });
            return content;
        }
    },
    textStyle: {
        fontFamily: getComputedStyle(document.body).fontFamily
    },
    xAxis: {
        type: "category",
        data: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        axisLine: {
            lineStyle: {
                color: getColor('light'), type: "dashed"
            }
        },
        axisTick: {show: false},
        axisLabel: {
            color: getColor('body-color'), formatter: t => t.substring(0, 3), margin: 15
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: "value",
        boundaryGap: [0, 0.1],
        axisLabel: {
            show: true,
            color: getColor('body-color'),
            margin: 15
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: getColor('light')
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        min: 600
    },

    series: [{
        type: "bar",
        name: "Total",
        data: [820, 950, 1100, 1250, 1420, 1600, 1800, 1750, 1580, 1400, 1250, 1080],
        itemStyle: {
            color: getColor('primary-rgb', 1),
            borderRadius: [3, 3, 0, 0]
        },
    }]
    ,
    grid: {
        right: "2%", left: "7%", bottom: "10%", top: "5%"
    }
})

export const twoBar = (): EChartsOption => ({
    tooltip: {
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
        shadowOffsetY: 1, // Custom HTML formatter
        formatter: function (params: any) {
            const title = params[0].name; // xAxis label
            let content = `<div style="font-size: 14px; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid ${getColor("border-color")}; margin-bottom: 8px; padding: 3px 10px 8px;">${title}</div>`;
            params.forEach((item: any) => {
                content += `<div style="margin-top: 4px; padding: 3px 15px;">
                            <span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:${item.color};"></span>
                            ${item.seriesName} : <strong>${item.value}</strong>
                        </div>`;
            });
            return content;
        }
    }, textStyle: {
        fontFamily: getComputedStyle(document.body).fontFamily
    }, xAxis: {
        type: "category",
        axisLabel: {
            color: getColor("secondary-color"),
            // formatter: (val) => window.dayjs(val).format("D MMM, YY"),
            fontWeight: 600, fontSize: 10.24, padding: [0, 0, 0, 20]
        },
        splitLine: {
            show: true, interval: 10, lineStyle: {
                color: getColor("tertiary-bg")
            }
        },
        show: true,
        data: ["January", "February", "March", "April", "May", "June", "July", "August", "September"],
        axisLine: {
            lineStyle: {
                color: getColor("tertiary-bg")
            }
        },
        axisTick: {show: false}
    }, yAxis: {
        show: false,
    }, series: [{
        name: "Actual revenue",
        type: "bar",
        data: [24, 14, 30, 24, 32, 32, 18, 12, 32],
        barWidth: "15px",
        barGap: "0.25",
        label: {
            show: true, position: "top", color: getColor("body-color"), fontWeight: "bold", fontSize: "12px"
        },
        z: 10,
        itemStyle: {
            borderRadius: [4, 4, 0, 0], color: getColor('info')
        }
    }, {
        name: "Projected revenue",
        type: "bar",
        data: [36, 28, 36, 39, 54, 38, 22, 34, 52],
        barWidth: "15px",
        label: {
            show: true, position: "top", color: getColor("primary"), fontWeight: "bold", fontSize: "12px"
        },
        itemStyle: {
            borderRadius: [4, 4, 0, 0], color: getColor("primary")
        }
    }], grid: {
        right: 3, left: 0, bottom: 0, top: "5%", containLabel: true
    }, animation: false, xs: {
        series: [{label: {show: false}}, {label: {show: false}}]
    }
})

export const progressBar = (): EChartsOption => ({
    tooltip: {
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
        shadowOffsetY: 1, // Custom HTML formatter
        formatter: function (params: any) {
            const title = params[0].name; // xAxis label
            let content = `<div style="font-size: 14px; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid ${getColor("border-color")}; margin-bottom: 8px; padding: 3px 10px 8px;">${title}</div>`;
            params.forEach((item: any) => {
                content += `<div style="margin-top: 4px; padding: 3px 15px;">
                            <span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:${item.color};"></span>
                            ${item.seriesName} : <strong>${item.value}</strong>
                        </div>`;
            });
            return content;
        }
    }, textStyle: {
        fontFamily: getComputedStyle(document.body).fontFamily
    }, legend: {
        show: false
    }, grid: {
        right: 0, left: 100, bottom: 0, top: 0, containLabel: false
    }, xAxis: {
        type: "value", inverse: true, axisLabel: {show: false}, show: false, axisTick: {show: false}
    }, yAxis: {
        type: 'category',
        data: ["January", "February", "March", "April", "May", "June"],
        axisPointer: {type: "none"},
        axisLine: {
            show: false,
        },

        axisTick: "none",
        axisLabel: {
            show: true, align: "left", margin: 80, color: getColor("body-color"), fontWeight: 500, fontSize: '14px',
        }
    }, series: [{
        name: '2025',
        type: 'bar',
        data: [1020, 1160, 1300, 958, 1240, 1020],
        barWidth: "25px",
        showBackground: true,
        backgroundStyle: {
            borderRadius: [20, 20, 20, 20], color: getColor("body-bg")
        },
        itemStyle: {
            color: getColor('primary-rgb', 0.75), borderRadius: [20, 20, 20, 20]
        },
        label: {
            show: true, color: getColor("white"), fontWeight: 600, fontSize: '13px',
        },
    }]
})

export const horizontalBar = (): EChartsOption => ({
    tooltip: {
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
        shadowOffsetY: 1, // Custom HTML formatter
        formatter: function (params: any) {
            const title = params[0].name; // xAxis label
            let content = `<div style="font-size: 14px; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid ${getColor("border-color")}; margin-bottom: 8px; padding: 3px 10px 8px;">${title}</div>`;
            params.forEach((item: any) => {
                content += `<div style="margin-top: 4px; padding: 3px 15px;">
                            <span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:${item.color};"></span>
                            ${item.seriesName} : <strong>${item.value}</strong>
                        </div>`;
            });
            return content;
        }
    }, legend: {
        show: false
    }, grid: {
        left: '10', right: '25', top: '0%', bottom: '0%', containLabel: true
    }, xAxis: {
        type: 'value', boundaryGap: [0, 0.01], axisLine: {
            lineStyle: {
                color: '#858d98'
            },
        }, splitLine: {
            lineStyle: {
                color: "rgba(133, 141, 152, 0.1)"
            }
        }
    }, yAxis: {
        type: 'category',
        data: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        axisLine: {
            lineStyle: {
                type: 'dashed', color: getColor('light') // only line color
            }
        },
        axisLabel: {
            show: true, color: getColor('body-color') // force label color (use your normal text color token here)
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(133, 141, 152, 0.1)'
            }
        }
    }, textStyle: {
        fontFamily: getComputedStyle(document.body).fontFamily
    }, series: [{
        name: '2011',
        type: 'bar',
        data: [1020, 1160, 1300, 958, 1240, 1020, 1409, 1200, 1051, 1120, 1240, 1054],

        itemStyle: {
            color: getColor('primary-rgb', 0.75), borderRadius: [0, 3, 3, 0]
        },
    }]
})

export const negative = (): EChartsOption => ({
    tooltip: {
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
        shadowOffsetY: 1, // Custom HTML formatter
        formatter: function (params: any) {
            const title = params[0].name; // xAxis label
            let content = `<div style="font-size: 12px; font-weight: 700; text-transform: uppercase; border-bottom: 1px solid ${getColor("border-color")}; margin-bottom: 8px; padding: 3px 10px 8px;">${title}</div>`;
            params.forEach((item: any) => {
                content += `<div style="margin-top: 4px; padding: 3px 15px;">
                            <span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:${item.color};"></span>
                            ${item.seriesName} : <strong>${item.value}</strong>
                        </div>`;
            });
            return content;
        }
    },
    textStyle: {
        fontFamily: getComputedStyle(document.body).fontFamily
    },
    grid: {
        top: 0, bottom: 0
    },
    color: [getColor('primary')],
    xAxis: {
        type: 'value',
        position: 'top',
        splitLine: {
            lineStyle: {
                color: "rgba(133, 141, 152, 0.1)", type: 'dashed'
            }
        }
    },
    yAxis: {
        type: 'category',
        axisLine: {show: false},
        axisLabel: {show: false},
        axisTick: {show: false},
        splitLine: {show: false},
        data: ['Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two', 'One']
    },
    series: [{
        name: 'Cost',
        type: 'bar',
        stack: 'Total',
        label: {
            show: true, formatter: '{b}'
        },
        data: [
            {
                value: -0.07,
                label: {position: 'right'}
            },
            {
                value: -0.09,
                label: {position: 'right'}
            },
            {
                value: 0.2,
                label: {show: true, color: '#ffffff', formatter: '{b}'}
            },
            {
                value: 0.44,
                label: {show: true, color: '#ffffff', formatter: '{b}'}
            },
            {
                value: -0.23,
                label: {position: 'right'}
            },
            {
                value: 0.08,
                label: {show: true, color: '#ffffff', formatter: '{b}'}
            },
            {
                value: -0.17,
                label: {position: 'right'}
            },
            {
                value: 0.47,
                label: {show: true, color: '#ffffff', formatter: '{b}'}
            },
            {
                value: -0.36,
                label: {position: 'right'}
            },
            {
                value: 0.18,
                label: {show: true, color: '#ffffff', formatter: '{b}'}
            },
        ]
    }]
})

export const withSeries = (): EChartsOption => ({
    tooltip: {
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
        formatter: function (params: any) {
            const title = params[0].name;
            let content = `<div style="font-size: 14px; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid ${getColor("border-color")}; margin-bottom: 8px; padding: 3px 10px 8px;">${title}</div>`;
            params.forEach((item: any) => {
                content += `<div style="margin-top: 4px; padding: 3px 15px;">
                            <span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:${item.color};"></span>
                            ${item.seriesName} : <strong>${item.value}</strong>
                        </div>`;
            });
            return content;
        }
    }, textStyle: {
        fontFamily: getComputedStyle(document.body).fontFamily
    }, legend: {
        show: false,
    }, color: [getColor("primary"), getColor("secondary")], grid: {
        left: '3%', right: '4%', bottom: '3%', top: 0, containLabel: true
    }, xAxis: {
        type: 'value', boundaryGap: [0, 0.01], axisLabel: {
            show: true, color: getColor('body-color')
        }, splitLine: {
            lineStyle: {
                color: "rgba(133, 141, 152, 0.1)", type: 'dashed'
            }
        }
    }, yAxis: {
        type: 'category', data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World'], axisLine: {
            lineStyle: {
                type: 'dashed', color: getColor('light')
            }
        }, axisLabel: {
            show: true, color: getColor('body-color')
        }, splitLine: {
            lineStyle: {
                color: "rgba(133, 141, 152, 0.1)", type: 'dashed'
            }
        }
    }, series: [{
        name: '2011', type: 'bar', data: [18203, 23489, 29034, 104970, 131744, 630230]
    }, {
        name: '2012', type: 'bar', data: [19325, 23438, 31000, 121594, 134141, 681807]
    }]
})

const series = [
    {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar' as const,
        stack: 'a',
        name: 'a'
    },
    {
        data: [10, 46, 64, '-', 0, '-', 0],
        type: 'bar' as const,
        stack: 'a',
        name: 'b'
    },
    {
        data: [30, '-', 0, 20, 10, '-', 0],
        type: 'bar' as const,
        stack: 'a',
        name: 'c'
    },
    {
        data: [30, '-', 0, 20, 10, '-', 0],
        type: 'bar' as const,
        stack: 'b',
        name: 'd'
    },
    {
        data: [10, 20, 150, 0, '-', 50, 10],
        type: 'bar' as const,
        stack: 'b',
        name: 'e'
    }
];

type BarDataItem = Exclude<BarSeriesOption['data'], undefined>[number];

interface StackData {
    stackStart: (number | undefined)[];
    stackEnd: (number | undefined)[];
}

const stackInfo: { [key: string]: StackData } = {};

for (let i = 0; i < series[0].data.length; ++i) {
    for (let j = 0; j < series.length; ++j) {
        const stackName = series[j].stack;
        if (!stackName) continue;
        if (!stackInfo[stackName]) {
            stackInfo[stackName] = {
                stackStart: [], stackEnd: []
            };
        }
        const info = stackInfo[stackName];
        const data = series[j].data[i];
        if (data && data !== '-') {
            if (info.stackStart[i] == null) {
                info.stackStart[i] = j;
            }
            info.stackEnd[i] = j;
        }
    }
}

for (let i = 0; i < series.length; ++i) {
    const stackName = series[i].stack;
    if (!stackName || !stackInfo[stackName]) continue;

    const data = series[i].data as BarDataItem[];

    for (let j = 0; j < data.length; ++j) {
        const isEnd = stackInfo[stackName].stackEnd[j] === i;
        const topBorder = isEnd ? 20 : 0;
        const bottomBorder = 0;

        const value =
            typeof data[j] === 'object' && data[j] !== null
                ? (data[j] as any).value
                : data[j];

        data[j] = {
            value,
            itemStyle: {
                borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder]
            }
        };
    }
}

export const stacked = (): EChartsOption => ({
    xAxis: {
        type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], axisLine: {
            lineStyle: {
                type: 'dashed', color: getColor('light')
            }
        }, axisLabel: {
            show: true, color: getColor('body-color')
        }, splitLine: {
            lineStyle: {
                color: "rgba(133, 141, 152, 0.1)", type: 'dashed'
            }
        }
    },
    yAxis: {
        type: 'value', axisLine: {
            lineStyle: {
                type: 'dashed', color: getColor('light')
            }
        }, axisLabel: {
            show: true, color: getColor('body-color')
        }, splitLine: {
            lineStyle: {
                color: "rgba(133, 141, 152, 0.1)", type: 'dashed'
            }
        }
    },
    textStyle: {
        fontFamily: getComputedStyle(document.body).fontFamily
    },
    grid: {
        left: '0%', right: '0%', bottom: '0%', top: '5%', containLabel: true
    },
    color: [getColor("primary"), getColor("secondary"), getColor("warning"), getColor("info"), getColor("purple")],
    tooltip: {
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
        formatter: function (params: any) {
            const title = params[0].name;
            let content = `<div style="font-size: 14px; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid ${getColor("border-color")}; margin-bottom: 8px; padding: 3px 10px 8px;">${title}</div>`;
            params.forEach((item: any) => {
                content += `<div style="margin-top: 4px; padding: 3px 15px;">
                            <span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:${item.color};"></span>
                            ${item.seriesName} : <strong>${item.value}</strong>
                        </div>`;
            });
            return content;
        }
    },
    series: series
})

export const horizontalStacked = (): EChartsOption => ({
    xAxis: {
        type: 'value', axisLine: {
            lineStyle: {
                type: 'dashed', color: getColor('light')
            }
        }, axisLabel: {
            show: true, color: getColor('body-color')
        }, splitLine: {
            lineStyle: {
                color: "rgba(133, 141, 152, 0.1)", type: 'dashed'
            }
        }
    },
    yAxis: {
        type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], axisLine: {
            lineStyle: {
                type: 'dashed', color: getColor('light')
            }
        }, axisLabel: {
            show: true, color: getColor('body-color')
        }, splitLine: {
            lineStyle: {
                color: "rgba(133, 141, 152, 0.1)", type: 'dashed'
            }
        }
    },
    textStyle: {
        fontFamily: getComputedStyle(document.body).fontFamily
    },
    grid: {
        left: '10px', top: '10%', right: '4%', bottom: '0', containLabel: true
    },
    color: [getColor("primary"), getColor("secondary"), getColor("warning"), getColor("info"), getColor("purple")],
    tooltip: {
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
        formatter: function (params: any) {
            const title = params[0].name;
            let content = `<div style="font-size: 14px; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid ${getColor("border-color")}; margin-bottom: 8px; padding: 3px 10px 8px;">${title}</div>`;
            params.forEach((item: any) => {
                content += `<div style="margin-top: 4px; padding: 3px 15px;">
                        <span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:${item.color};"></span>
                        ${item.seriesName} : <strong>${item.value}</strong>
                    </div>`;
            });
            return content;
        }
    },
    legend: {
        textStyle: {color: getColor("body-color")}
    },
    series: [{
        name: 'Direct', type: 'bar', stack: 'total', label: {
            show: true, color: 'white'
        }, emphasis: {
            focus: 'series'
        }, data: [320, 302, 301, 334, 390, 330, 320]
    }, {
        name: 'Mail Ad', type: 'bar', stack: 'total', label: {
            show: true, color: 'white'
        }, emphasis: {
            focus: 'series'
        }, data: [120, 132, 101, 134, 90, 230, 210]
    }, {
        name: 'Affiliate Ad', type: 'bar', stack: 'total', label: {
            show: true, color: 'white'
        }, emphasis: {
            focus: 'series'
        }, data: [220, 182, 191, 234, 290, 330, 310]
    }, {
        name: 'Video Ad', type: 'bar', stack: 'total', label: {
            show: true, color: 'white'
        }, emphasis: {
            focus: 'series'
        }, data: [150, 212, 201, 154, 190, 330, 410]
    }, {
        name: 'Search Engine', type: 'bar', stack: 'total', label: {
            show: true, color: 'white'
        }, emphasis: {
            focus: 'series'
        }, data: [820, 832, 901, 934, 1290, 1330, 1320]
    }]
})

export const dataAxis = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];

export const barGradiant = (): EChartsOption => ({
    xAxis: {
        data: dataAxis,
        axisLine: {lineStyle: {type: 'dashed', color: getColor('light')}},
        axisLabel: {show: true, inside: true, color: "#ffffff"},
        splitLine: {lineStyle: {color: "rgba(133, 141, 152, 0.1)", type: 'dashed'}},
        axisTick: {show: false},
        z: 10
    },
    yAxis: {
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {show: true, color: getColor('body-color')},
        splitLine: {lineStyle: {color: "rgba(133, 141, 152, 0.1)", type: 'dashed'}}
    },
    tooltip: {
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
        formatter: function (params: any) {
            const title = params[0].name;
            let content = `<div style="font-size: 14px; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid ${getColor("border-color")}; margin-bottom: 8px; padding: 3px 10px 8px;">${title}</div>`;
            params.forEach((item: any) => {
                content += `<div style="margin-top: 4px; padding: 3px 15px;">
                        <span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:${item.color};"></span>
                        ${item.seriesName} : <strong>${item.value}</strong>
                    </div>`;
            });
            return content;
        }
    },
    dataZoom: [{type: 'inside'}],
    textStyle: {fontFamily: getComputedStyle(document.body).fontFamily},
    grid: {right: 5, left: 5, bottom: 5, top: 10, containLabel: true},
    series: [{
        type: 'bar', showBackground: false, itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: getColor("danger")}, {
                offset: 0.5, color: getColor("purple")
            }, {offset: 1, color: getColor("secondary")}]), borderRadius: [3, 3, 0, 0]
        }, emphasis: {
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0, color: getColor("primary")
                }, {offset: 0.7, color: getColor("primary")}, {offset: 1, color: getColor("info")}])
            }
        }, data: [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220]
    }]
})

export const mixedBar = (): EChartsOption => ({
    textStyle: {fontFamily: getComputedStyle(document.body).fontFamily}, legend: {
        data: ['Evaporation', 'Precipitation', 'Temperature'], textStyle: {color: getColor("body-color")}
    }, xAxis: [{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisPointer: {type: 'shadow'},
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {show: true, color: getColor('body-color')},
        splitLine: {lineStyle: {color: "rgba(133, 141, 152, 0.1)", type: 'dashed'}}
    }], yAxis: [{
        type: 'value',
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {formatter: '{value} ml', show: true, color: getColor('body-color')},
        axisTick: {show: false},
        axisLine: {show: false},
        splitLine: {lineStyle: {color: "rgba(133, 141, 152, 0.1)", type: 'dashed'}}
    }, {
        type: 'value',
        min: 0,
        max: 25,
        interval: 5,
        axisLabel: {formatter: '{value} °C', show: true, color: getColor('body-color')},
        axisTick: {show: false},
        axisLine: {show: false},
        splitLine: {lineStyle: {color: "rgba(133, 141, 152, 0.1)", type: 'dashed'}}
    }], grid: {left: '0%', right: '0%', bottom: '0%', top: '12%', containLabel: true}, tooltip: {
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
        formatter: function (params: any) {
            const title = params[0].name;
            let content = `<div style="font-size: 14px; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid ${getColor("border-color")}; margin-bottom: 8px; padding: 3px 10px 8px;">${title}</div>`;
            params.forEach((item: any) => {
                content += `<div style="margin-top: 4px; padding: 3px 15px;">
                        <span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:${item.color};"></span>
                        ${item.seriesName} : <strong>${item.value}</strong>
                    </div>`;
            });
            return content;
        }
    }, series: [{
        name: 'Evaporation',
        type: 'bar',
        tooltip: {valueFormatter: value => value + ' ml'},
        itemStyle: {
            color: getColor('primary-rgb', 0.75),
            borderRadius: [3, 3, 0, 0]
        },
        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6]
    }, {
        name: 'Precipitation',
        type: 'bar',
        tooltip: {valueFormatter: value => value + ' ml'},
        itemStyle: {color: getColor('danger-rgb', 0.75), borderRadius: [3, 3, 0, 0]},
        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6]
    }, {
        name: 'Temperature',
        type: 'line',
        yAxisIndex: 1,
        tooltip: {valueFormatter: value => value + ' °C'},
        itemStyle: {color: getColor('purple-rgb', 0.75), borderRadius: [3, 3, 0, 0]},
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3]
    }]
})


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const chartData: {
    dataPI: Record<number, { name: string; value: number }[]>,
    dataSI: Record<number, { name: string; value: number }[]>,
    dataTI: Record<number, { name: string; value: number }[]>
} = {
    dataPI: {},
    dataSI: {},
    dataTI: {}
};

const transformData = (dataSet: Record<number, number[]>) => {
    return Object.keys(dataSet).reduce((acc: Record<number, { name: string, value: number }[]>, year: string) => {
        acc[+year] = dataSet[+year].map((value: number, index: number) => ({
            name: months[index],
            value: value
        }));
        return acc;
    }, {});
};

const generateRandomData = (): Record<number, number[]> => {
    const data: Record<number, number[]> = {};
    const years = [2019, 2020, 2021, 2022, 2023, 2024, 2025];
    years.forEach(year => {
        data[year] = Array.from({length: 12}, () => +(Math.random() * 3000 + 100).toFixed(2));
    });
    return data;
};
chartData.dataPI = transformData(generateRandomData());
chartData.dataSI = transformData(generateRandomData());
chartData.dataTI = transformData(generateRandomData());

export const timelineBar = (): EChartsOption => ({
    baseOption: {
        timeline: {
            axisType: "category",
            autoPlay: false,
            playInterval: 1000,
            data: ["2019-01-01", "2020-01-01", "2021-01-01", "2022-01-01", "2023-01-01", "2024-01-01", "2025-01-01"],
            label: {
                formatter: (s: string | number) => new Date(s).getFullYear().toString()
            },
            lineStyle: {color: getColor("border-color")},
            itemStyle: {color: getColor("border-color")},
            checkpointStyle: {
                color: getColor("primary"),
                shadowBlur: 0,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
            },
            controlStyle: {color: getColor("info")}
        }, title: {
            textStyle: {color: getColor("tertiary-color")}
        }, tooltip: {
            trigger: "axis",
            padding: [5, 0],
            backgroundColor: getColor("secondary-bg"),
            borderColor: getColor("border-color"),
            textStyle: {color: getColor("light-text-emphasis")},
            borderWidth: 1,
            transitionDuration: 0.125,
            axisPointer: {type: "shadow"},
            shadowBlur: 2,
            shadowColor: "rgba(76, 76, 92, 0.15)",
            shadowOffsetX: 0,
            shadowOffsetY: 1, // Custom HTML formatter
            formatter: function (params: any) {
                const title = params[0].name; // xAxis label
                let content = `<div style="font-size: 14px; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid ${getColor("border-color")}; margin-bottom: 8px; padding: 3px 10px 8px;">${title}</div>`;
                params.forEach((item: any) => {
                    content += `<div style="margin-top: 4px; padding: 3px 15px;">
                                <span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:${item.color};"></span>
                                ${item.seriesName} : <strong>${item.value}</strong>
                            </div>`;
                });
                return content;
            }
        }, textStyle: {
            fontFamily: getComputedStyle(document.body).fontFamily
        }, legend: {
            left: "right",
            data: ["Primary industry", "Secondary industry", "Tertiary Industry"],
            textStyle: {color: getColor("tertiary-color")}
        }, calculable: true, xAxis: [{
            type: "category",
            data: months,
            splitLine: {show: false},
            axisLine: {
                lineStyle: {
                    type: 'dashed', color: getColor('light') // only line color
                }
            },
            axisLabel: {
                show: true, color: getColor('body-color') // force label color (use your normal text color token here)
            }
        }], yAxis: [{
            type: "value", axisLabel: {
                formatter: val => val / 1000 + "k", color: getColor("body-color")
            }, axisLine: {
                lineStyle: {
                    type: 'dashed', color: getColor('light') // only line color
                }
            }, splitLine: {
                lineStyle: {
                    color: "rgba(133, 141, 152, 0.1)", type: 'dashed'
                }
            }
        }], series: [{
            name: "Primary industry", type: "bar", barWidth: "15px", barGap: "0.25", itemStyle: {
                color: getColor("primary"), borderRadius: [3, 3, 0, 0]
            }
        }, {
            name: "Secondary industry", type: "bar", barWidth: "15px", barGap: "0.25", itemStyle: {
                color: getColor("info"), borderRadius: [3, 3, 0, 0]
            }
        }, {
            name: "Tertiary Industry", type: "bar", barWidth: "15px", barGap: "0.25", itemStyle: {
                color: getColor("warning"), borderRadius: [3, 3, 0, 0]
            }
        }], grid: {
            top: "10%", bottom: "15%", left: 5, right: 10, containLabel: true
        }
    },

    options: [2019, 2020, 2021, 2022, 2023, 2024, 2025].map(year => ({
        title: {text: String(year)},
        series: [{data: chartData.dataPI[year]}, {data: chartData.dataSI[year]}, {data: chartData.dataTI[year]}]
    }))
})
