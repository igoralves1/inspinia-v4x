import {Component, Input} from '@angular/core';
import {StatisticCard1Type} from '@/app/views/widgets/types';
import {NgIcon} from '@ng-icons/core';

@Component({
    selector: 'app-statistic-card1',
    imports: [
        NgIcon
    ],
    template: `
        <div class="card border-0 bg-{{item.variant}} bg-opacity-10 shadow-none mb-0">
            <div class="card-body">
                <h5 title="Number of Orders">{{ item.title }}</h5>
                <div class="d-flex align-items-center gap-2 my-3">
                    <div class="avatar-md flex-shrink-0">
                       <span class="avatar-title text-bg-{{item.variant}} bg-opacity-90 rounded-circle fs-22">
                                  <ng-icon [name]="item.icon" class="d-flex"/>
                        </span>
                    </div>
                    <h3 class="mb-0"> {{ item.count.prefix || '' }}{{ item.count.value }}{{ item.count.suffix || '' }}</h3>
                </div>
                <p class="mb-0">
                    <span class="text-{{item.variant}}"><ng-icon name="tablerPointFill"/></span>
                    <span class="text-nowrap text-muted">{{ item.description }}</span>
                    <span
                        class="float-end"><b> {{ item.totalCount.prefix || '' }}{{ item.totalCount.value }}{{ item.totalCount.suffix || '' }}</b></span>
                </p>
            </div>
        </div>
    `,
    styles: ``
})
export class StatisticCard1Component {
    @Input() item!: StatisticCard1Type;
}
