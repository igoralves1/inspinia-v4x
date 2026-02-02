import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgIcon} from '@ng-icons/core';

@Component({
    selector: 'app-table-pagination',
    standalone: true,
    imports: [CommonModule, NgIcon],
    template: `
        <div
            class="row align-items-center text-center text-sm-start"
            [ngClass]="showInfo ? 'justify-content-between' : 'justify-content-end'"
        >
            @if (showInfo) {
            <div class="col-sm">
                <div class="text-muted">
                    Showing <span class="fw-semibold">{{ start }}</span> to
                    <span class="fw-semibold">{{ end }}</span> of
                    <span class="fw-semibold">{{ totalItems }}</span>
                    {{ itemsName }}
                </div>
            </div>
            }

            <div class="col-sm-auto mt-3 mt-sm-0">
                <ul class="pagination pagination-boxed mb-0 justify-content-center">
                    <li class="page-item">
                        <button
                            class="page-link"
                            (click)="previousPage.emit()"
                            [disabled]="!canPreviousPage"
                            aria-label="Previous page"
                            type="button"
                        >
                            <ng-icon name="tablerChevronLeft"/>
                        </button>
                    </li>

                    @for ( page of pages; track $index;let i = $index) {
                    <li
                        class="page-item"
                        [class.active]="pageIndex === i"
                    >
                        <button class="page-link" type="button" (click)="setPageIndex.emit(i)">
                            {{ i + 1 }}
                        </button>
                    </li>
                    }

                    <li class="page-item">
                        <button
                            class="page-link"
                            (click)="nextPage.emit()"
                            [disabled]="!canNextPage"
                            aria-label="Next page"
                            type="button"
                        >
                           <ng-icon name="tablerChevronRight"/>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    `,
})
export class TablePaginationComponent {
    @Input() totalItems!: number;
    @Input() start!: number;
    @Input() end!: number;
    @Input() itemsName: string = 'items';
    @Input() showInfo: boolean = false;

    @Input() canPreviousPage: boolean = false;
    @Input() pageCount!: number;
    @Input() pageIndex!: number;
    @Input() canNextPage: boolean = false;

    @Output() previousPage = new EventEmitter<void>();
    @Output() nextPage = new EventEmitter<void>();
    @Output() setPageIndex = new EventEmitter<number>();

    get pages(): number[] {
        return Array(this.pageCount).fill(0);
    }
}
