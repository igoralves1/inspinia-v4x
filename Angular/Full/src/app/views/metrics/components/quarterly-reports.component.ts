import {Component} from '@angular/core';
import {UiCardComponent} from '@app/components/ui-card.component';
import {EchartComponent} from '@app/components/echart.component';
import {quarterlyReports} from '@/app/views/metrics/data';

@Component({
  selector: 'app-quarterly-reports',
    imports: [
        UiCardComponent,
        EchartComponent
    ],
  template: `
      <app-ui-card bodyClass="p-0" title="Quarterly Reports" [isCloseable]="true" [isTogglable]="true"
                   [isReloadable]="true">
          <span badge-text class="badge text-bg-primary">IN+</span>
          <div class="table-responsive" card-body>
              <table class="table table-custom table-nowrap table-hover table-centered mb-0">
                  <thead class="bg-light bg-opacity-25 thead-sm">
                  <tr class="text-uppercase fs-xxs">
                      <th class="text-muted">Quarter</th>
                      <th class="text-muted">Revenue</th>
                      <th class="text-muted">Expense</th>
                      <th class="text-muted">Margin</th>
                      <th class="text-muted">•••</th>
                  </tr>
                  </thead>
                  <tbody>
                      @for (report of quarterlyReports; track $index) {
                          <tr>
                              <td>
                                  <h5 class="mb-0">{{ report.label }}</h5>
                                  <span class="text-muted fs-xs">{{ report.date }}</span>
                              </td>
                              <td>{{ report.revenue.prefix }}{{ report.revenue.value }}{{ report.revenue.suffix }}</td>
                              <td>{{ report.expense.prefix }}{{ report.expense.value }}{{ report.expense.suffix }}</td>
                              <td>{{ report.margin.prefix }}{{ report.margin.value }}{{ report.margin.suffix }}</td>
                              <td style="width: 60px;">
                                  <div dir="ltr">
                                      @if (report.chartOptions) {
                                          <app-echart [getOptions]="report.chartOptions"
                                                      class="donut-chart" height="30px"
                                                      width="30px"/>
                                      }
                                  </div>
                              </td>
                          </tr>
                      }
                  </tbody>

              </table>
          </div>
      </app-ui-card>
  `,
  styles: ``
})
export class QuarterlyReportsComponent {

    protected readonly quarterlyReports = quarterlyReports;
}
