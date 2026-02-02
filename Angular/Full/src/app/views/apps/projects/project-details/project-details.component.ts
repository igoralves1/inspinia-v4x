import {Component} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import {NgIcon} from '@ng-icons/core';
import {CommentsComponent} from '@/app/views/apps/projects/project-details/components/comments.component';
import {TaskListComponent} from '@/app/views/apps/projects/project-details/components/task-list.component';
import {ActivityComponent} from '@/app/views/apps/projects/project-details/components/activity.component';
import {TeamSidebarComponent} from '@/app/views/apps/projects/project-details/components/team-sidebar.component';

@Component({
    selector: 'app-project-details',
    imports: [
        PageTitleComponent,
        NgbNavModule,
        NgIcon,
        CommentsComponent,
        TaskListComponent,
        ActivityComponent,
        TeamSidebarComponent
    ],
    templateUrl: './project-details.component.html',
    styles: ``
})
export class ProjectDetailsComponent {
    active = 1;
}
