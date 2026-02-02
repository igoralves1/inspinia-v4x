import {Component} from '@angular/core';
import {ApexchartComponent} from '@app/components/apexchart.component';
import {PageTitleComponent} from '@app/components/page-title.component';
import {spark1Options, spark2Options, spark3Options, tableChartData} from './data';

@Component({
    selector: 'app-apex-sparkline',
    imports: [PageTitleComponent, ApexchartComponent],
    templateUrl: './sparkline.component.html',
    styles: ``
})
export class SparklineComponent {
    spark1Options = spark1Options
    spark2Options = spark2Options
    spark3Options = spark3Options
    tableChartData = tableChartData
}
