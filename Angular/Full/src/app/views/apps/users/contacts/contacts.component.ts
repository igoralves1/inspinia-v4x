import {Component} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {
    LucideAngularModule,
    LucideLayers,
    LucideLayoutGrid,
    LucideList,
    LucideMapPin,
    LucideSearch,
    LucideUserCheck
} from 'lucide-angular';
import {ContactType} from '@/app/views/apps/users/contacts/types';
import {NgIcon} from '@ng-icons/core';
import {ContactCardComponent} from '@/app/views/apps/users/contacts/components/contact-card.component';
import {NgbPagination, NgbPaginationNext, NgbPaginationPrevious} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-contacts',
    imports: [
        PageTitleComponent,
        LucideAngularModule,
        NgIcon,
        ContactCardComponent,
        NgbPagination,
        NgbPaginationNext,
        NgbPaginationPrevious,
    ],
    templateUrl: './contacts.component.html',
    styles: ``
})
export class ContactsComponent {

    protected readonly LucideSearch = LucideSearch;
    protected readonly LucideUserCheck = LucideUserCheck;
    protected readonly LucideMapPin = LucideMapPin;
    protected readonly LucideLayers = LucideLayers;
    protected readonly LucideLayoutGrid = LucideLayoutGrid;
    protected readonly LucideList = LucideList;

    contacts: ContactType[] = [
        {
            id: 1,
            name: "Sophia Carter",
            avatar: "assets/images/users/user-5.jpg",
            position: "Lead UI/UX Designer",
            role: "Admin",
            email: "sophia@designhub.com",
            mobileNo: "+44 7911 123456",
            location: "London, UK",
            url: "www.sophiacarter.com",
            updatedTime: "Updated 30 min ago",
            flag: "assets/images/flags/gb.svg",
            variant: "warning"
        },
        {
            id: 2,
            name: "Marcus Lee",
            avatar: "assets/images/users/user-6.jpg",
            position: "Senior Developer",
            role: "Team Lead",
            email: "marcus@devhub.com",
            mobileNo: "+1 408-222-9876",
            location: "Austin, TX",
            url: "www.devhub.com",
            updatedTime: "Updated 1 hour ago",
            flag: "assets/images/flags/us.svg",
            variant: "success"
        },
        {
            id: 3,
            name: "Emily Davis",
            avatar: "assets/images/users/user-7.jpg",
            position: "Marketing Strategist",
            role: "Member",
            email: "emily@marketboost.com",
            mobileNo: "+1 212-555-7890",
            location: "New York, NY",
            url: "www.marketboost.com",
            updatedTime: "Updated 10 min ago",
            flag: "assets/images/flags/us.svg",
            variant: "danger"
        },
        {
            id: 4,
            name: "Daniel Smith",
            avatar: "assets/images/users/user-8.jpg",
            position: "Data Analyst",
            role: "Contributor",
            email: "daniel@analyticspro.io",
            mobileNo: "+1 987-654-3210",
            location: "Toronto, Canada",
            url: "www.analyticspro.io",
            updatedTime: "Updated 45 min ago",
            flag: "assets/images/flags/ca.svg",
            variant: "info"
        },
        {
            id: 5,
            name: "Daniel Morris",
            avatar: "assets/images/users/user-7.jpg",
            position: "Project Manager",
            role: "Team Lead",
            email: "daniel@projecthub.io",
            mobileNo: "+1 212 555 7890",
            location: "New York, USA",
            url: "www.danielmorris.com",
            updatedTime: "Updated 1 hour ago",
            flag: "assets/images/flags/us.svg",
            variant: "success"
        },
        {
            id: 6,
            name: "Jessica Chen",
            avatar: "assets/images/users/user-4.jpg",
            position: "UI/UX Designer",
            role: "Editor",
            email: "jessica@uxstudio.cn",
            mobileNo: "+86 10-1234-5678",
            location: "Beijing, China",
            url: "www.uxstudio.cn",
            updatedTime: "Updated 20 min ago",
            flag: "assets/images/flags/cn.svg",
            variant: "success"
        },
        {
            id: 7,
            name: "Arjun Patel",
            avatar: "",
            position: "Software Engineer",
            role: "Member",
            email: "arjun@techflow.in",
            mobileNo: "+91 98765-43210",
            location: "Bangalore, India",
            url: "www.techflow.in",
            updatedTime: "Updated 10 min ago",
            flag: "assets/images/flags/in.svg",
            variant: "warning"
        },
        {
            id: 8,
            name: "Olivia Garcia",
            avatar: "assets/images/users/user-6.jpg",
            position: "Content Strategist",
            role: "Guest",
            email: "olivia@contentwave.es",
            mobileNo: "+34 912 345 678",
            location: "Madrid, Spain",
            url: "www.contentwave.es",
            updatedTime: "Updated 5 min ago",
            flag: "assets/images/flags/es.svg",
            variant: "danger"
        }
    ];
}
