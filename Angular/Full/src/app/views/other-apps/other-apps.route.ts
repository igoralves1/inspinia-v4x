import {Routes} from '@angular/router';
import {CompaniesComponent} from '@/app/views/other-apps/companies/companies.component';
import {ClientsComponent} from '@/app/views/other-apps/clients/clients.component';
import {OutlookViewComponent} from '@/app/views/other-apps/outlook-view/outlook-view.component';
import {VoteListComponent} from '@/app/views/other-apps/vote-list/vote-list.component';
import {IssueTrackerComponent} from '@/app/views/other-apps/issue-tracker/issue-tracker.component';
import {BlogComponent} from '@/app/views/other-apps/blog/blog.component';
import {ArticleComponent} from '@/app/views/other-apps/article/article.component';
import {PinBoardComponent} from '@/app/views/other-apps/pin-board/pin-board.component';
import {ForumViewComponent} from '@/app/views/other-apps/forum-view/forum-view.component';
import {ForumPostComponent} from '@/app/views/other-apps/forum-post/forum-post.component';
import {ApiKeysComponent} from '@/app/views/other-apps/api-keys/api-keys.component';

export const OTHER_APPS_ROUTES: Routes = [
    {
        path: 'other-apps/companies',
        component: CompaniesComponent,
        data: {title: "Companies"},
    },
    {
        path: 'other-apps/clients',
        component: ClientsComponent,
        data: {title: "Clients"},
    },
    {
        path: 'other-apps/outlook-view',
        component: OutlookViewComponent,
        data: {title: "Outlook View"},
    },
    {
        path: 'other-apps/vote-list',
        component: VoteListComponent,
        data: {title: "Vote List"},
    },
    {
        path: 'other-apps/issue-tracker',
        component: IssueTrackerComponent,
        data: {title: "Issue Tracker"},
    },
    {
        path: 'other-apps/blog',
        component: BlogComponent,
        data: {title: "Blog"},
    },
    {
        path: 'other-apps/article',
        component: ArticleComponent,
        data: {title: "Article"},
    },
    {
        path: 'other-apps/pin-board',
        component: PinBoardComponent,
        data: {title: "Pin Board"},
    },
    {
        path: 'other-apps/forum-view',
        component: ForumViewComponent,
        data: {title: "Forum View"},
    },
    {
        path: 'other-apps/forum-post',
        component: ForumPostComponent,
        data: {title: "Forum Post Card"},
    },
    {
        path: 'other-apps/api-keys',
        component: ApiKeysComponent,
        data: {title: "Api Keys"},
    },

];
