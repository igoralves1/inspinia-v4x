import {Component} from '@angular/core';
import {EchartComponent} from '@app/components/echart.component';
import {projectProgressChartOptions} from '@/app/views/dashboards/dashboard-1/data';

@Component({
  selector: 'app-project-progress-chart',
    imports: [
        EchartComponent
    ],
  template: `
      <div class="p-3">
          <h4 class="card-title mb-1"> Project Progress</h4>
          <p class="text-muted fs-xs">
              You have 21 projects with not completed task.
          </p>
          <div class="row mt-4">
              <div class="col-lg-12">
                  <div dir="ltr">
                      <app-echart [getOptions]="projectProgressChartOptions" height="278px"/>
                  </div>
              </div>
          </div>
      </div>
  `,
  styles: ``
})
export class ProjectProgressChartComponent {

    protected readonly projectProgressChartOptions = projectProgressChartOptions;
}
