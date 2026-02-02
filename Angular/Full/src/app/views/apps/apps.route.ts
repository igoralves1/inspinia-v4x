import {Routes} from '@angular/router';
import {CalendarComponent} from '@/app/views/apps/calendar/calendar.component';
import {ChatComponent} from '@/app/views/apps/chat/chat.component';
import {FileManagerComponent} from '@/app/views/apps/file-manager/file-manager.component';
import {MyProjectsComponent} from '@/app/views/apps/projects/my-projects/my-projects.component';
import {ProjectListComponent} from '@/app/views/apps/projects/project-list/project-list.component';
import {ProjectDetailsComponent} from '@/app/views/apps/projects/project-details/project-details.component';
import {KanbanBoardComponent} from '@/app/views/apps/projects/kanban-board/kanban-board.component';
import {TeamBoardComponent} from '@/app/views/apps/projects/team-board/team-board.component';
import {ActivityStreamComponent} from '@/app/views/apps/projects/activity-stream/activity-stream.component';
import {ContactsComponent} from '@/app/views/apps/users/contacts/contacts.component';
import {RolesComponent} from '@/app/views/apps/users/roles/roles.component';
import {PermissionsComponent} from '@/app/views/apps/users/permissions/permissions.component';
import {InboxComponent} from '@/app/views/apps/email/inbox/inbox.component';
import {DetailsComponent} from '@/app/views/apps/email/details/details.component';
import {ComposeComponent} from '@/app/views/apps/email/compose/compose.component';

export const APPS_ROUTES: Routes = [
    {
        path: 'apps/calendar',
        component: CalendarComponent,
        data: {title: "Calendar"},
    },
    {
        path: 'apps/chat',
        component: ChatComponent,
        data: {title: "Chat"},
    },
    {
        path: 'apps/file-manager',
        component: FileManagerComponent,
        data: {title: "File Manager"},
    },
    {
        path: 'apps/projects',
        component: MyProjectsComponent,
        data: {title: "My Projects"},
    },
    {
        path: 'apps/projects/list',
        component: ProjectListComponent,
        data: {title: "Projects List"},
    },
    {
        path: 'apps/projects/view',
        component: ProjectDetailsComponent,
        data: {title: "Project Details"},
    },
    {
        path: 'apps/projects/kanban-board',
        component: KanbanBoardComponent,
        data: {title: "Kanban Board"},
    },
    {
        path: 'apps/projects/team-board',
        component: TeamBoardComponent,
        data: {title: "Team Board"},
    },
    {
        path: 'apps/projects/activity-stream',
        component: ActivityStreamComponent,
        data: {title: "Activity Stream"},
    },
    {
        path: 'apps/users/contacts',
        component: ContactsComponent,
        data: {title: "Contacts"},
    },
    {
        path: 'apps/users/roles',
        component: RolesComponent,
        data: {title: "User Roles"},
    },
    {
        path: 'apps/users/permissions',
        component: PermissionsComponent,
        data: {title: "User Permissions"},
    },
    {
        path: 'apps/email/inbox',
        component: InboxComponent,
        data: {title: "Inbox"},
    },
    {
        path: 'apps/email/detail',
        component: DetailsComponent,
        data: {title: "Email Details"},
    },
    {
        path: 'apps/email/compose',
        component: ComposeComponent,
        data: {title: "Compose Email"},
    },
]
