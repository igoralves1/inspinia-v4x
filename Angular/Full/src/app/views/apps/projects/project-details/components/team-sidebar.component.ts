import {Component} from '@angular/core';
import {NgIcon} from '@ng-icons/core';
import {RouterLink} from '@angular/router';
import {LucideAngularModule, LucideCalendarClock} from 'lucide-angular';

type TeamMemberType = {
    avatar: string;
    name: string;
    role: string;
    url: string;
}

type FileType = {
    icon: string;
    name: string;
    size: string;
}

@Component({
    selector: 'app-team-sidebar',
    imports: [NgIcon, RouterLink, LucideAngularModule],
    template: `
        <div class="card card-h-100 rounded-0 rounded-end">
            <div class="card-body p-0">
                <div class="p-3 border-bottom border-dashed">
                    <h5 class="mb-2">Status</h5>
                    <div class="app-search">
                        <select class="form-select form-control my-1 my-md-0">
                            <option>Status</option>
                            <option selected value="On Track">On Track</option>
                            <option value="Delayed">Delayed</option>
                            <option value="At Risk">At Risk</option>
                            <option value="Completed">Completed</option>
                        </select>
                        <lucide-angular [img]="LucideCalendarClock" class="app-search-icon text-muted"/>
                    </div>
                </div>

                <div class="p-3 border-bottom border-dashed">
                    <div class="d-flex mb-3 justify-content-between align-items-center">
                        <h5 class="mb-0">Team Members:</h5>
                        <a href="javascript: void(0);" class="btn btn-light btn-sm btn-icon rounded-circle">
                            <ng-icon
                                name="tablerPlus"/>
                        </a>
                    </div>

                    @for ( member of teamMembers; track $index;let last = $last) {
                    <div
                         class="d-flex justify-content-between align-items-center" [class.pb-2]="!last">
                        <div class="d-flex align-items-center py-1 gap-2">
                            <div class="avatar avatar-sm">
                                <img [src]="member.avatar" [alt]="member.name" class="img-fluid rounded-circle"/>
                            </div>
                            <div>
                                <h5 class="text-nowrap mb-0 lh-base">
                                    <a [routerLink]="member.url" class="link-reset">{{ member.name }}</a>
                                </h5>
                                <p class="text-muted fs-xxs mb-0">{{ member.role }}</p>
                            </div>
                        </div>
                        <div>
                            <a [routerLink]="[]" class="btn btn-sm btn-icon btn-default" title="Message">
                                <ng-icon name="tablerMessage" class="fs-lg"/>
                            </a>
                        </div>
                    </div>
                    }
                </div>

                <div class="px-3 pt-3 border-bottom border-dashed">
                    <div class="d-flex mb-3 justify-content-between align-items-center">
                        <h5 class="mb-0">Files:</h5>
                        <a href="javascript: void(0);" class="btn btn-light btn-sm btn-icon rounded-circle"><ng-icon
                            name="tablerPlus"/></a>
                    </div>

                    @for ( file of files ; track $index) {
                    <div  class="d-flex justify-content-between align-items-center pb-2">
                        <div class="d-flex align-items-center py-1 gap-2">
                            <div class="flex-shrink-0 avatar-md bg-light bg-opacity-50 text-muted rounded-2 d-flex justify-content-center align-items-center">
                                <ng-icon [name]="file.icon" class="fs-xl avatar-title"/>
                            </div>
                            <div class="flex-grow-1">
                                <h5 class="mb-1 fs-base">
                                    <a [routerLink]="[]" class="link-reset">{{ file.name }}</a>
                                </h5>
                                <p class="text-muted mb-0 fs-xs">{{ file.size }}</p>
                            </div>
                        </div>
                        <div>
                            <a [routerLink]="[]" class="btn btn-sm btn-icon btn-default" title="Download">
                                <ng-icon name="tablerDownload" class="fs-lg"/>
                            </a>
                        </div>
                    </div>
                    }

                    <div class="d-flex align-items-center justify-content-center gap-2 p-3">
                        <strong>Loading...</strong>
                        <div class="spinner-border spinner-border-sm text-danger" role="status"
                             aria-hidden="true"></div>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: ``
})

export class TeamSidebarComponent {
    teamMembers: TeamMemberType[] = [
        {
            avatar: "assets/images/users/user-3.jpg",
            name: "Ava Brooks",
            role: "UI/UX Designer",
            url: "/pages/profile"
        },
        {
            avatar: "assets/images/users/user-4.jpg",
            name: "Liam Carter",
            role: "Frontend Developer",
            url: "/pages/profile"
        },
        {
            avatar: "assets/images/users/user-5.jpg",
            name: "Sophia Lee",
            role: "Project Manager",
            url: "/pages/profile"
        },
        {
            avatar: "assets/images/users/user-6.jpg",
            name: "Noah Kim",
            role: "Backend Developer",
            url: "/pages/profile"
        },
        {
            avatar: "assets/images/users/user-7.jpg",
            name: "Emma Watson",
            role: "QA Engineer",
            url: "/pages/profile"
        },
        {
            avatar: "assets/images/users/user-8.jpg",
            name: "James Nolan",
            role: "DevOps Engineer",
            url: "/pages/profile"
        },
        {
            avatar: "assets/images/users/user-9.jpg",
            name: "Olivia Reed",
            role: "Product Owner",
            url: "/pages/profile"
        },
        {
            avatar: "assets/images/users/user-10.jpg",
            name: "Daniel Craig",
            role: "Data Scientist",
            url: "/pages/profile"
        }
    ];

    files: FileType[] = [
        {
            icon: 'tablerFile-text',
            name: 'Project-Brief.pdf',
            size: '2.1MB',
        },
        {
            icon: 'tablerFile-music',
            name: 'Team-Intro.mp3',
            size: '5.6MB',
        },
        {
            icon: 'tablerFileZip',
            name: 'UI-Kit.zip',
            size: '42MB',
        },
        {
            icon: 'tablerFileTypePng',
            name: 'Brand-Logo.png',
            size: '1.2MB',
        },
        {
            icon: 'tablerVideo',
            name: 'Promo-Video.mp4',
            size: '78MB',
        },
        {
            icon: 'tablerFileCode',
            name: 'dashboard-config.json',
            size: '524KB',
        }
    ];
    protected readonly LucideCalendarClock = LucideCalendarClock;
}
