import {Component} from '@angular/core';
import {PersonalInformationComponent} from "./components/personal-information.component";
import {SkillsComponent} from "./components/skills.component";
import {UserCardComponent} from "./components/user-card.component";
import {SocialFeedComponent} from "./components/social-feed.component";
import type {BlogType} from './types';
import {AboutComponent} from "./components/about.component";
import {TasksComponent} from "./components/tasks.component";
import {BlogCardComponent} from './components/blog-card.component';
import {StatisticWidget1Component} from '@app/components/widgets/statistic-widget1.component';
import type {StatisticWidget1Type} from '@/app/types';

@Component({
    selector: 'app-profile',
    imports: [UserCardComponent, PersonalInformationComponent, SkillsComponent, SocialFeedComponent, AboutComponent, TasksComponent, BlogCardComponent, StatisticWidget1Component],
    templateUrl: './profile.component.html',
    styles: ``
})

export class ProfileComponent {
    statisticsData: StatisticWidget1Type[] = [
        {
            title: 'My Tasks',
            label: '+3 New',
            icon: 'tablerChecklist',
            count: { value: 124 },
            variant: 'primary',
            totalCount: { value: 12450 },
            description: 'Total Tasks',
        },
        {
            title: 'Messages',
            label: '+5 New',
            icon: 'tablerMessageCircle',
            count: { value: 69.5, suffix: 'k' },
            variant: 'secondary',
            totalCount: { value: 32.1, suffix: 'M' },
            description: 'Total Messages',
        },
        {
            title: 'Clients',
            label: '+4 New',
            icon: 'tablerUsers',
            count: { value: 184 },
            variant: 'secondary',
            totalCount: { value: 9835 },
            description: 'Total Clients',
        },
        {
            title: 'Revenue',
            label: '+1.5%',
            icon: 'tablerCreditCard',
            count: { value: 25.5, prefix: '$', suffix: 'k' },
            variant: 'primary',
            totalCount: { value: 12.5, prefix: '$', suffix: 'M' },
            description: 'Total Revenue',
        }
    ];

    blogs: BlogType[] = [
        {
            category: 'Technology',
            image: 'assets/images/blog/blog-4.jpg',
            title: 'The Future of Artificial Intelligence',
            description: 'Discover how AI is transforming industries and what the future holds for this cutting-edge technology.',
            tags: ['AI', 'Technology', 'Innovation'],
            date: 'Jan 12, 2025',
            comments: 89,
            views: 1284,
            author: {
                name: 'Michael Turner',
                avatar: 'assets/images/users/user-4.jpg',
            },
            link: 'article.html',
        },
        {
            category: 'Data Science',
            image: 'assets/images/blog/blog-5.jpg',
            title: 'Top Data Science Trends in 2025',
            description: 'Get ahead in the data science field with the latest trends, technologies, and tools that are reshaping the industry.',
            tags: ['Data Science', 'Trends', '2025'],
            date: 'Jan 12, 2025',
            comments: 89,
            views: 1284,
            author: {
                name: 'Olivia Brown',
                avatar: 'assets/images/users/user-1.jpg',
            },
            link: 'article.html',
        },
        {
            category: 'Business',
            image: 'assets/images/blog/blog-3.jpg',
            title: '5 Key Tips for New Entrepreneurs',
            description: 'Start your entrepreneurial journey with these 5 essential tips that will guide you through the first year of business.',
            tags: ['Business', 'Entrepreneur', 'Startup'],
            date: 'Jan 12, 2025',
            comments: 89,
            views: 1284,
            author: {
                name: 'David Clark',
                avatar: 'assets/images/users/user-7.jpg',
            },
            link: 'article.html',
        },
    ];
}
