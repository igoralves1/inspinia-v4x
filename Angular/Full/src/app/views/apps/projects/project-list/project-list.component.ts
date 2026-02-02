import {Component, OnInit} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {
    LucideActivity,
    LucideAngularModule,
    LucideCalendarClock,
    LucideLayoutGrid,
    LucideList,
    LucideSearch
} from 'lucide-angular';
import {RouterLink} from '@angular/router';
import {NgIcon} from '@ng-icons/core';
import {toTitleCase} from '@/app/utils/string-utils';
import {Observable} from 'rxjs';
import {TableService} from '@core/services/table.service';
import {FormsModule} from '@angular/forms';
import {NgbPagination, NgbPaginationNext, NgbPaginationPrevious, NgbProgressbar} from '@ng-bootstrap/ng-bootstrap';
import {NgbdSortableHeader} from '@core/directive/sortable.directive';
import {AsyncPipe} from '@angular/common';

type SortDirection = '' | 'asc' | 'desc'
type ProjectType = {
    id: number,
    icon: string;
    title: string,
    updatedTime: string,
    task: {
        total: number,
        completed: number,
        new?: number
    },
    members: string[],
    progress: number,
    attachments: number,
    comments: number,
    dueDate: string,
    status: "in-progress" | "completed" | "overdue" | "in-review" | "on-hold"
    variant: string;
    selected?: boolean;
}

@Component({
    selector: 'app-project-list',
    imports: [
        PageTitleComponent,
        LucideAngularModule,
        RouterLink,
        NgIcon,
        FormsModule,
        NgbPagination,
        NgbProgressbar,
        NgbdSortableHeader,
        NgbPaginationNext,
        NgbPaginationPrevious,
        AsyncPipe
    ],
    providers: [TableService],
    templateUrl: './project-list.component.html',
    styles: ``
})
export class ProjectListComponent implements OnInit {
    filterStatus = 'All'
    selectAll = false;

    protected readonly LucideSearch = LucideSearch;
    protected readonly LucideLayoutGrid = LucideLayoutGrid;
    protected readonly LucideList = LucideList;
    protected readonly LucideCalendarClock = LucideCalendarClock;
    protected readonly LucideActivity = LucideActivity;

    projects$: Observable<ProjectType[]>
    total$: Observable<number>;

    constructor(public tableService: TableService<ProjectType>) {
        this.projects$ = this.tableService.items$
        this.total$ = this.tableService.total$
    }

    ngOnInit(): void {
        this.tableService.setItems(this.projects, 8)
    }

    toggleAllSelection() {
        this.tableService.setAllSelection(this.selectAll);
    }

    toggleSingleSelection() {
        this.tableService.items$.subscribe(items => {
            this.selectAll = items.every((item: any) => item.selected);
        }).unsubscribe();
    }

    deleteSelected() {
        this.tableService.deleteSelectedItems();
        this.selectAll = false;
    }

    get hasSelection(): boolean {
        return this.tableService.hasSelectedItems();
    }

    projects: ProjectType[] = [
        {
            id: 1,
            icon: 'tablerCodeDots',
            title: 'AI Analytics Dashboard',
            updatedTime: '5 minutes ago',
            task: {total: 60, completed: 18, new: 4},
            members: [
                'assets/images/users/user-2.jpg',
                'assets/images/users/user-3.jpg',
                'assets/images/users/user-5.jpg',
                'assets/images/users/user-1.jpg',
            ],
            progress: 65,
            attachments: 15,
            comments: 5,
            dueDate: '10 May, 2025',
            status: 'in-progress',
            variant: 'success',
        },
        {
            id: 2,
            icon: 'tablerDeviceLaptop',
            title: 'E-commerce Platform',
            updatedTime: '12 minutes ago',
            task: {total: 40, completed: 10},
            members: [
                'assets/images/users/user-6.jpg',
                'assets/images/users/user-8.jpg',
                'assets/images/users/user-7.jpg',
            ],
            progress: 25,
            attachments: 8,
            comments: 3,
            dueDate: '12 May, 2025',
            status: 'in-review',
            variant: 'warning',
        },
        {
            id: 3,
            icon: 'tablerBrush',
            title: 'UI Kit Design',
            updatedTime: '30 minutes ago',
            task: {total: 40, completed: 20},
            members: [
                'assets/images/users/user-4.jpg'
            ],
            progress: 50,
            attachments: 12,
            comments: 7,
            dueDate: '5 May, 2025',
            status: 'overdue',
            variant: 'danger',
        },
        {
            id: 4,
            icon: 'tablerWorld',
            title: 'Website Redesign',
            updatedTime: '1 hour ago',
            task: {total: 30, completed: 15, new: 1},
            members: [
                'assets/images/users/user-2.jpg',
                'assets/images/users/user-7.jpg',
                'assets/images/users/user-9.jpg'
            ],
            progress: 50,
            attachments: 6,
            comments: 2,
            dueDate: '18 May, 2025',
            status: 'in-review',
            variant: 'info',
        },
        {
            id: 5,
            icon: 'tablerChartBar',
            title: 'Marketing Report',
            updatedTime: '2 hours ago',
            task: {total: 40, completed: 40},
            members: [
                'assets/images/users/user-5.jpg',
                'assets/images/users/user-10.jpg',
                'assets/images/users/user-8.jpg',
                'assets/images/users/user-2.jpg'
            ],
            progress: 100,
            attachments: 20,
            comments: 10,
            dueDate: '1 May, 2025',
            status: 'completed',
            variant: 'primary',
        },
        {
            id: 6,
            icon: 'tablerPresentation',
            title: 'Sales Pitch Deck',
            updatedTime: '45 minutes ago',
            task: {total: 12, completed: 9, new: 1},
            members: [
                'assets/images/users/user-9.jpg',
                'assets/images/users/user-10.jpg'
            ],
            progress: 75,
            attachments: 5,
            comments: 1,
            dueDate: '9 May, 2025',
            status: 'in-review',
            variant: 'info',
        },
        {
            id: 7,
            icon: 'tablerBrandFigma',
            title: 'Mobile UI Mockups',
            updatedTime: 'yesterday',
            task: {total: 10, completed: 6, new: 3},
            members: [
                'assets/images/users/user-7.jpg',
                'assets/images/users/user-4.jpg',
                'assets/images/users/user-5.jpg',
                'assets/images/users/user-1.jpg'
            ],
            progress: 60,
            attachments: 7,
            comments: 0,
            dueDate: '6 May, 2025',
            status: 'in-progress',
            variant: 'warning',
        },
        {
            id: 8,
            icon: 'tablerServer',
            title: 'Server Maintenance',
            updatedTime: '3 days ago',
            task: {total: 3, completed: 3},
            members: [
                'assets/images/users/user-6.jpg',
                'assets/images/users/user-5.jpg',
                'assets/images/users/user-9.jpg',
                'assets/images/users/user-10.jpg'
            ],
            progress: 100,
            attachments: 2,
            comments: 1,
            dueDate: '3 May, 2025',
            status: 'completed',
            variant: 'success',
        },
        {
            id: 9,
            icon: 'tablerShieldCheck',
            title: 'Security Audit',
            updatedTime: 'last week',
            task: {total: 10, completed: 5, new: 1},
            members: [
                'assets/images/users/user-7.jpg',
                'assets/images/users/user-9.jpg'
            ],
            progress: 50,
            attachments: 6,
            comments: 4,
            dueDate: '2 May, 2025',
            status: 'on-hold',
            variant: 'dark',
        },
        {
            id: 10,
            icon: 'tablerPuzzle',
            title: 'Plugin Development',
            updatedTime: '4 days ago',
            task: {total: 6, completed: 2, new: 1},
            members: [
                'assets/images/users/user-3.jpg'
            ],
            progress: 33,
            attachments: 4,
            comments: 2,
            dueDate: '7 May, 2025',
            status: 'in-progress',
            variant: 'warning',
        }
    ];

    getStatusVariant(status: string): string {
        switch (status) {
            case 'in-progress':
                return 'warning';
            case 'in-review':
                return 'info';
            case 'overdue':
                return 'danger';
            case 'on-hold':
                return 'dark';
            default:
                return 'success';
        }
    }

    protected readonly toTitleCase = toTitleCase;
}
