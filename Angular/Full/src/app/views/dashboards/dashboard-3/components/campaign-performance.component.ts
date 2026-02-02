import {Component, OnInit} from '@angular/core';
import {UiCardComponent} from '@app/components/ui-card.component';
import {Observable} from 'rxjs';
import {TableService} from '@core/services/table.service';
import {campaignData} from '@/app/views/dashboards/dashboard-3/data';
import {CampaignType} from '@/app/views/dashboards/dashboard-3/types';
import {currency} from '@/app/constants';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {NgIcon} from '@ng-icons/core';
import {NgbdSortableHeader} from '@core/directive/sortable.directive';
import {AsyncPipe, DecimalPipe} from '@angular/common';

@Component({
    selector: 'app-campaign-performance',
    imports: [
        UiCardComponent,
        NgbPaginationModule,
        NgIcon,
        NgbdSortableHeader,
        DecimalPipe,
        AsyncPipe
    ],
    providers:[TableService],
    template: `
        <app-ui-card bodyClass="p-0" title="Top Campaign Performance" [isCloseable]="true" [isTogglable]="true"
                     [isReloadable]="true">
            <div card-body>
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table table-custom table-nowrap table-hover table-centered mb-0">
                            <thead class="bg-light align-middle bg-opacity-25 thead-sm">
                            <tr class="text-uppercase fs-xxs">
                                <th class="text-muted">Campaign</th>
                                <th sortable="visitors" (sort)="tableService.setSort($event.column, $event.direction)"
                                    class="text-muted">Visitors
                                </th>
                                <th sortable="newUsers" (sort)="tableService.setSort($event.column, $event.direction)"
                                    class="text-muted">New Users
                                </th>
                                <th sortable="sessions" (sort)="tableService.setSort($event.column, $event.direction)"
                                    class="text-muted">Sessions
                                </th>
                                <th sortable="bounceRate" (sort)="tableService.setSort($event.column, $event.direction)"
                                    class="text-muted">Bounce Rate
                                </th>
                                <th sortable="pageVisits" (sort)="tableService.setSort($event.column, $event.direction)"
                                    class="text-muted">Pages/Visit
                                </th>
                                <th sortable="avgDuration"
                                    (sort)="tableService.setSort($event.column, $event.direction)" class="text-muted">
                                    Avg. Duration
                                </th>
                                <th sortable="leads" (sort)="tableService.setSort($event.column, $event.direction)"
                                    class="text-muted">Leads
                                </th>
                                <th sortable="revenue" (sort)="tableService.setSort($event.column, $event.direction)"
                                    class="text-muted">Revenue
                                </th>
                                <th sortable="conversion" (sort)="tableService.setSort($event.column, $event.direction)"
                                    class="text-muted">Conversion
                                </th>
                            </tr>
                            </thead>
                            <tbody class="text-sm">
                                @if ((total$ | async)! > 0) {
                                    @for (campaign of campaignData$ | async; track $index) {
                                        <tr>
                                            <td>
                                                <ng-icon [name]="campaign.icon"
                                                         class="text-{{ campaign.variant }} me-1 fs-lg"/>
                                                {{ campaign.name }}
                                            </td>
                                            <td>{{ campaign.visitors }}</td>
                                            <td>{{ campaign.newUsers }}</td>
                                            <td>{{ campaign.sessions | number }}</td>
                                            <td>
                                <span [class]="campaign.isPositive ? 'text-success': ''">
                                  {{ campaign.bounceRate }}%
                                </span>
                                            </td>
                                            <td>{{ campaign.pageVisits }}</td>
                                            <td>{{ campaign.avgDuration }}</td>
                                            <td>{{ campaign.leads }}</td>
                                            <td>
                                <span [class]="campaign.isPositive ? 'text-success': ''">
                                  {{ currency }}{{ campaign.revenue }}M
                                </span>
                                            </td>
                                            <td>{{ campaign.conversion | number:'1.2-2' }}%</td>
                                        </tr>
                                    }
                                } @else {
                                    <tr class="no-results">
                                        <td colspan="11" class="text-center text-muted py-3">Nothing found.</td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="card-footer border-0">
                    @if ((total$ | async)! > 0) {
                        <div
                            class="align-items-center justify-content-between pagination-boxed row text-center text-sm-start">
                            <div class="col-sm">
                                {{ tableService.showingRange }} entries
                            </div>
                            <div class="col-sm-auto mt-3 mt-sm-0">
                                <ngb-pagination
                                    [collectionSize]="(total$ | async)!"
                                    [(page)]="tableService.page"
                                    [pageSize]="tableService.pageSize"
                                >
                                    <ng-template ngbPaginationPrevious>
                                        <ng-icon name="tablerChevronLeft"/>
                                    </ng-template>
                                    <ng-template ngbPaginationNext>
                                        <ng-icon name="tablerChevronRight"/>
                                    </ng-template>
                                </ngb-pagination>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </app-ui-card>
    `,
    styles: ``
})
export class CampaignPerformanceComponent implements OnInit {
    campaignData$: Observable<CampaignType[]>
    total$: Observable<number>;

    constructor(public tableService: TableService<CampaignType>) {
        this.campaignData$ = this.tableService.items$
        this.total$ = this.tableService.total$
    }

    ngOnInit(): void {
        this.tableService.setItems(campaignData, 5)
    }

    protected readonly currency = currency;
}
