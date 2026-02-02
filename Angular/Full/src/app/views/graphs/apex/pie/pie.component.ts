import {Component} from '@angular/core';
import {ApexchartComponent} from '@app/components/apexchart.component';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {
    gradientDonutChart,
    imagePieChart,
    monochromePieChart,
    patternedDonutChart,
    simpleDonutChart,
    simplePieChart
} from './data';
import {UpdatableDonutChartComponent} from '@/app/views/graphs/apex/pie/components/updatable-donut-chart.component';

@Component({
    selector: 'app-apex-pie',
    imports: [UiCardComponent, PageTitleComponent, ApexchartComponent, UpdatableDonutChartComponent],
    templateUrl: './pie.component.html',
    styles: ``
})
export class PieComponent {
    simplePieChart = simplePieChart
    simpleDonutChart = simpleDonutChart
    monochromePieChart = monochromePieChart
    gradientDonutChart = gradientDonutChart
    patternedDonutChart = patternedDonutChart
    imagePieChart = imagePieChart
}
