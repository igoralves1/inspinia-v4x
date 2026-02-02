import {Component} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {SidebarComponent} from '@/app/views/other-apps/forum-post/components/sidebar.component';
import {NgbPagination} from '@ng-bootstrap/ng-bootstrap';
import {ForumPostDetailsComponent} from '@/app/views/other-apps/forum-post/components/forum-post-details.component';

@Component({
    selector: 'app-forum-post',
    imports: [
        PageTitleComponent,
        SidebarComponent,
        ForumPostDetailsComponent
    ],
    templateUrl: './forum-post.component.html',
    styles: ``
})
export class ForumPostComponent {
}
