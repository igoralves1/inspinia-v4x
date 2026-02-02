import {Component, Input} from '@angular/core';
import {NgbDropdownModule, NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';
import {NgIcon} from '@ng-icons/core';
import {RouterLink} from '@angular/router';
import {ProjectType} from '@/app/views/apps/projects/my-projects/types';
import {toTitleCase} from '@/app/utils/string-utils';

@Component({
    selector: 'app-project-card2',
    imports: [NgbDropdownModule, NgIcon, RouterLink,NgbProgressbarModule],
    template: `
        <div class="card">
            <div class="card-header bg-light-subtle border-light p-3">
                <div class="avatar-xl me-3">
                     <span class="avatar-title text-bg-light rounded-circle">
                         <ng-icon [name]="project.icon" class="fs-24 text-{{project.variant}}"/>
                      </span>
                </div>
                <div>
                    <h5 class="mb-1 d-flex align-items-center">
                        <a routerLink="/project-details" class="link-reset">{{ project.title }}</a>
                    </h5>
                    <p class="text-muted mb-2 fs-xxs">Updated {{ project.updatedTime }}</p>
                    <span
                        class="badge  {{getStatusVariant(project.status)}} fs-xxs badge-label">{{ toTitleCase(project.status) }}</span>
                </div>
                <div class="ms-auto">
                    <div ngbDropdown>
                        <a href="javascript:void(0)" class="btn btn-icon btn-ghost-light text-muted drop-arrow-none"
                           ngbDropdownToggle>
                            <ng-icon name="tablerDotsVertical" class="fs-xl"/>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end" ngbDropdownMenu>
                            <li><a ngbDropdownItem href="javascript:void(0)">
                                <ng-icon name="tablerShare" class="me-2"/>
                                Share</a></li>
                            <li><a ngbDropdownItem href="javascript:void(0)">
                                <ng-icon name="tablerEdit" class="me-2"/>
                                Edit</a></li>
                            <li><a ngbDropdownItem href="javascript:void(0)">
                                <ng-icon name="tablerBan" class="me-2"/>
                                Block</a></li>
                            <li><a class="text-danger" ngbDropdownItem href="javascript:void(0)">
                                <ng-icon
                                    name="tablerTrash" class="me-2"/>
                                Delete</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="d-flex align-items-center gap-2 mb-3">
                            <ng-icon name="tablerListCheck" class="text-muted fs-lg"></ng-icon>
                            <h5 class="fs-base mb-0 fw-medium">{{ project.task.completed }}/{{ project.task.total }}
                                @if (project.task.new) {
                                    <span class="badge bg-secondary">+{{ project.task.new }} New</span>
                                }
                            </h5>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="d-flex align-items-center gap-2 mb-3">
                            <ng-icon name="tablerPaperclip" class="text-muted fs-lg"></ng-icon>
                            <h5 class="fs-base mb-0 fw-medium">{{ project.files }} Files</h5>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-6">
                        <div class="d-flex align-items-center gap-2 mb-3">
                            <ng-icon name="tablerMessage2" class="text-muted fs-lg"></ng-icon>
                            <h5 class="fs-base mb-0 fw-medium">{{ project.comments }} Comments</h5>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="d-flex align-items-center gap-2 mb-3">
                            <ng-icon name="tablerCalendarTime" class="text-muted fs-lg"></ng-icon>
                            <h5 class="fs-base mb-0 fw-medium">{{ project.date }}</h5>
                        </div>
                    </div>
                </div>

                <p class="my-2 text-muted fw-semibold fs-xxs">Team Members:</p>
                <div class="avatar-group avatar-group-xs mb-3">
                    @for ( member of project.members ; track $index;) {
                    <div class="avatar">
                        <img [src]="member" alt="" class="rounded-circle avatar-xs">
                    </div>
                    }

                </div>

                <div class="mt-3">
                    <div class="d-flex align-items-center justify-content-between mb-2">
                        <p class="mb-0 text-muted fw-semibold fs-xxs">Progress</p>
                        <p class="fw-semibold mb-0">{{ project.progress }}%</p>
                    </div>
                    <ngb-progressbar [type]="project.variant" [value]="project.progress" style="height: 5px;"/>
                </div>
            </div>
        </div>
    `,
    styles: ``
})
export class ProjectCard2Component {
    @Input() project!: ProjectType;

    getStatusVariant(status: string): string {
        switch (status) {
            case 'in-progress':
                return 'badge-soft-success';
            case 'pending-review':
                return 'badge-soft-warning';
            case 'delayed':
                return 'badge-soft-danger';
            default:
                return 'badge-soft-secondary';
        }
    }

    protected readonly toTitleCase = toTitleCase;
}
