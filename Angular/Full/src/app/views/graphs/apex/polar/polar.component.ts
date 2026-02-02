import { Component } from '@angular/core';
import { ApexchartComponent } from '@app/components/apexchart.component';
import { PageTitleComponent } from '@app/components/page-title.component';
import { UiCardComponent } from '@app/components/ui-card.component';
import { basicPolarAreaChart, monochromePolarAreaChart } from './data';

@Component({
  selector: 'app-apex-polar',
  imports: [PageTitleComponent,UiCardComponent,ApexchartComponent],
  templateUrl: './polar.component.html',
  styles: ``
})
export class PolarComponent {
monochromePolarAreaChart= monochromePolarAreaChart
basicPolarAreaChart= basicPolarAreaChart
}
