import {Component} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {ProjectType} from '@/app/views/apps/projects/my-projects/types';
import {ProjectCardComponent} from '@/app/views/apps/projects/my-projects/components/project-card.component';
import {ProjectCard2Component} from '@/app/views/apps/projects/my-projects/components/project-card2.component';
import {NgbPagination, NgbPaginationNext, NgbPaginationPrevious} from '@ng-bootstrap/ng-bootstrap';
import {
    LucideActivity,
    LucideAngularModule,
    LucideCalendarClock,
    LucideLayoutGrid,
    LucideList,
    LucideSearch,
    LucideUsers
} from 'lucide-angular';
import {RouterLink} from '@angular/router';
import {NgIcon} from '@ng-icons/core';

@Component({
    selector: 'app-my-projects',
    imports: [
        PageTitleComponent,
        ProjectCardComponent,
        ProjectCard2Component,
        NgbPagination,
        LucideAngularModule,
        RouterLink,
        NgIcon,
        NgbPaginationNext,
        NgbPaginationPrevious
    ],
    templateUrl: './my-projects.component.html',
    styles: ``
})
export class MyProjectsComponent {
    LucideSearch=LucideSearch
    LucideActivity=LucideActivity
    LucideLayoutGrid=LucideLayoutGrid
    LucideList=LucideList
    LucideUsers=LucideUsers
    LucideCalendarClock=LucideCalendarClock

    projects: ProjectType[] = [
        {
            "id": "proj-1",
            "title": "AI Analytics Dashboard",
            "icon": "tablerCodeDots",
            "variant": "success",
            "updatedTime": "5 minutes ago",
            "task": {
                "total": 60,
                "completed": 18,
                "new": 4
            },
            "files": 15,
            "comments": 5,
            "date": "10 Jun, 2025",
            "members": [
                "assets/images/users/user-2.jpg",
                "assets/images/users/user-3.jpg",
                "assets/images/users/user-5.jpg",
                "assets/images/users/user-1.jpg"
            ],
            "status": "in-progress",
            "progress": 65
        },
        {
            "id": "proj-2",
            "title": "Marketing Automation Platform",
            "icon": "tablerSpeakerphone",
            "variant": "danger",
            "updatedTime": "2 hours ago",
            "task": {
                "total": 80,
                "completed": 25
            },
            "files": 22,
            "comments": 12,
            "date": "25 may, 2025",
            "members": [
                "assets/images/users/user-4.jpg",
                "assets/images/users/user-6.jpg",
                "assets/images/users/user-7.jpg",
                "assets/images/users/user-8.jpg"
            ],
            "status": "delayed",
            "progress": 45
        },
        {
            "id": "proj-3",
            "title": "Website Redesign",
            "icon": "tablerWorldWww",
            "variant": "info",
            "updatedTime": "1 day ago",
            "task": {
                "total": 90,
                "completed": 35
            },
            "files": 19,
            "comments": 8,
            "date": "15 May, 2025",
            "members": [
                "assets/images/users/user-9.jpg",
                "assets/images/users/user-3.jpg",
                "assets/images/users/user-5.jpg",
                "assets/images/users/user-1.jpg"
            ],
            "status": "pending-review",
            "progress": 40
        },
        {
            "id": "proj-4",
            "title": "Sales Insight Tool",
            "icon": "tablerChartBar",
            "variant": "secondary",
            "updatedTime": "3 days ago",
            "task": {
                "total": 50,
                "completed": 12,
                "new": 2
            },
            "files": 10,
            "comments": 3,
            "date": "20 May, 2025",
            "members": [
                "assets/images/users/user-2.jpg",
                "assets/images/users/user-4.jpg",
                "assets/images/users/user-5.jpg",
                "assets/images/users/user-7.jpg"
            ],
            "status": "in-progress",
            "progress": 30
        },
        {
            "id": "proj-5",
            "title": "Cyber Security System",
            "icon": "tablerBulb",
            "variant": "warning",
            "updatedTime": "4 hours ago",
            "task": {
                "total": 100,
                "completed": 45
            },
            "files": 35,
            "comments": 14,
            "date": "5 Jul, 2025",
            "members": [
                "assets/images/users/user-1.jpg",
                "assets/images/users/user-4.jpg",
                "assets/images/users/user-5.jpg",
                "assets/images/users/user-8.jpg"
            ],
            "status": "in-progress",
            "progress": 70
        },
        {
            "id": "proj-6",
            "title": "AI Performance Dashboard",
            "icon": "tablerDeviceDesktopAnalytics",
            "variant": "primary",
            "updatedTime": "2 days ago",
            "task": {
                "total": 40,
                "completed": 28,
                "new": 4
            },
            "files": 18,
            "comments": 9,
            "date": "15 Jun, 2025",
            "members": [
                "assets/images/users/user-6.jpg",
                "assets/images/users/user-7.jpg",
                "assets/images/users/user-2.jpg",
                "assets/images/users/user-3.jpg"
            ],
            "status": "pending-review",
            "progress": 65
        },
        {
            "id": "proj-7",
            "title": "Cloud Sync Platform",
            "icon": "tablerCloudCode",
            "variant": "info",
            "updatedTime": "10 mins ago",
            "task": {
                "total": 30,
                "completed": 12
            },
            "files": 8,
            "comments": 3,
            "date": "28 April, 2025",
            "members": [
                "assets/images/users/user-9.jpg",
                "assets/images/users/user-10.jpg",
                "assets/images/users/user-2.jpg"
            ],
            "status": "in-progress",
            "progress": 40
        },
        {
            "id": "proj-8",
            "title": "Data Mining Toolkit",
            "icon": "tablerDatabaseSearch",
            "variant": "danger",
            "updatedTime": "30 mins ago",
            "task": {
                "total": 25,
                "completed": 7,
                "new": 2
            },
            "files": 12,
            "comments": 5,
            "date": "10 May, 2025",
            "members": [
                "assets/images/users/user-4.jpg",
                "assets/images/users/user-6.jpg",
                "assets/images/users/user-9.jpg"
            ],
            "status": "delayed",
            "progress": 28,
        }
    ]


}
