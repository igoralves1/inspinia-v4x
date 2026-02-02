import {Routes} from '@angular/router';
import {LineComponent} from '@/app/views/graphs/echarts/line/line.component';
import {BarComponent} from '@/app/views/graphs/echarts/bar/bar.component';
import {PieComponent} from '@/app/views/graphs/echarts/pie/pie.component';
import {ScatterComponent} from '@/app/views/graphs/echarts/scatter/scatter.component';
import {CandlestickComponent} from '@/app/views/graphs/echarts/candlestick/candlestick.component';
import {AreaComponent} from '@/app/views/graphs/echarts/area/area.component';
import {RadarComponent} from '@/app/views/graphs/echarts/radar/radar.component';
import {HeatmapComponent} from '@/app/views/graphs/echarts/heatmap/heatmap.component';
import {OtherComponent} from '@/app/views/graphs/echarts/other/other.component';
import {GaugeComponent} from '@/app/views/graphs/echarts/gauge/gauge.component';
import {GeoMapComponent} from '@/app/views/graphs/echarts/geo-map/geo-map.component';

export const ECHARTS_ROUTES: Routes = [
    {
        path: 'graphs/echarts/line',
        component: LineComponent,
        data: {title: "EChart Line Chart"},
    },
    {
        path: 'graphs/echarts/bar',
        component: BarComponent,
        data: {title: "EChart Bar chart"},
    },
    {
        path: 'graphs/echarts/pie',
        component: PieComponent,
        data: {title: "EChart Pie chart"},
    },
    {
        path: 'graphs/echarts/scatter',
        component: ScatterComponent,
        data: {title: "EChart Scatter chart"},
    }, {
        path: 'graphs/echarts/gauge',
        component:GaugeComponent,
        data: {title: "EChart Gauge chart"},
    },
    {
        path: 'graphs/echarts/candlestick',
        component: CandlestickComponent,
        data: {title: "EChart Candlestick chart"},
    },
    {
        path: 'graphs/echarts/area',
        component: AreaComponent,
        data: {title: "EChart Area chart"},
    },
    {
        path: 'graphs/echarts/radar',
        component: RadarComponent,
        data: {title: "EChart Radar chart"},
    },
    {
        path: 'graphs/echarts/heatmap',
        component: HeatmapComponent,
        data: {title: "EChart Heatmap chart"},
    },
    {
        path: 'graphs/echarts/other',
        component: OtherComponent,
        data: {title: "EChart Other chart"},
    },
    {
        path: 'graphs/echarts/geo-map',
        component: GeoMapComponent,
        data: {title: "EChart GEO Map"},
    }
]
