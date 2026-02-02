// src/app/config/echarts-config.ts
import * as echarts from 'echarts/core';
import {
    BarChart,
    BoxplotChart,
    FunnelChart,
    GaugeChart,
    GraphChart,
    HeatmapChart,
    LineChart,
    MapChart,
    ParallelChart,
    PictorialBarChart,
    PieChart,
    RadarChart,
    SankeyChart,
    ScatterChart,
    SunburstChart,
    ThemeRiverChart,
    TreeChart,
    TreemapChart,
    CandlestickChart
} from 'echarts/charts';

import {
    DatasetComponent,
    DataZoomComponent,
    GraphicComponent,
    GridComponent,
    LegendComponent,
    PolarComponent,
    RadarComponent,
    TimelineComponent,
    TitleComponent,
    ToolboxComponent,
    TooltipComponent,
    VisualMapComponent,
    MarkLineComponent,
    MarkPointComponent,
} from 'echarts/components';

import {CanvasRenderer} from 'echarts/renderers';

// Register all needed chart types and components
echarts.use([
    // Charts
    BarChart,
    LineChart,
    PieChart,
    ScatterChart,
    RadarChart,
    MapChart,
    GaugeChart,
    FunnelChart,
    TreeChart,
    TreemapChart,
    GraphChart,
    BoxplotChart,
    HeatmapChart,
    ParallelChart,
    SankeyChart,
    PictorialBarChart,
    ThemeRiverChart,
    SunburstChart,
    CandlestickChart,
    MarkPointComponent,

    // Components
    GridComponent,
    TooltipComponent,
    LegendComponent,
    TitleComponent,
    ToolboxComponent,
    DataZoomComponent,
    VisualMapComponent,
    DatasetComponent,
    TimelineComponent,
    GraphicComponent,
    PolarComponent,
    RadarComponent,
    MarkLineComponent,

    // Renderer
    CanvasRenderer
]);

export {echarts}
