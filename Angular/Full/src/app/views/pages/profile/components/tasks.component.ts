import {toTitleCase} from '@/app/utils/string-utils';
import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {UiCardComponent} from "@app/components/ui-card.component";
import {NgIcon} from '@ng-icons/core';

type TaskType = {
    title: string;
    dueDays: number;
    status: "in-progress" | "completed" | "on-hold" | "out-dated"
    assignBy: {
        name: string;
        avatar: string;
        email: string;
    },
    startDate: string;
    priority: "high" | "low" | "medium",
    progress: number,
    totalTime: string;
}

@Component({
    selector: 'app-tasks',
    imports: [UiCardComponent, NgIcon, RouterLink],
    template: `
        <app-ui-card title="My Tasks" bodyClass="p-0">
            <div class="table-responsive" card-body>
                <table class="table table-centered table-custom table-sm table-nowrap table-hover mb-0">
                    <thead class="bg-light bg-opacity-25 thead-sm">
                    <tr class="text-uppercase fs-xxs">
                        <th >Task</th>
                        <th >Status</th>
                        <th >Assigned By</th>
                        <th >Start Date</th>
                        <th >Priority</th>
                        <th >Progress</th>
                        <th >Total Time Spent</th>
                        <th style="width: 30px;"></th>
                    </tr>
                    </thead>
                    <tbody>
                        @for (task of tasks; track $index) {
                            <tr>
                                <td>
                                    <h5 class="fs-sm my-1">
                                        <a [routerLink]="[]" class="text-body">{{ task.title }}</a>
                                    </h5>
                                    <span class="text-muted fs-xs">Due in {{ task.dueDays }} days</span>
                                </td>

                                <td>
                              <span class="badge"
                                    [class]="task.status === 'in-progress' ? 'badge-soft-warning':task.status === 'on-hold' ? 'badge-soft-dark': task.status === 'out-dated' ? 'badge-soft-danger': 'badge-soft-success'">
                                {{ toTitleCase(task.status) }}
                              </span>
                                </td>

                                <td>
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="avatar avatar-sm">
                                            <img [src]="task.assignBy.avatar" [alt]="task.assignBy.name"
                                                 class="img-fluid rounded-circle">
                                        </div>
                                        <div>
                                            <h5 class="text-nowrap fs-sm mb-0 lh-base">{{ task.assignBy.name }}</h5>
                                            <p class="text-muted fs-xs mb-0">{{ task.assignBy.email }}</p>
                                        </div>
                                    </div>
                                </td>

                                <td>{{ task.startDate }}</td>

                                <td>
                                  <span class="badge"
                                        [class]="task.priority === 'high' ? 'badge-soft-danger': task.priority === 'medium' ? 'badge-soft-secondary': 'badge-soft-success'">
                                    {{ toTitleCase(task.priority) }}
                                  </span>
                                </td>

                                <td>{{ task.progress }}%</td>
                                <td>{{ task.totalTime }}</td>

                                <td>
                                    <a [routerLink]="[]" class="text-muted fs-xxl">
                                        <ng-icon name="tablerPencil"/>
                                    </a>
                                </td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </app-ui-card>
    `,
    styles: ``
})
export class TasksComponent {
    toTitleCase = toTitleCase
    tasks: TaskType[] = [
        {
            title: 'Admin Dashboard Template - Final Touch',
            dueDays: 2,
            status: 'in-progress',
            assignBy: {
                name: 'Liam Johnson',
                avatar: 'assets/images/users/user-3.jpg',
                email: 'liam@pixelcraft.io',
            },
            startDate: 'Apr 15, 2025',
            priority: 'high',
            progress: 70,
            totalTime: '8h 45min',
        },
        {
            title: 'Tailwind UI Kit Design',
            dueDays: 10,
            status: 'completed',
            assignBy: {
                name: 'Ava Reynolds',
                avatar: 'assets/images/users/user-5.jpg',
                email: 'ava@designwave.co',
            },
            startDate: 'Mar 29, 2025',
            priority: 'low',
            progress: 100,
            totalTime: '34h 10min',
        },
        {
            title: 'React + Next.js Starter Template',
            dueDays: 5,
            status: 'in-progress',
            assignBy: {
                name: 'Noah Carter',
                avatar: 'assets/images/users/user-2.jpg',
                email: 'noah@devspark.com',
            },
            startDate: 'Apr 12, 2025',
            priority: 'medium',
            progress: 45,
            totalTime: '14h 25min',
        },
        {
            title: 'Laravel Template Docs Update',
            dueDays: 4,
            status: 'on-hold',
            assignBy: {
                name: 'Sophia Bennett',
                avatar: 'assets/images/users/user-1.jpg',
                email: 'sophia@codepress.io',
            },
            startDate: 'Apr 10, 2025',
            priority: 'low',
            progress: 30,
            totalTime: '6h 50min',
        },
        {
            title: 'Portfolio Website Redesign',
            dueDays: 12,
            status: 'out-dated',
            assignBy: {
                name: 'Mason Clark',
                avatar: 'assets/images/users/user-6.jpg',
                email: 'mason@webgenius.dev',
            },
            startDate: 'Apr 01, 2025',
            priority: 'high',
            progress: 10,
            totalTime: '11h 30min',
        },
    ];
}
