import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgIcon} from '@ng-icons/core';
import {statisticCards2} from '@/app/views/widgets/data';
import {StatisticCard2Component} from '@/app/views/widgets/components/statistic-card2.component';

@Component({
    selector: 'app-sales-performance-overview',
    imports: [
        RouterLink,
        NgIcon,
        StatisticCard2Component
    ],
    template: `
        <div class="card">
            <div class="card-body p-0">
                <div class="p-3 bg-light-subtle border-bottom border-dashed">
                    <div class="row">
                        <div class="col">
                            <h4 class="fs-sm mb-1">Would you like the full report?</h4>
                            <small class="text-muted fs-xs mb-0">
                                All 120 orders have been successfully delivered
                            </small>
                        </div>
                        <div class="col-auto align-self-center">
                            <button type="button" class="btn btn-sm btn-default rounded-circle btn-icon"
                                    data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Download">
                                <ng-icon name="tablerDownload" class="fs-xl"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="row row-cols-xxl-2 row-cols-md-2 row-cols-1 g-1 p-1">
                    @for (item of statisticCards2; track $index) {
                        <div class="col">
                            <app-statistic-card2 [item]="item"/>
                        </div>
                    }
                </div>

                <div class="text-center my-2">
                    <a [routerLink]="[]"
                       class="link-reset text-decoration-underline fw-semibold link-offset-3 d-flex align-items-center gap-2 justify-content-center">
                        View all Links
                        <ng-icon name="tablerLink"/>
                    </a>
                </div>

            </div>
        </div>
    `,
    styles: ``
})
export class SalesPerformanceOverviewComponent {

    protected readonly statisticCards2 = statisticCards2;
}
