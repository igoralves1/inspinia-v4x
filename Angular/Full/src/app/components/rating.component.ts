import {Component, Input, TemplateRef} from '@angular/core';
import {NgbRating, NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgIcon} from '@ng-icons/core';

@Component({
    selector: 'app-rating',
    imports: [ NgIcon, NgbRating],
    providers: [NgbRatingConfig],
    template: `
        <ng-template #defaultStar let-fill="fill">
            @switch (true) {
                @case (fill >= 100) {
                    <ng-icon
                        [name]="icon + 'Fill'"
                        [size]="size"
                        class="text-warning">
                    </ng-icon>
                }
                @case (fill >= 45 && fill < 100) {
                    <ng-icon
                        [name]="icon + 'HalfFill'"
                        [size]="size"
                        class="text-warning">
                    </ng-icon>
                }
                @default {
                    <ng-icon
                        [name]="icon"
                        [size]="size"
                        class="text-warning">
                    </ng-icon>
                }

            }

        </ng-template>

        <ngb-rating
            [(rate)]="rate"
            [max]="max"
            class="d-flex align-items-center gap-1"
            [readonly]="readonly"
            [resettable]="resettable"
            [disabled]="disabled"
            [tabindex]="tabindex"
            [starTemplate]="starTemplate || defaultStar"/>
    `
})
export class RatingComponent {
    @Input() icon: string = 'tablerStar';
    @Input() size: string = '13';

    // ngb-rating inputs
    @Input() rate!: number;
    @Input() max: number = 5;
    @Input() readonly: boolean = true;
    @Input() resettable: boolean = false;
    @Input() starTemplate?: TemplateRef<any>;
    @Input() disabled: boolean = false;
    @Input() tabindex: number = 0;
}
