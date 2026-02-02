import {type AfterViewInit, Component, ViewChild} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {NgxMasonryComponent, NgxMasonryModule} from 'ngx-masonry';
import {MasonryCardComponent} from "./components/masonry-card/masonry-card.component";
import type {MasonryCardType} from './types';


@Component({
    selector: 'app-masonry',
    imports: [PageTitleComponent, NgxMasonryModule, MasonryCardComponent],
    templateUrl: './masonry.component.html',
    styles: ``
})
export class MasonryComponent implements AfterViewInit {
    @ViewChild(NgxMasonryComponent) masonry!: NgxMasonryComponent;
    ngAfterViewInit(): void {
        setTimeout(() => {
            this.masonry?.reloadItems();
            this.masonry?.layout();
        }, 0);
    }

    masonaryData:MasonryCardType[] = [
        {
            "id": 1,
            "title": "Mastering Figma: 7 Pro Tips for Better UI Design",
            "description": "Unlock advanced techniques in Figma that can speed up your workflow and help you create pixel-perfect designs every time.",
            "date": "Jan 12, 2025",
            "comments": 89,
            "views": "1,284",
            "user": {
                "name": "Emma Blake",
                "avatar": "assets/images/users/user-6.jpg"
            },
            "tags": ["Figma", "UX", "Tips"]
        },
        {
            "id": 2,
            "image": "assets/images/blog/blog-1.jpg",
            "user": {
                "name": "John Doe",
                "avatar": "assets/images/users/user-3.jpg"
            },
            "category": "Development",

        },
        {
            "id": 3,
            "title": "AI Breakthroughs to Watch in 2025",
            "description": "Explore the game-changing AI innovations set to redefine industries and everyday life in the coming year.",
            "date": "Feb 8, 2025",
            "comments": 102,
            "views": "1,542",
            "user": {
                "name": "Liam Carter",
                "avatar": "assets/images/users/user-2.jpg"
            },
            "category": "Artificial Intelligence",
            "variant": "danger"
        },
        {
            "id": 4,
            "image": "assets/images/blog/blog-2.jpg",
            "title": "SEO Strategies for 2025: How to Rank Higher",
            "description": "Boost your website's search engine ranking with these proven SEO techniques for 2025.",
            "date": "Jan 12, 2025",
            "comments": 89,
            "views": "1,284",
            "user": {
                "name": "Sophie Green",
                "avatar": "assets/images/users/user-2.jpg"
            },
            "category": "Marketing",
            "tags": ["SEO", "Marketing", "Growth"]
        },
        {
            "id": 5,
            "image": "assets/images/gallery/8.jpg",
            "user": {
                "name": "John Doe",
                "avatar": "assets/images/users/user-3.jpg"
            },
            "category": "Development",

        },
        {
            "id": 6,
            "image": "assets/images/blog/blog-3.jpg",
            "title": "5 Key Tips for New Entrepreneurs",
            "description": "Start your entrepreneurial journey with these 5 essential tips that will guide you through the first year of business.",
            "date": "Jan 12, 2025",
            "comments": 89,
            "views": "1,284",
            "user": {
                "name": "David Clark",
                "avatar": "assets/images/users/user-7.jpg"
            },
            "category": "Business",
            "tags": ["Business", "Entrepreneur", "Startup"]
        },
        {
            "id": 7,
            "image": "assets/images/stock/small-4.jpg",
            "title": "The Future of Artificial Intelligence",
            "description": "Discover how AI is transforming industries and what the future holds for this cutting-edge technology.",
            "date": "Jan 12, 2025",
            "comments": 89,
            "views": "1,284",
            "user": {
                "name": "Michael Turner",
                "avatar": "assets/images/users/user-4.jpg"
            },
            "category": "Technology",

        },
        {
            "id": 8,
            "title": "Cyber Threats to Watch Out for in 2025",
            "description": "Stay protected by understanding the most pressing cybersecurity threats and how to safeguard your digital world.",
            "date": "Mar 5, 2025",
            "comments": 67,
            "views": "1,039",
            "user": {
                "name": "Ethan Wilson",
                "avatar": "assets/images/users/user-4.jpg"
            },
            "category": "Cybersecurity",
            "variant": "secondary"
        },
        {
            "id": 9,
            "image": "assets/images/blog/blog-5.jpg",
            "title": "Top Data Science Trends in 2025",
            "description": "Get ahead in the data science field with the latest trends, technologies, and tools that are reshaping the industry.",
            "date": "Jan 12, 2025",
            "comments": 89,
            "views": "1,284",
            "user": {
                "name": "Olivia Brown",
                "avatar": "assets/images/users/user-1.jpg"
            },
            "category": "Data Science",

        },
        {
            "id": 10,
            "title": "Web Design Trends to Watch in 2025",
            "description": "Explore the top web design trends that will shape the user experience in 2025.",
            "date": "Jan 12, 2025",
            "comments": 89,
            "views": "1,284",
            "user": {
                "name": "Anna White",
                "avatar": "assets/images/users/user-5.jpg"
            },
            "tags": ["Web Design", "UX/UI", "Trends"]
        },
        {
            "id": 11,
            "title": "Sustainable Technologies Shaping the Future",
            "description": "Discover how clean energy, eco-innovation, and green infrastructure are driving the global sustainability movement.",
            "date": "Mar 22, 2025",
            "comments": 76,
            "views": "1,196",
            "user": {
                "name": "Sophia Turner",
                "avatar": "assets/images/users/user-3.jpg"
            },
            "category": "Green Tech",
            "variant": "success"
        }
    ]

}
