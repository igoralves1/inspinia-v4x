import {Component} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {TeamType} from '@/app/views/apps/projects/team-board/types';
import {TeamCardComponent} from '@/app/views/apps/projects/team-board/components/team-card.component';
import {NgIcon} from '@ng-icons/core';

@Component({
    selector: 'app-team-board',
    imports: [
        PageTitleComponent,
        TeamCardComponent,
        NgIcon
    ],
    templateUrl: './team-board.component.html',
    styles: ``
})
export class TeamBoardComponent {
    teams: TeamType[] = [
        {
            id: 1,
            name: 'Design Team',
            members: [
                'assets/images/users/user-7.jpg',
                'assets/images/users/user-8.jpg',
                'assets/images/users/user-9.jpg',
                'assets/images/users/user-10.jpg'
            ],
            description: 'The Design Team focuses on creating intuitive user experiences and visually appealing interfaces. We handle UI/UX design, prototyping, and brand consistency across all digital products.',
            stats: [
                {icon: 'tablerLayoutKanban', name: 'Projects', count: {value: 25}},
                {icon: 'tablerAward', name: 'Ranking', count: {value: 5, prefix: '#'}},
                {icon: 'tablerWallet', name: 'Budgets', count: {value: 20.3, prefix: '$', suffix: 'M'}}
            ],
            progress: 65,
            lastUpdatedTime: '1 hour ago',
            isNew: true,
            progressTitle:"Status of current project",
        },
        {
            id: 2,
            name: 'Development Team',
            members: [
                'assets/images/users/user-1.jpg',
                'assets/images/users/user-2.jpg',
                'assets/images/users/user-3.jpg',
                'assets/images/users/user-4.jpg',
                'assets/images/users/user-5.jpg',
                'assets/images/users/user-6.jpg'
            ],
            description: 'The Development Team builds and maintains core product features, ensuring robust performance, scalability, and code quality across all platforms. We specialize in full-stack development and agile delivery.',
            stats: [
                {icon: 'tablerCode', name: 'Projects', count: {value: 42}},
                {icon: 'tablerChartBar', name: 'Ranking', count: {value: 2, prefix: '#'}},
                {icon: 'tablerWallet', name: 'Budgets', count: {value: 32.7, prefix: '$', suffix: 'M'}}
            ],
            progress: 78,
            lastUpdatedTime: '30 mins ago',
            progressTitle:"Status of current project",
        },
        {
            id: 3,
            name: 'Administrator Team',
            members: [
                'assets/images/users/user-10.jpg',
                'assets/images/users/user-9.jpg',
                'assets/images/users/user-8.jpg'
            ],
            description: 'The Administrator Team manages system settings, user roles, permissions, and ensures data security and compliance across platforms.',
            stats: [
                {icon: 'tablerSettings', name: 'Tasks', count: {value: 18}},
                {icon: 'tablerActivity', name: 'Ranking', count: {value: 6, prefix: '#'}},
                {icon: 'tablerShieldCheck', name: 'Access', count: {value: 'Full'}}
            ],
            progress: 53,
            lastUpdatedTime: '45 mins ago',
            progressTitle:"Status of current ops",
        },
        {
            id: 4,
            name: 'Finance Team',
            members: [
                'assets/images/users/user-2.jpg',
                'assets/images/users/user-10.jpg',
                'assets/images/users/user-8.jpg',
                'assets/images/users/user-3.jpg',
                'assets/images/users/user-1.jpg'
            ],
            description: 'The Finance Team handles budgeting, forecasts, and financial analysis. We ensure transparency and strategic alignment with business goals.',
            stats: [
                {icon: 'tablerCalculator', name: 'Reports', count: {value: 30}},
                {icon: 'tablerTrending-up', name: 'Ranking', count: {value: 3, prefix: '#'}},
                {icon: 'tablerCurrencyEuro', name: 'Budgets', count: {value: 28.9, prefix: '$', suffix: 'M'}}
            ],
            progress: 72,
            lastUpdatedTime: '20 mins ago',
            progressTitle:"Q2 Audit Progress",
        },
        {
            id: 5,
            name: 'Marketing Team',
            members: [
                'assets/images/users/user-9.jpg',
                'assets/images/users/user-3.jpg',
                'assets/images/users/user-5.jpg',
                'assets/images/users/user-7.jpg',
                'assets/images/users/user-10.jpg',
                'assets/images/users/user-1.jpg',
                'assets/images/users/user-2.jpg'
            ],
            description: 'The Marketing Team manages branding, campaigns, and audience engagement. We drive growth through creative storytelling and data-driven strategies.',
            stats: [
                {icon: 'tablerSpeakerphone', name: 'Campaigns', count: {value: 18}},
                {icon: 'tablerChartArcs', name: 'Reach', count: {value: 1.2, suffix: 'M'}},
                {icon: 'tablerCurrencyBitcoin', name: 'Budgets', count: {value: 12.4, prefix: '$', suffix: 'M'}}
            ],
            progress: 60,
            lastUpdatedTime: '45 mins ago',
            progressTitle:"Campaign Completion",
        },
        {
            id: 6,
            name: 'Graphic Team',
            members: [
                'assets/images/users/user-9.jpg',
                'assets/images/users/user-1.jpg',
                'assets/images/users/user-10.jpg',
                'assets/images/users/user-7.jpg',
                'assets/images/users/user-6.jpg'
            ],
            description: 'The Graphic Team brings visual concepts to life. We handle illustrations, digital assets, brand collateral, and motion graphics to support product and marketing teams.',
            stats: [
                {icon: 'tablerBrush', name: 'Designs', count: {value: 36}},
                {icon: 'tablerPhoto', name: 'Assets', count: {value: 89}},
                {icon: 'tablerCurrencyEuro', name: 'Budgets', count: {value: 8.1, prefix: '$', suffix: 'M'}}
            ],
            progress: 82,
            lastUpdatedTime: '10 mins ago',
            progressTitle:"Current Load"
        }
    ];
}
