import {Component, Input} from '@angular/core';
import {StatisticCard5Type} from '@/app/views/widgets/types';
import {NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterLink} from '@angular/router';
import {toTitleCase} from '@/app/utils/string-utils';

@Component({
    selector: 'app-statistic-card5',
    imports: [NgbProgressbarModule, RouterLink],
    template: `
        <div class="card">
            <div class="card-body">
                <div>
                    <a [routerLink]="[]" class="link-reset text-uppercase fw-semibold">{{ item.title }}</a>
                    <div class="py-2">
                        <span class="fs-xl fw-bold me-2">{{ item.progress }}%</span>
                        <span class="fw-semibold text-muted fs-7">
                       {{toTitleCase(item.status)  }}
                    </span>
                    </div>
                </div>
                <ngb-progressbar [value]="item.progress" [type]="'success'" textType="success" class="progress-md bg-opacity-25"/>
                <div class="mt-2 text-muted">{{ item.description }}</div>
            </div>
        </div>
    `,
    styles: ``
})
export class StatisticCard5Component {
    @Input() item!: StatisticCard5Type;
    protected readonly toTitleCase = toTitleCase;
}
