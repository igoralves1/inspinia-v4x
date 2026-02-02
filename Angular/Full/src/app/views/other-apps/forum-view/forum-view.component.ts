import {Component} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {SidebarComponent} from '@/app/views/other-apps/forum-view/components/sidebar.component';
import {ForumPostType} from '@/app/views/other-apps/forum-view/types';
import {ForumPostCardComponent} from '@/app/views/other-apps/forum-view/components/forum-post-card.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {NgIcon} from '@ng-icons/core';

@Component({
    selector: 'app-forum-view',
    imports: [
        PageTitleComponent,
        SidebarComponent,
        ForumPostCardComponent,
        NgbPaginationModule,
        NgIcon
    ],
    templateUrl: './forum-view.component.html',
    styles: ``
})
export class ForumViewComponent {
    page = 1;
    forumPosts: ForumPostType[] = [
        {
            id: 1,
            category: "Development Talk",
            title: "What's the best JavaScript framework in 2025?",
            description: "With so many frameworks available, developers often debate which one offers the best balance of performance, scalability, and ease of use. Share your thoughts!",
            author: "James Milton",
            avatar: "assets/images/users/user-5.jpg",
            timeStamp: "1 hour ago",
            answers: 45,
            votes: 732,
            timeLeft: "3 days",
            label: {variant: "success", text: "New"}
        },
        {
            id: 2,
            category: "AI & Ethics",
            title: "Should AI tools be regulated by governments?",
            description: "As AI becomes more powerful, discussions around ethics and control are growing. What’s your take on government involvement?",
            author: "Amira Lee",
            avatar: "assets/images/users/user-8.jpg",
            timeStamp: "2 hours ago",
            answers: 62,
            votes: 894,
            timeLeft: "4 days",
            label: {variant: "warning", text: "23"}
        },
        {
            id: 3,
            category: "Product Design",
            title: "Is minimalism still relevant in modern UI design?",
            description: "Clean interfaces have been a trend for years, but some argue they now lack innovation. What’s your opinion?",
            author: "Liam Carter",
            avatar: "assets/images/users/user-2.jpg",
            timeStamp: "3 hours ago",
            answers: 31,
            votes: 410,
            timeLeft: "2 days",
            label: {variant: "info", text: "8"}
        },
        {
            id: 4,
            category: "Career Growth",
            title: "What’s better for growth: startups or large companies?",
            description: "Both have pros and cons—startups offer agility, while big companies provide stability. Which helped your career most?",
            author: "Noah Bennett",
            avatar: "assets/images/users/user-6.jpg",
            timeStamp: "5 hours ago",
            answers: 50,
            votes: 612,
            timeLeft: "1 day",
            label: {variant: "primary", text: "12"}
        },
        {
            id: 5,
            category: "DevOps",
            title: "CI/CD or traditional release cycles: what works better?",
            description: "Continuous deployment speeds up delivery, but some teams prefer slower, stable releases. What’s your team's approach?",
            author: "Sofia Kim",
            avatar: "assets/images/users/user-4.jpg",
            timeStamp: "8 hours ago",
            answers: 76,
            votes: 1005,
            timeLeft: "6 days",
            label: {variant: "secondary", text: "18"}
        },
        {
            id: 6,
            category: "Open Source",
            title: "What’s the best way to start contributing to open source?",
            description: "Many developers want to join the open-source movement but don’t know where to begin. What advice would you give?",
            author: "Daniel Reed",
            avatar: "assets/images/users/user-1.jpg",
            timeStamp: "12 minutes ago",
            answers: 39,
            votes: 558,
            timeLeft: "7 days",
            label: {variant: "dark", text: "7"}
        }
    ];
}
