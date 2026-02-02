import {Component} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {NgIcon} from '@ng-icons/core';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-article',
    imports: [
        PageTitleComponent,
        NgIcon,
        RouterLink,
    ],
    templateUrl: './article.component.html',
    styles: ``
})
export class ArticleComponent {
     relatedPosts: string[] = [
        'Unlocking the Secrets of Modern UI Design',
        'How to Build a Portfolio with Tailwind CSS',
        'Boost Productivity with These Web Dev Tools',
        'The Future of Frontend: Trends to Watch in 2025',
        'Essential Tips for Clean and Maintainable Code'
    ];

     popularTags: string[] = [
        'Web Design', 'Frontend', 'Tailwind CSS', 'JavaScript', 'React',
        'Startup', 'DevTools', 'Open Source', 'Performance', 'UX/UI', 'SEO'
    ];

    socialLinks = [
        {
            icon: 'tablerBrandFacebook',
            link: '',
            variant:'purple',
        },
        {
            icon: 'tablerBrandX',
            link: '',
            variant:'info',
        },
        {
            icon: 'tablerBrandInstagram',
            link: '',
            variant:'danger',
        },
        {
            icon: 'tablerBrandDribbble',
            link: 'success',
            variant:'info',

        },
        {
            icon: 'tablerBrandLinkedin',
            link: '',
            variant:'secondary',
        },
        {
            icon: 'tablerBrandYoutube',
            link: '',
            variant:'danger',
        },
    ]
}
