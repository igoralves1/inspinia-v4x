import {Component} from '@angular/core';
import {UiCardComponent} from '@app/components/ui-card.component';
import {deviceSessionData, deviceSessionsChartOptions} from '@/app/views/dashboards/dashboard-3/data';
import {ApexchartComponent} from '@app/components/apexchart.component';

@Component({
    selector: 'app-device-sessions',
    imports: [
        UiCardComponent,
        ApexchartComponent
    ],
    template: `
        <app-ui-card bodyClass="p-0" title="Sessions Device" [isCloseable]="true" [isTogglable]="true"
                     [isReloadable]="true">
            <div card-body>
                <div class="card-body pb-0">
                    <app-apexchart [getOptions]="deviceSessionsChartOptions"/>
                </div>

                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table table-custom table-nowrap table-hover table-centered mb-0">
                            <thead class="bg-light align-middle bg-opacity-25 thead-sm">
                            <tr class="text-uppercase fs-xxs">
                                <th class="text-muted">Device</th>
                                <th class="text-muted">Sessions</th>
                                <th class="text-muted">Change</th>
                                <th class="text-muted text-end">Traffic %</th>
                            </tr>
                            </thead>
                            <tbody>
                                @for (device of deviceSessionData; track $index) {
                                    <tr>
                                        <td>
                                            <h5 class="fs-base lh-base mb-0">{{ device.name }}</h5>
                                            <p class="fs-xxs mb-0 text-body-secondary">-  {{ device.platforms }}</p>
                                        </td>
                                        <td>{{ device.users }}</td>
                                        <td [class]="device.isPositive ? 'text-success': 'text-danger'"> {{ device.isPositive ? '+' : '-' }}{{ device.change }}%
                                        </td>
                                        <td class="text-end">{{ device.percentage }}%</td>
                                    </tr>
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </app-ui-card>

    `,
    styles: ``
})
export class DeviceSessionsComponent {

    protected readonly deviceSessionsChartOptions = deviceSessionsChartOptions;
    protected readonly deviceSessionData = deviceSessionData;
}
