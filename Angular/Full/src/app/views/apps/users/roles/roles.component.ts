import {Component} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UserRoleType} from '@/app/views/apps/users/roles/types';
import {UserRoleCardComponent} from '@/app/views/apps/users/roles/components/user-role-card.component';
import {NgIcon} from '@ng-icons/core';
import {UserTableComponent} from '@/app/views/apps/users/roles/components/user-table/user-table.component';

@Component({
    selector: 'app-roles',
    imports: [
        PageTitleComponent,
        UserRoleCardComponent,
        NgIcon,
        UserTableComponent,
    ],
    templateUrl: './roles.component.html',
    styles: ``
})
export class RolesComponent {
    userRoles: UserRoleType[] = [
        {
            id: 1,
            title: 'Security Officer',
            description: 'Handles platform safety and protocol reviews.',
            icon: 'tablerShieldLock',
            features: [
                'Daily Risk Assessment',
                'Manage Security Logs',
                'Control Access Rights',
                'Emergency Protocols',
            ],
            totalUsers: 4,
            users: [
                'assets/images/users/user-7.jpg',
                'assets/images/users/user-8.jpg',
                'assets/images/users/user-9.jpg',
                'assets/images/users/user-10.jpg'
            ],
            updatedTime: '1 hour ago'
        },
        {
            id: 2,
            title: 'Project Manager',
            description: 'Coordinates planning and team delivery timelines.',
            icon: 'tablerBriefcase',
            features: [
                'Timeline Tracking',
                'Task Assignments',
                'Budget Control',
                'Stakeholder Reporting',
            ],
            totalUsers: 5,
            users: [
                'assets/images/users/user-2.jpg',
                'assets/images/users/user-5.jpg',
                'assets/images/users/user-6.jpg',
                'assets/images/users/user-1.jpg',
                'assets/images/users/user-8.jpg'
            ],
            updatedTime: '2 hours ago'
        },
        {
            id: 3,
            title: 'Developer',
            description: 'Builds and maintains the platform core features.',
            icon: 'tablerCode',
            features: [
                'Codebase Maintenance',
                'API Integration',
                'Unit Testing',
                'Feature Deployment',
            ],
            totalUsers: 6,
            users: [
                'assets/images/users/user-3.jpg',
                'assets/images/users/user-4.jpg',
                'assets/images/users/user-9.jpg',
                'assets/images/users/user-10.jpg',
                'assets/images/users/user-11.jpg',
                'assets/images/users/user-12.jpg'
            ],
            updatedTime: '3 hours ago'
        },
        {
            id: 4,
            title: 'Support Lead',
            description: 'Oversees customer support and service quality.',
            icon: 'tablerHeadset',
            features: [
                'Respond to Tickets',
                'Live Chat Supervision',
                'FAQ Updates',
                'Support Metrics Review',
            ],
            totalUsers: 3,
            users: [
                'assets/images/users/user-1.jpg',
                'assets/images/users/user-5.jpg',
                'assets/images/users/user-7.jpg'
            ],
            updatedTime: '30 min ago'
        }
    ]
}
