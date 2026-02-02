import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgIcon} from '@ng-icons/core';
import {CountUpModule} from 'ngx-countup';
import {currency} from '@/app/constants';
import {EchartComponent} from '@app/components/echart.component';
import {revenueChartOptions} from '@/app/views/dashboards/dashboard-1/data';

@Component({
  selector: 'app-revenue-chart',
    imports: [
        RouterLink,
        NgIcon,
        CountUpModule,
        EchartComponent
    ],
  template: `
      <div class="px-4 py-3 border-end border-dashed">
          <div class="d-flex justify-content-between mb-3">
              <h4 class="card-title">Revenue</h4>
              <a [routerLink]="[]" class="link-reset text-decoration-underline fw-semibold link-offset-3">View Reports
                  <ng-icon name="tablerArrowRight" />
              </a>
          </div>

          <div class="row text-center mb-3">
              <div class="col">
                  <div class="bg-light bg-opacity-50 p-2">
                      <h5 class="m-0"><span class="text-muted">Total Revenue:</span>{{ currency }} <span
                          [countUp]="40">0</span>M</h5>
                  </div>
              </div>
              <div class="col">
                  <div class="bg-light bg-opacity-50 p-2">
                      <h5 class="m-0"><span class="text-muted">Total Orders: </span> <span
                          [countUp]="50.90" [options]="{decimalPlaces: 2}">0</span>k</h5>
                  </div>
              </div>
          </div>

          <div dir="ltr" class="position-relative">
              <div
                  class="py-2 px-3 rounded-3 bg-light-subtle border text-primary z-1 position-absolute"
                  style="top: 4.5%; left: 12%;">
                  <p class="mb-2 text-uppercase fs-xxs fw-semibold">Growth Rate</p>
                  <h4 class="mb-0 fw-bold text-primary d-flex align-items-center gap-1 flex-wrap">89.24% <ng-icon name="tablerTrendingUp" />
                  </h4>
              </div>
              <app-echart [getOptions]="revenueChartOptions" height="252px"/>
          </div>
      </div>
  `,
  styles: ``
})
export class RevenueChartComponent {

    protected readonly currency = currency;
    protected readonly revenueChartOptions = revenueChartOptions;
}
