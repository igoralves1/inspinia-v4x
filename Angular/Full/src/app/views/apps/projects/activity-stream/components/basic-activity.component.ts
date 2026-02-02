import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';

type ActivityType ={
    status: string;
    variant: string;
    time: string;
    name: string;
    avatar: string;
    action: string;
}

@Component({
  selector: 'app-basic-activity',
    imports: [ RouterLink],
  template: `
      <div class="card card-h-100">
          <div class="card-header">
              <h4 class="card-title">Basic Activity Stream</h4>
          </div>

          <div class="card-body">
              @for (activity of activities; track i;let i = $index; ) {
              <div class="py-1 d-flex gap-3 align-items-center">
                   <span class="badge badge-label" [class]="'text-bg-' + activity.variant">
                      {{ activity.status }}
                   </span>
                  <span class="text-muted">{{ activity.time }}</span>
                  <a routerLink="/pages/profile" class="link-reset fw-semibold">
                      <img [src]="activity.avatar" [alt]="activity.name" class="rounded-circle avatar-xxs"/>
                      {{ activity.name }}
                  </a>
                  {{ activity.action }}
              </div>
              }
          </div>
      </div>
  `,
  styles: ``
})
export class BasicActivityComponent {
    activities: ActivityType[] = [
        {
            status: 'Add', variant: 'info',
            time: 'Today at 08:05:33 am',
            name: 'Olivia Lee',
            avatar: 'assets/images/users/user-1.jpg',
            action: 'Added a new design asset',
        },
        {
            status: 'Update', variant: 'success',
            time: 'Today at 08:48:20 am',
            name: 'Ethan Wong',
            avatar: 'assets/images/users/user-2.jpg',
            action: 'Updated project timeline',
        },
        {
            status: 'Upload', variant: 'primary',
            time: 'Today at 09:12:45 am',
            name: 'Grace Kim',
            avatar: 'assets/images/users/user-3.jpg',
            action: 'Uploaded design guidelines PDF',
        },
        {
            status: 'Remove', variant: 'danger',
            time: 'Today at 09:55:02 am',
            name: 'Noah Smith',
            avatar: 'assets/images/users/user-4.jpg',
            action: 'Removed outdated document',
        },
        {
            status: 'Comment', variant: 'warning',
            time: 'Today at 10:34:10 am',
            name: 'Mia Johnson',
            avatar: 'assets/images/users/user-5.jpg',
            action: 'Commented on new task board',
        },
        {
            status: 'Approve', variant: 'success',
            time: 'Today at 11:03:22 am',
            name: 'Liam Davis',
            avatar: 'assets/images/users/user-6.jpg',
            action: 'Approved budget request',
        },
        {
            status: 'Add', variant: 'primary',
            time: 'Today at 11:40:07 am',
            name: 'Sophia Martinez',
            avatar: 'assets/images/users/user-7.jpg',
            action: 'Added new member to team',
        },
        {
            status: 'Edit', variant: 'warning',
            time: 'Today at 12:18:33 pm',
            name: 'Jack Wilson',
            avatar: 'assets/images/users/user-8.jpg',
            action: 'Edited task deadline',
        },
        {
            status: 'Reject', variant: 'danger',
            time: 'Today at 01:05:11 pm',
            name: 'Ella Moore',
            avatar: 'assets/images/users/user-9.jpg',
            action: 'Rejected draft submission',
        },
        {
            status: 'Share', variant: 'info',
            time: 'Today at 01:43:29 pm',
            name: 'Benjamin Taylor',
            avatar: 'assets/images/users/user-10.jpg',
            action: 'Shared roadmap document',
        },
        {
            status: 'Upload', variant: 'success',
            time: 'Today at 02:15:50 pm',
            name: 'Olivia Lee',
            avatar: 'assets/images/users/user-1.jpg',
            action: 'Uploaded Q2 reports',
        },
        {
            status: 'Edit', variant: 'warning',
            time: 'Today at 02:52:06 pm',
            name: 'Ethan Wong',
            avatar: 'assets/images/users/user-2.jpg',
            action: 'Edited team description',
        },
        {
            status: 'Delete', variant: 'danger',
            time: 'Today at 03:20:44 pm',
            name: 'Grace Kim',
            avatar: 'assets/images/users/user-3.jpg',
            action: 'Deleted obsolete files',
        },
        {
            status: 'Approve', variant: 'success',
            time: 'Today at 03:58:00 pm',
            name: 'Noah Smith',
            avatar: 'assets/images/users/user-4.jpg',
            action: 'Approved new sprint plan',
        },
        {
            status: 'Add', variant: 'primary',
            time: 'Today at 04:36:18 pm',
            name: 'Mia Johnson',
            avatar: 'assets/images/users/user-5.jpg',
            action: 'Added new project brief',
        },
        {
            status: 'Comment', variant: 'warning',
            time: 'Today at 05:14:03 pm',
            name: 'Liam Davis',
            avatar: 'assets/images/users/user-6.jpg',
            action: 'Left a note on timeline slide',
        },
        {
            status: 'Share', variant: 'info',
            time: 'Today at 05:49:57 pm',
            name: 'Sophia Martinez',
            avatar: 'assets/images/users/user-7.jpg',
            action: 'Shared access to internal repo',
        },
        {
            status: 'Remove', variant: 'danger',
            time: 'Today at 06:30:41 pm',
            name: 'Jack Wilson',
            avatar: 'assets/images/users/user-8.jpg',
            action: 'Removed archived ticket',
        },
        {
            status: 'Upload', variant: 'primary',
            time: 'Today at 07:10:59 pm',
            name: 'Ella Moore',
            avatar: 'assets/images/users/user-9.jpg',
            action: 'Uploaded team performance chart',
        },
        {
            status: 'Create', variant: 'success',
            time: 'Today at 07:52:14 pm',
            name: 'Benjamin Taylor',
            avatar: 'assets/images/users/user-10.jpg',
            action: 'Created a new OKR session',
        }
    ];
}
