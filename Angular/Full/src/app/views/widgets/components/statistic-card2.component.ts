import {Component, Input} from '@angular/core';
import {StatisticCard2Type} from '@/app/views/widgets/types';
import {NgIcon} from '@ng-icons/core';
import {NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-statistic-card2',
    imports: [
        NgIcon,
        NgbProgressbarModule,
    ],
    template: `
        <div class="card rounded-0 border shadow-none border-dashed mb-0"
             [class]="item.variant ? 'bg-opacity-10 bg-' + item.variant + ' border-' + item.variant : ''">
            <div class="card-body">
                <div class="mb-3 d-flex justify-content-between align-items-center">
                    <h5 class="fs-xl mb-0">{{ item.count.prefix || '' }}{{ item.count.value }}
                        @if (item.count.suffix) {
                            <small class="fs-6">{{ item.count.suffix }}</small>
                        }
                    </h5>
                    <span>{{ item.percentage }}%
                        <ng-icon [name]="item.percentageIcon"
                                 [class]="item.isPositive ? 'text-success' : 'text-danger'"/></span>
                </div>
                <p class="text-muted mb-2"><span>{{ item.title }}</span></p>

                <ngb-progressbar [value]="item.progress" class="progress-sm mb-0"
                                 [textType]="item.variant ? item.variant : 'primary'"
                                 [type]="item.variant ? item.variant : 'primary'"/>
            </div>
        </div>
    `,
})
export class StatisticCard2Component {
    @Input() item!: StatisticCard2Type
}
