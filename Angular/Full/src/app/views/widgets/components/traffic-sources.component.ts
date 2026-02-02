import {Component} from '@angular/core';
import {UiCardComponent} from '@app/components/ui-card.component';
import {NgIcon} from '@ng-icons/core';
import {interval, scan} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterLink} from '@angular/router';
import {pageVisits} from '@/app/views/widgets/data';

@Component({
    selector: 'app-traffic-sources',
    imports: [
        UiCardComponent,
        NgIcon,
        AsyncPipe,
        NgbProgressbarModule,
        RouterLink,
    ],
    template: `
        <app-ui-card title="Traffic Sources" [isCloseable]="true" [isTogglable]="true" [isReloadable]="true">
            <div card-body>
                <div class="row mb-2">
                    <div class="col-lg">
                        <h3 class="mb-2 fw-bold">{{ currentVisitors$ | async }}</h3>
                        <p class="mb-2 fw-semibold text-muted">Right Now</p>
                    </div>
                    <div class="col-lg-auto align-self-center">
                        <ul class="list-unstyled mb-0 lh-lg">
                            <li>
                                <ng-icon name="tablerCaretRightFill"
                                         class="fs-lg d-inline-flex me-1 align-middle text-primary"/>
                                <span class="text-muted">Organic</span>
                            </li>
                            <li>
                                <ng-icon name="tablerCaretRightFill"
                                         class="fs-lg d-inline-flex me-1 align-middle text-success"/>
                                <span class="text-muted">Direct</span>
                            </li>
                            <li>
                                <ng-icon name="tablerCaretRightFill" class="fs-lg d-inline-flex me-1 align-middle"/>
                                <span class="text-muted">Campaign</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <ngb-progressbar-stacked style="height: 20px;" class="mb-3">
                    <ngb-progressbar [value]="25" type="primary" style="height: 20px;"/>
                    <ngb-progressbar [value]="50" type="success" style="height: 20px;"/>
                    <ngb-progressbar [value]="15" type="info" style="height: 20px;"/>
                </ngb-progressbar-stacked>

                <div class="table-responsive">
                    <table class="table table-sm table-custom table-nowrap table-hover table-centered mb-0">
                        <thead class="bg-light align-middle bg-opacity-25 thead-sm">
                        <tr class="text-uppercase fs-xxs">
                            <th class="text-muted">URL</th>
                            <th class="text-muted text-end">Views</th>
                            <th class="text-muted text-end">Uniques</th>
                        </tr>
                        </thead>
                        <tbody>
                            @for (page of pageVisits; track $index) {
                                <tr>
                                    <td class="text-decoration-underline">{{ page.url }}</td>
                                    <td class="text-end">{{ page.uniqueVisitors }}k</td>
                                    <td class="text-end">{{ page.totalPageviews }}k</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
                <div class="text-end mt-3">
                    <a routerLink="/apps/chat"
                       class="link-reset text-decoration-underline fw-semibold link-offset-3 d-flex align-items-center justify-content-end gap-1 flex-wrap">
                        View all Links
                        <ng-icon name="tablerLink"/>
                    </a>
                </div>
            </div>
        </app-ui-card>
    `,
    styles: ``
})
export class TrafficSourcesComponent {
    private getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public currentVisitors$ = interval(1000).pipe(
        scan((acc) => {
            const change = this.getRandomNumber(-20, 20);
            return Math.max(100, acc + change);
        }, this.getRandomNumber(2000, 8975))
    );
    protected readonly pageVisits = pageVisits;
}
