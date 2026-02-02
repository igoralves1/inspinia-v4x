import {Component, Input} from '@angular/core';
import {TaskItemType} from '@/app/views/apps/projects/kanban-board/types';
import {NgIcon} from '@ng-icons/core';
import {NgbDropdownModule, NgbProgressbar} from '@ng-bootstrap/ng-bootstrap';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-task-item',
    imports: [
        NgIcon,
        NgbDropdownModule,
        RouterLink,
        NgbProgressbar,
    ],
    template: `
        <div class="card shadow border-light mb-2">
            <div class="card-body">
                <div class="d-flex align-items-center mb-2">
                    <span
                        class="badge p-1 badge-soft-{{item.category.variant}} d-flex align-items-center justify-content-center"><ng-icon
                        name="tablerPointFill"/>
                        {{ item.category.name }}</span>
                    <div class="ms-auto">
                        <div ngbDropdown>
                            <a href="javascript:void(0)" ngbDropdownToggle
                               class="btn btn-icon btn-sm  drop-arrow-none btn-ghost-light text-muted">
                                <ng-icon name="tablerDotsVertical" class="fs-xl"/>
                            </a>
                            <ul ngbDropdownMenu class="dropdown-menu-end">
                                <li><a ngbDropdownItem href="javascript:void(0)">
                                    <ng-icon name="tablerShare" class="me-2"/>
                                    Share</a></li>
                                <li><a ngbDropdownItem href="javascript:void(0)">
                                    <ng-icon name="tablerEdit" class="me-2"/>
                                    Edit</a></li>
                                <li><a ngbDropdownItem href="javascript:void(0)">
                                    <ng-icon name="tablerBan" class="me-2"/>
                                    Block</a></li>
                                <li><a ngbDropdownItem class="text-danger" href="javascript:void(0)">
                                    <ng-icon
                                        name="tablerTrash" class="me-2"/>
                                    Delete</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h5 class="mb-3">
                    <a [routerLink]="[]" class="link-reset">{{ item.title }}</a>
                </h5>

                @if (item.image) {
                    <div class="mb-3">
                        <img [src]="item.image" alt="" class="rounded img-fluid">
                    </div>
                }

                <div class="d-flex justify-content-between">
                    <div class="avatar-group avatar-group-xs">
                        @for (user of item.users; track i; let i = $index) {
                            <div class="avatar">
                                <img [src]="user" alt="" class="rounded-circle avatar-xs">
                            </div>
                        }
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <ng-icon name="tablerCalendarTime" class="text-muted fs-lg"/>
                        <h5 class="fs-base mb-0 fw-medium">{{ item.date }}</h5>
                    </div>
                </div>

                @if (item.progress) {
                    <div class="mt-3">
                        <div class="d-flex align-items-center justify-content-between mb-2">
                            <p class="mb-0 text-muted fw-semibold fs-xxs">Progress</p>
                            <p class="fw-semibold mb-0">{{ item.progress }}%</p>
                        </div>
                        <ngb-progressbar [value]="item.progress" [type]="item.category.variant" style="height: 5px;"/>
                    </div>
                }

            </div>
        </div>
    `,
    styles: ``
})
export class TaskItemComponent {
    @Input() item!: TaskItemType;
}
