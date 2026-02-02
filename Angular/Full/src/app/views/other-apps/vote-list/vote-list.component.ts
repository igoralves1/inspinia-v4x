import {Component} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {FormsModule} from '@angular/forms';
import {LucideAngularModule, LucideCheckCircle, LucideListFilter, LucideSearch} from 'lucide-angular';
import {NgIcon} from '@ng-icons/core';
import {RouterLink} from '@angular/router';
import {NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {toTitleCase} from '@/app/utils/string-utils';

export  type PollType = {
    id: number;
    title: string
    description: string;
    avatar: string;
    name: string;
    date: string;
    tag: string;
    comments: string;
    endDays: number;
    votes: number;
    status: "closed" | "open" | 'ending-soon';
    isCompleted?: boolean
}

@Component({
    selector: 'app-vote-list',
    imports: [
        PageTitleComponent,
        LucideAngularModule,
        FormsModule,
        NgIcon,
        RouterLink,
        NgbTooltipModule
    ],
    templateUrl: './vote-list.component.html',
    styles: ``
})
export class VoteListComponent {
    LucideSearch=LucideSearch
    LucideListFilter=LucideListFilter
    LucideCheckCircle=LucideCheckCircle
    searchText = ''
    polls: PollType[] = [
        {
            id: 1,
            title: "Should remote work be a permanent option for all employees?",
            description: "Remote work has seen a massive rise in popularity since 2020. This vote explores whether it should remain a flexible option moving forward.",
            avatar: "assets/images/users/user-7.jpg",
            name: "Emily Parker",
            date: "Jan 12, 2025",
            tag: "Workplace",
            comments: "89",
            endDays: 5,
            votes: 1284,
            status: "closed"
        },
        {
            id: 2,
            title: "Should companies implement a 4-day workweek?",
            description: "As work-life balance becomes a higher priority, many advocate for a shorter workweek to improve productivity and employee well-being.",
            avatar: "assets/images/users/user-4.jpg",
            name: "Daniel Stone",
            date: "Feb 1, 2025",
            tag: "Productivity",
            comments: "54",
            endDays: 4,
            votes: 985,
            status: "open",
            isCompleted: true
        },
        {
            id: 3,
            title: "Should AI be part of everyday business operations?",
            description: "As AI becomes more accessible, businesses are debating its integration into daily operations for tasks like customer support and analysis.",
            avatar: "assets/images/users/user-8.jpg",
            name: "Liam Torres",
            date: "Mar 3, 2025",
            tag: "Technology",
            comments: "112",
            endDays: 2,
            votes: 1140,
            status: "open"
        },
        {
            id: 4,
            title: "Should companies go fully remote?",
            description: "With the success of remote setups, some argue that physical offices are no longer necessary. Others miss in-person collaboration.",
            avatar: "assets/images/users/user-6.jpg",
            name: "Sophia Ray",
            date: "Jan 28, 2025",
            tag: "Remote",
            comments: "40",
            endDays: 3,
            votes: 800,
            status: "closed"
        },
        {
            id: 5,
            title: "Is a degree still essential in tech hiring?",
            description: "Many argue that skills matter more than formal education in today’s tech industry. Should degrees still be a hiring requirement?",
            avatar: "assets/images/users/user-9.jpg",
            name: "Jordan Smith",
            date: "Jan 10, 2025",
            tag: "Career",
            comments: "87",
            endDays: 1,
            votes: 1004,
            status: "open"
        },
        {
            id: 6,
            title: "Should meetings be reduced to increase efficiency?",
            description: "Teams spend hours in meetings weekly. Is cutting down on them the secret to improved focus and output?",
            avatar: "assets/images/users/user-10.jpg",
            name: "Rachel Lee",
            date: "Feb 5, 2025",
            tag: "Efficiency",
            comments: "33",
            endDays: 6,
            votes: 728,
            status: "ending-soon",
            isCompleted: true
        },
        {
            id: 7,
            title: "Is hybrid work the best model moving forward?",
            description: "Hybrid setups offer flexibility and collaboration—but do they satisfy everyone? Let’s vote on the future of work.",
            avatar: "assets/images/users/user-3.jpg",
            name: "Harvey Nash",
            date: "Jan 18, 2025",
            tag: "Hybrid",
            comments: "61",
            endDays: 2,
            votes: 887,
            status: "closed"
        }
    ]

    get filteredPolls(): PollType[] {
        return this.polls.filter(p =>
            p.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
            p.description.toLowerCase().includes(this.searchText.toLowerCase()) ||
            p.tag.toLowerCase().includes(this.searchText.toLowerCase())
        );
    }

    protected readonly toTitleCase = toTitleCase;
}
