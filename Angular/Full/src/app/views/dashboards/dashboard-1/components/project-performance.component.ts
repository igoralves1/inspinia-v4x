import {Component} from '@angular/core';
import {UiCardComponent} from '@app/components/ui-card.component';
import {NgIcon} from '@ng-icons/core';
import {NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';

type ProjectStatType = {
    title: string;
    progress: number;
    count: number;
    variant: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger'
}

@Component({
    selector: 'app-project-performance',
    imports: [
        UiCardComponent,
        NgIcon,
        NgbProgressbarModule
    ],
    template: `
        <app-ui-card title="Project Performance" [isCloseable]="true" [isTogglable]="true" [isReloadable]="true">
            <div card-body>
                @for (stat of projectStats; track $index; let first = $first) {
                    <div [class]="first ? '' : 'mt-4'">
                        <div class="d-flex justify-content-between">
                            <h5 class="fs-base mb-2">{{ stat.title }}</h5>
                            <div>
                                <span>+ {{ stat.count }}</span>
                                <span><ng-icon name="tablerCircleFill" class="text-light mx-3 fs-10"></ng-icon>
                                    {{ stat.progress }}%</span>
                            </div>
                        </div>
                        <div class=" mb-1">
                            <ngb-progressbar [type]="stat.variant" class="progress-sm" [value]="stat.progress"/>
                        </div>
                    </div>
                }
            </div>
        </app-ui-card>
    `,
    styles: ``
})

export class ProjectPerformanceComponent {
    projectStats: ProjectStatType[] = [
        {
            title: 'Completed Projects',
            count: 180,
            progress: 54.22,
            variant: 'secondary'
        },
        {
            title: 'Ongoing Projects',
            count: 120,
            progress: 36.15,
            variant: 'info'
        },
        {
            title: 'Pending Approvals',
            count: 32,
            progress: 9.65,
            variant: 'secondary'
        }
    ];
}
