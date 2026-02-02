import {Component, OnInit} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {NgIcon} from '@ng-icons/core';
import {LucideAngularModule, LucideBriefcase, LucideCalendarClock, LucideSearch} from 'lucide-angular';
import {TaskItemType} from '@/app/views/apps/projects/kanban-board/types';
import {
    CdkDrag,
    CdkDragDrop,
    CdkDropList,
    CdkDropListGroup,
    moveItemInArray,
    transferArrayItem,
} from '@angular/cdk/drag-drop'
import {TaskItemComponent} from '@/app/views/apps/projects/kanban-board/components/task-item.component';
import {SimplebarAngularModule} from 'simplebar-angular';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-kanban-board',
    imports: [
        PageTitleComponent,
        NgIcon,
        LucideAngularModule,
        CdkDropListGroup, CdkDropList, CdkDrag, TaskItemComponent, SimplebarAngularModule, RouterLink
    ],
    templateUrl: './kanban-board.component.html',
    styles: ``
})
export class KanbanBoardComponent implements OnInit{

    protected readonly LucideSearch = LucideSearch;
    protected readonly LucideBriefcase = LucideBriefcase;
    protected readonly LucideCalendarClock = LucideCalendarClock;

    todoTasks: TaskItemType[] = []
    inprogressTasks: TaskItemType[] = []
    inreviewTasks: TaskItemType[] = []
    completedTasks: TaskItemType[] = []

    ngOnInit(): void {
        this.todoTasks = this.kanbanItems.filter((t) => t.status === 'todo')
        this.inprogressTasks = this.kanbanItems.filter((t) => t.status === 'in-progress')
        this.inreviewTasks = this.kanbanItems.filter((t) => t.status === 'in-review')
        this.completedTasks = this.kanbanItems.filter((t) => t.status === 'done')
    }

    drop(event: CdkDragDrop<TaskItemType[], any, any>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex,
            );
        }
    }

    kanbanItems: TaskItemType[] = [
        {
            id: 1,
            category: {
                name: 'Design',
                variant: 'success',
            },
            title: 'AI Analytics Dashboard',
            users: [
                'assets/images/users/user-2.jpg',
                'assets/images/users/user-3.jpg',
                'assets/images/users/user-5.jpg',
                'assets/images/users/user-1.jpg'
            ],
            date: '25 May, 2025',
            status: 'todo',
            progress: 65
        },
        {
            id: 2,
            category: {
                name: 'Development',
                variant: 'warning',
            },
            title: 'Marketing Landing Page Redesign',
            users: [
                'assets/images/users/user-6.jpg',
                'assets/images/users/user-4.jpg',
                'assets/images/users/user-8.jpg'
            ],
            date: '10 Jun, 2025',
            image: 'assets/images/kanban/img-1.png',
            status: 'todo'
        },
        {
            id: 3,
            category: {
                name: 'UI/UX',
                variant: 'info',
            },
            title: 'E-Commerce Website Redesign',
            users: [
                'assets/images/users/user-4.jpg',
                'assets/images/users/user-6.jpg',
                'assets/images/users/user-7.jpg',
                'assets/images/users/user-8.jpg'
            ],
            date: '28 May, 2025',
            status: 'todo'
        },
        {
            id: 4,
            category: {
                name:'App Development',
                variant: 'warning',
            },
            title: 'Mobile App Redesign',
            users: [
                'assets/images/users/user-1.jpg',
                'assets/images/users/user-2.jpg',
                'assets/images/users/user-3.jpg'
            ],
            date: '30 May, 2025',
            status: 'todo',
            progress: 80
        },
        {
            id: 5,
            category: {
                name: 'Marketing',
                variant: 'purple',
            },
            title: 'CRM System Upgrade',
            users: ['assets/images/users/user-4.jpg'],
            date: '30 May, 2025',
            image: 'assets/images/kanban/img-2.png',
            status: 'todo',
            progress: 45
        },

        {
            id: 6,
            category: {
                name: 'Testing',
                variant: 'info',
            },
            title: 'E-commerce Website QA Testing',
            users: [
                'assets/images/users/user-3.jpg',
                'assets/images/users/user-7.jpg',
                'assets/images/users/user-9.jpg'
            ],
            date: '18 Jun, 2025',
            status: 'in-progress'
        },
        {
            id: 7,
            category: {
                name:'UI/UX',
                variant: 'info',
            },
            title: 'Mobile App Redesign',
            users: [
                'assets/images/users/user-5.jpg',
                'assets/images/users/user-2.jpg',
                'assets/images/users/user-3.jpg',
                'assets/images/users/user-9.jpg'
            ],
            date: '10 Jun, 2025',
            status: 'in-progress'
        },
        {
            id: 8,
            category: {
                name:'UI/UX Design',
                variant: 'success',
            },
            title: 'Website User Experience Overhaul',
            users: [
                'assets/images/users/user-4.jpg',
                'assets/images/users/user-5.jpg',
                'assets/images/users/user-6.jpg'
            ],
            date: '15 June, 2025',
            status: 'in-progress',
            progress: 55
        },
        {
            id: 9,
            category: {
                name: 'Marketing',
                variant: 'danger',
            },
            title: 'Customer Engagement Platform Development',
            users: [
                'assets/images/users/user-5.jpg',
                'assets/images/users/user-6.jpg'
            ],
            date: '10 June, 2025',
            status: 'in-progress'
        },

        {
            id: 10,
            category: {
                name: 'Design',
                variant: 'success',
            },
            title: 'AI Analytics Dashboard',
            users: [
                'assets/images/users/user-2.jpg',
                'assets/images/users/user-3.jpg',
                'assets/images/users/user-5.jpg',
                'assets/images/users/user-1.jpg'
            ],
            date: '25 May, 2025',
            image: 'assets/images/kanban/img-3.png',
            status: 'in-review',
            progress: 65
        },
        {
            id: 11,
            category: {
                name: 'Development',
                variant: 'warning',
            },
            title: 'Marketing Landing Page Redesign',
            users: [
                'assets/images/users/user-6.jpg',
                'assets/images/users/user-4.jpg',
                'assets/images/users/user-8.jpg'
            ],
            date: '10 Jun, 2025',
            status: 'in-review'
        },
        {
            id: 12,
            category: {
                name:'UI/UX',
                variant: 'info',
            },
            title: 'E-Commerce Website Redesign',
            users: [
                'assets/images/users/user-4.jpg',
                'assets/images/users/user-6.jpg',
                'assets/images/users/user-7.jpg',
                'assets/images/users/user-8.jpg'
            ],
            date: '28 May, 2025',
            status: 'in-review'
        },

        // Done
        {
            id: 13,
            category: {
                name: 'Testing',
                variant: 'info',
            },
            title: 'E-commerce Website QA Testing',
            users: [
                'assets/images/users/user-3.jpg',
                'assets/images/users/user-7.jpg',
                'assets/images/users/user-9.jpg'
            ],
            date: '18 Jun, 2025',
            status: 'done'
        },
        {
            id: 14,
            category: {
                name:'UI/UX',
                variant: 'info',
            },
            title: 'Mobile App Redesign',
            users: [
                'assets/images/users/user-5.jpg',
                'assets/images/users/user-2.jpg',
                'assets/images/users/user-3.jpg',
                'assets/images/users/user-9.jpg'
            ],
            date: '10 Jun, 2025',
            image: 'assets/images/kanban/img-4.png',
            status: 'done'
        }
    ];

}
