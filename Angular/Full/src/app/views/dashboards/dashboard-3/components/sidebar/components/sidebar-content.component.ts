import { Component } from '@angular/core';
import {SimplebarAngularModule} from 'simplebar-angular';
import {
    QuickMessageComponent
} from '@/app/views/dashboards/dashboard-3/components/sidebar/components/quick-message.component';
import {
    PostAndOrdersComponent
} from '@/app/views/dashboards/dashboard-3/components/sidebar/components/post-and-orders.component';
import {
    TodayScheduleComponent
} from '@/app/views/dashboards/dashboard-3/components/sidebar/components/today-schedule.component';

@Component({
  selector: 'app-sidebar-content',
    imports: [
        SimplebarAngularModule,
        QuickMessageComponent,
        PostAndOrdersComponent,
        TodayScheduleComponent
    ],
  template: `
      <ngx-simplebar style="height: 100%">
          <div class="p-0 h-100">
              <div class="d-block">
                  <app-quick-message/>

                  <app-post-and-orders/>

                  <app-today-schedule/>
              </div>
          </div>
      </ngx-simplebar>
  `,
  styles: ``
})
export class SidebarContentComponent {

}
