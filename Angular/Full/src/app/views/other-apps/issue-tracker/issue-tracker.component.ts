import {Component, inject, OnInit} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {LucideAngularModule, LucideSearch} from 'lucide-angular';
import {AsyncPipe, DecimalPipe} from '@angular/common';
import {Observable} from 'rxjs';
import {TableService} from '@core/services/table.service';
import {toTitleCase} from '@/app/utils/string-utils';
import {
    NgbPagination,
    NgbPaginationNext,
    NgbPaginationPrevious,
    NgbProgressbarModule
} from '@ng-bootstrap/ng-bootstrap';
import {NgIcon} from '@ng-icons/core';
import {RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';

type IssueType = {
    id: number,
    issueID: number,
    title: string,
    description: string,
    status: "in-progress" | "open" | "resolved" | "review" | "pending",
    priority: string,
    createdAt: string,
    dueDate: string,
    name: string;
    avatar: string;
    categories: string[],
    variant: string;
    progress: number;
    comments: number;
    files: number
}

@Component({
    selector: 'app-issue-tracker',
    imports: [
        PageTitleComponent,
        LucideAngularModule,
        NgbPagination,
        NgIcon,
        NgbProgressbarModule,
        RouterLink,
        FormsModule,
        NgbPaginationNext,
        NgbPaginationPrevious,
        AsyncPipe
    ],
    providers: [TableService],
    templateUrl: './issue-tracker.component.html',
    styles: ``
})
export class IssueTrackerComponent implements OnInit {
    LucideSearch = LucideSearch
    public tableService = inject(TableService<IssueType>)
    records$: Observable<IssueType[]>
    total$: Observable<number>;

    constructor(public pipe: DecimalPipe) {
        this.records$ = this.tableService.items$
        this.total$ = this.tableService.total$

    }

    ngOnInit(): void {
        this.tableService.setItems(this.issues, 8)

    }

    issues: IssueType[] = [
        {
            id: 1,
            issueID: 104,
            title: "User profile update not saving on mobile devices",
            description: "User profile update not saving on mobile devices",
            status: "in-progress",
            priority: "Urgent",
            createdAt: "10.02.2025",
            dueDate: "15.02.2025",
            name: "Jason Lee",
            avatar: "assets/images/users/user-3.jpg",
            categories: ["Mobile", "UI", "Urgent"],
            variant: "warning",
            progress: 60,
            comments: 12,
            files: 3
        },
        {
            id: 2,
            issueID: 105,
            title: "Payment gateway fails to respond on checkout",
            description: "Payment gateway fails to respond on checkout",
            status: "open",
            priority: "Critical",
            createdAt: "08.02.2025",
            dueDate: "14.02.2025",
            name: "Sophia Mendes",
            avatar: "assets/images/users/user-4.jpg",
            categories: ["Payments", "Critical"],
            variant: "danger",
            progress: 25,
            comments: 8,
            files: 2
        },
        {
            id: 3,
            issueID: 106,
            title: "Dark mode breaks UI on dashboard view",
            description: "Dark mode breaks UI on dashboard view",
            status: "resolved",
            priority: "Enhancement",
            createdAt: "03.02.2025",
            dueDate: "07.02.2025",
            name: "Mason Clark",
            avatar: "assets/images/users/user-2.jpg",
            categories: ["UI", "Enhancement"],
            variant: "success",
            progress: 100,
            comments: 15,
            files: 1
        },
        {
            id: 4,
            issueID: 107,
            title: "Push notifications are delayed by 5-10 minutes",
            description: "Push notifications are delayed by 5-10 minutes",
            status: "review",
            priority: "Backend",
            createdAt: "11.02.2025",
            dueDate: "17.02.2025",
            name: "Olivia Stone",
            avatar: "assets/images/users/user-5.jpg",
            categories: ["Notification", "Backend"],
            variant: "info",
            progress: 40,
            comments: 5,
            files: 0
        },
        {
            id: 5,
            issueID: 108,
            title: "Contact page returns 404 after deployment",
            description: "Contact page returns 404 after deployment",
            status: "pending",
            priority: "Routing",
            createdAt: "09.02.2025",
            dueDate: "13.02.2025",
            name: "Daniel Reed",
            avatar: "assets/images/users/user-1.jpg",
            categories: ["Deployment", "Routing"],
            variant: "secondary",
            progress: 10,
            comments: 2,
            files: 1
        },
        {
            id: 6,
            issueID: 109,
            title: "Export to PDF does not include chart section",
            description: "Export to PDF does not include chart section",
            status: "in-progress",
            priority: "Charts",
            createdAt: "12.02.2025",
            dueDate: "18.02.2025",
            name: "Nathan White",
            avatar: "assets/images/users/user-6.jpg",
            categories: ["Export", "Charts"],
            variant: "warning",
            progress: 50,
            comments: 6,
            files: 2
        },
        {
            id: 7,
            issueID: 110,
            title: "Search bar does not return any results for valid keywords",
            description: "Search bar does not return any results for valid keywords",
            status: "open",
            priority: "Bug",
            createdAt: "13.02.2025",
            dueDate: "16.02.2025",
            name: "Emma Watson",
            avatar: "assets/images/users/user-9.jpg",
            categories: ["Search", "Bug"],
            variant: "danger",
            progress: 20,
            comments: 4,
            files: 0
        },
        {
            id: 8,
            issueID: 111,
            title: "Email verification link expires instantly after signup",
            description: "Email verification link expires instantly after signup",
            status: "in-progress",
            priority: "High Priority",
            createdAt: "10.02.2025",
            dueDate: "20.02.2025",
            name: "Ava Johnson",
            avatar: "assets/images/users/user-10.jpg",
            categories: ["Authentication", "High Priority"],
            variant: "warning",
            progress: 45,
            comments: 6,
            files: 1
        },
        {
            id: 9,
            issueID: 112,
            title: "Footer links appear broken on Safari browser",
            description: "Footer links appear broken on Safari browser",
            status: "review",
            priority: "Low",
            createdAt: "12.02.2025",
            dueDate: "19.02.2025",
            name: "Liam Gray",
            avatar: "assets/images/users/user-8.jpg",
            categories: ["UI", "Safari", "Low"],
            variant: "info",
            progress: 30,
            comments: 3,
            files: 0
        },
        {
            id: 10,
            issueID: 113,
            title: "Reports are showing times in UTC instead of local timezone",
            description: "Reports are showing times in UTC instead of local timezone",
            status: "pending",
            priority: "Timezone",
            createdAt: "14.02.2025",
            dueDate: "22.02.2025",
            name: "Noah Mitchell",
            avatar: "assets/images/users/user-1.jpg",
            categories: ["Reports", "Timezone"],
            variant: "secondary",
            progress: 15,
            comments: 1,
            files: 1
        }
    ]

    protected readonly toTitleCase = toTitleCase;
}
