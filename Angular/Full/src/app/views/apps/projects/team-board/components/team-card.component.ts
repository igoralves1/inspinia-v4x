import {Component, Input} from '@angular/core';
import {NgbDropdownModule, NgbProgressbar} from '@ng-bootstrap/ng-bootstrap';
import {NgIcon} from '@ng-icons/core';
import {TeamType} from '@/app/views/apps/projects/team-board/types';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-team-card',
    imports: [NgbDropdownModule, NgIcon, NgbProgressbar, RouterLink],
    template: `
        <div class="card card-h-100">
            <div class="card-header">
                <h4 class="card-title">IT-{{ team.id.toString().padStart(2,'0') }} - {{ team.name }}
                    @if (team.isNew) {
                    <span class="ms-2 badge badge-label text-bg-primary">New</span>
                    }
                </h4>
                <div ngbDropdown class="ms-auto" placement="bottom-end">
                    <a href="javascript:void(0)"  class="text-muted fs-xl drop-arrow-none" ngbDropdownToggle>
                        <ng-icon name="tablerDotsVertical"/>
                    </a>
                    <ul ngbDropdownMenu class="dropdown-menu-end">
                        <li><a ngbDropdownItem href="javascript:void(0)">
                            <ng-icon name="tablerEye" class="me-2"></ng-icon>
                            View</a></li>
                        <li><a ngbDropdownItem href="javascript:void(0)">
                            <ng-icon name="tablerEdit" class="me-2"></ng-icon>
                            Edit</a></li>
                        <li><a ngbDropdownItem class="text-danger" href="javascript:void(0)">
                            <ng-icon name="tablerTrash" class="me-2"/>
                            Remove</a></li>
                    </ul>
                </div>
            </div>
            <div class="card-body d-flex flex-column justify-content-between">

                <p class="mb-2 text-muted">Total {{ team.members.length }} members</p>
                <div class="avatar-group avatar-group-sm mb-3" >
                    @for ( member of team.members; track $index) {
                    <div class="avatar">
                        <img [src]="member" alt="" class="rounded-circle avatar-sm">
                    </div>
                    }
                </div>

                <div class="mb-3">
                    <h5 class="fs-base mb-2">About Team:</h5>
                    <p class="text-muted">{{team.description}}</p>
                </div>

                <div class="row">
                    @for ( stat of team.stats; track $index) {
                    <div class="col-xl-4 col-md-6">
                        <div class="d-flex gap-2 mb-3 mb-xl-0">
                            <div class="avatar-sm flex-shrink-0">
                                   <span class="avatar-title text-bg-light rounded-circle">
                                          <ng-icon [name]="stat.icon" class="fs-lg text-primary"/>
                                    </span>
                            </div>
                            <div>
                                <h6 class="mb-1 text-muted text-uppercase">{{ stat.name }}</h6>
                                <p class="fw-medium mb-0">{{ stat.count?.prefix}}{{ stat.count?.value }}{{ stat.count?.suffix }}</p>
                            </div>
                        </div>
                    </div>
                    }
                </div>

                <div class="my-3">
                    <div class="d-flex align-items-center justify-content-between mb-2">
                        <p class="mb-0 text-muted fw-semibold fs-xxs">{{ team.progressTitle }}</p>
                        <p class="fw-semibold mb-0">{{ team.progress }}%</p>
                    </div>
                        <ngb-progressbar [value]="team.progress" type="primary" class="progress-md"/>
                </div>

                <div class="d-flex justify-content-between align-items-center">
                    <span class="text-muted fs-xs"><ng-icon name="tablerClock" class="me-1"/>Updated {{ team.lastUpdatedTime }}</span>
                    <a [routerLink]="[]" class="btn btn-sm btn-primary rounded-pill">Details</a>
                </div>
            </div>
        </div>
    `,
    styles: ``
})
export class TeamCardComponent {
    @Input() team!: TeamType;
}
