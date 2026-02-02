import {Component} from '@angular/core';
import {toTitleCase} from '@/app/utils/string-utils';
import {NgIcon} from '@ng-icons/core';
type TaskType = {
    id: number;
    title: string;
    name: string;
    avatar: string;
    time: string;
    tasks: {
        total: number,
        completed: number,
    },
    comments: number;
    status: "completed" | "delayed" | "pending" | "in-progress" | "review" | "planned";
}

@Component({
    selector: 'app-task-list',
    imports: [
        NgIcon
    ],
    template: `
        @for ( task of tasks; track $index) {
        <div class="card mb-1">
            <div class="card-body p-2">
                <div class="row g-3 align-items-center justify-content-between">
                    <div class="col-md-6">
                        <div class="d-flex align-items-center gap-2">
                            <input type="checkbox" class="form-check-input rounded-circle mt-0 fs-xl"
                                   [id]="'task' + task.id">
                            <a href="#" class="link-reset fw-medium">{{ task.title }}</a>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex align-items-center gap-3 justify-content-md-end">
                            <div class="d-flex align-items-center gap-1">
                                <div class="avatar avatar-xs">
                                    <img [src]="task.avatar" [alt]="task.name" class="img-fluid rounded-circle">
                                </div>
                                <div>
                                    <h5 class="text-nowrap mb-0 lh-base">
                                        <a href="pages-profile.html" class="link-reset">{{ task.name }}</a>
                                    </h5>
                                </div>
                            </div>
                            <div class="flex-shrink-0">
                              <span class="badge badge-label text-bg-{{getStatusVariant(task.status)}}">
                                  {{ toTitleCase(task.status) }}
                              </span>
                            </div>
                            <ul class="list-inline fs-base text-end flex-shrink-0 mb-0">
                                <li class="list-inline-item">
                                    <div class="d-flex align-items-center gap-1">
                                        <ng-icon name="tablerCalendar" class="text-muted fs-lg me-1"></ng-icon>
                                        <span class="fw-semibold">{{ task.time }}</span>
                                    </div>
                                </li>
                                <li class="list-inline-item ms-1">
                                    <div class="d-flex align-items-center gap-1">
                                        <ng-icon name="tablerListDetails" class="text-muted fs-lg me-1"></ng-icon>
                                        <span class="fw-medium">{{ task.tasks.completed }}/{{ task.tasks.total }}</span>
                                    </div>
                                </li>
                                <li class="list-inline-item ms-1">
                                    <div class="d-flex align-items-center gap-1">
                                        <ng-icon name="tablerMessage" class="text-muted fs-lg me-1"></ng-icon>
                                        <span class="fw-medium">{{ task.comments }}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        }
    `,
    styles: ``
})
export class TaskListComponent {
    protected readonly toTitleCase = toTitleCase;

    getStatusVariant(status: string): string {
        switch (status) {
            case 'in-progress':
                return 'warning';
            case 'review':
                return 'info';
            case 'delayed':
                return 'danger';
            case 'pending':
                return 'primary';
            case 'planned':
                return 'secondary';
            default:
                return 'success';
        }
    }
    tasks: TaskType[] = [
        {
            id: 1,
            title: "Finalize monthly performance report",
            name: "Liam James",
            avatar: "assets/images/users/user-2.jpg",
            time: "Yesterday",
            tasks: {completed: 7, total: 7},
            comments: 12,
            status: "completed"
        },
        {
            id: 2,
            title: "Design wireframes for new onboarding flow",
            name: "Sophia Lee",
            avatar: "assets/images/users/user-4.jpg",
            time: "Tomorrow",
            tasks: {completed: 2, total: 5},
            comments: 7,
            status: "delayed"
        },
        {
            id: 3,
            title: "Update customer segmentation dashboard",
            name: "Noah Carter",
            avatar: "assets/images/users/user-5.jpg",
            time: "Friday",
            tasks: {completed: 0, total: 4},
            comments: 3,
            status: "pending"
        },
        {
            id: 4,
            title: "Conduct competitor analysis report",
            name: "Emily Davis",
            avatar: "assets/images/users/user-6.jpg",
            time: "Next Week",
            tasks: {completed: 1, total: 6},
            comments: 5,
            status: "in-progress"
        },
        {
            id: 5,
            title: "Implement API for mobile integration",
            name: "Lucas White",
            avatar: "assets/images/users/user-7.jpg",
            time: "Today",
            tasks: {completed: 6, total: 6},
            comments: 10,
            status: "review"
        },
        {
            id: 6,
            title: "QA testing for billing module",
            name: "Olivia Martin",
            avatar: "assets/images/users/user-8.jpg",
            time: "Monday",
            tasks: {completed: 4, total: 8},
            comments: 14,
            status: "in-progress"
        },
        {
            id: 7,
            title: "Schedule product roadmap presentation",
            name: "Ethan Moore",
            avatar: "assets/images/users/user-9.jpg",
            time: "Next Month",
            tasks: {completed: 0, total: 1},
            comments: 0,
            status: "planned"
        }
    ];

}
