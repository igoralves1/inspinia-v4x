import {Routes} from "@angular/router";
import {AreaComponent} from "./area/area.component";
import {BarComponent} from "./bar/bar.component";
import {BubbleComponent} from "./bubble/bubble.component";
import {CandlestickComponent} from "./candlestick/candlestick.component";
import {ColumnComponent} from "./column/column.component";
import {HeatmapComponent} from "./heatmap/heatmap.component";
import {LineComponent} from "./line/line.component";
import {MixedComponent} from "./mixed/mixed.component";
import {TimelineComponent} from "./timeline/timeline.component";
import {BoxplotComponent} from "./boxplot/boxplot.component";
import {TreemapComponent} from "./treemap/treemap.component";
import {PieComponent} from "./pie/pie.component";
import {RadarComponent} from "./radar/radar.component";
import {RadialbarComponent} from "./radialbar/radialbar.component";
import {ScatterComponent} from "./scatter/scatter.component";
import {PolarComponent} from "./polar/polar.component";
import {SparklineComponent} from "./sparkline/sparkline.component";
import {RangeComponent} from "./range/range.component";
import {FunnelComponent} from "./funnel/funnel.component";
import {SlopeComponent} from "./slope/slope.component";

export const APEXCHARTS_ROUTES: Routes = [
    {
        path: 'graphs/apex/bar',
        component: BarComponent,
        data: {title: "Apex Bar Chart"},
    },
    {
        path: 'graphs/apex/area',
        component: AreaComponent,
        data: {title: "Apex Area Chart"},
    },
    {
        path: 'graphs/apex/bubble',
        component: BubbleComponent,
        data: {title: "Apex Bubble Chart"},
    },
    {
        path: 'graphs/apex/candlestick',
        component: CandlestickComponent,
        data: {title: "Apex Candlestick Chart"},
    },
    {
        path: 'graphs/apex/column',
        component: ColumnComponent,
        data: {title: "Apex Column Chart"},
    },
    {
        path: 'graphs/apex/heatmap',
        component: HeatmapComponent,
        data: {title: "Apex Heatmap Chart"},
    },
    {
        path: 'graphs/apex/line',
        component: LineComponent,
        data: {title: "Apex Line Chart"},
    },
    {
        path: 'graphs/apex/mixed',
        component: MixedComponent,
        data: {title: "Apex Mixed Chart"},
    },
    {
        path: 'graphs/apex/timeline',
        component: TimelineComponent,
        data: {title: "Apex Timeline Chart"},
    },
    {
        path: 'graphs/apex/boxplot',
        component: BoxplotComponent,
        data: {title: "Apex Boxplot Chart"},
    },
    {
        path: 'graphs/apex/treemap',
        component: TreemapComponent,
        data: {title: "Apex Treemap Chart"},
    },
    {
        path: 'graphs/apex/pie',
        component: PieComponent,
        data: {title: "Apex Pie Chart"},
    },
    {
        path: 'graphs/apex/radar',
        component: RadarComponent,
        data: {title: "Apex Radar Chart"},
    },
    {
        path: 'graphs/apex/radialbar',
        component: RadialbarComponent,
        data: {title: "Apex Radialbar Chart"},
    },

    {
        path: 'graphs/apex/scatter',
        component: ScatterComponent,
        data: {title: "Apex Scatter Chart"},
    },
    {
        path: 'graphs/apex/polar-area',
        component: PolarComponent,
        data: {title: "Apex Polar Area Chart"},
    },
    {
        path: 'graphs/apex/sparklines',
        component: SparklineComponent,
        data: {title: "Apex Sparklines Chart"},
    },
    {
        path: 'graphs/apex/range',
        component: RangeComponent,
        data: {title: "Apex Range Chart"},
    },
    {
        path: 'graphs/apex/funnel',
        component: FunnelComponent,
        data: {title: "Apex Funnel Chart"},
    },
    {
        path: 'graphs/apex/slope',
        component: SlopeComponent,
        data: {title: "Apex Slope Chart"},
    }
]
