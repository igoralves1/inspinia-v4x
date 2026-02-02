import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {BlogType} from '@/app/views/other-apps/blog/types';
import {NgxMasonryComponent, NgxMasonryModule} from 'ngx-masonry';
import {BlogCardComponent} from '@/app/views/other-apps/blog/components/blog-card.component';

@Component({
    selector: 'app-blog',
    imports: [
        PageTitleComponent,
        NgxMasonryModule,
        BlogCardComponent
    ],
    templateUrl: './blog.component.html',
    styles: ``
})
export class BlogComponent implements AfterViewInit {
    @ViewChild(NgxMasonryComponent) masonry!: NgxMasonryComponent;

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.masonry?.reloadItems();
            this.masonry?.layout();
        }, 0);
    }

    blogs: BlogType[] = [
        {
            id: 1,
            title: "Mastering Figma: 7 Pro Tips for Better UI Design",
            description: "Unlock advanced techniques in Figma that can speed up your workflow and help you create pixel-perfect designs every time.",
            date: "Jan 12, 2025",
            comments: 89,
            views: "1,284",
            user: {name: "Emma Blake", avatar: "assets/images/users/user-6.jpg"},
            tags: ["Figma", "UX", "Tips"]
        },
        {
            id: 2,
            image: "assets/images/blog/blog-1.jpg",
            title: "Building REST APIs with Node.js",
            description: "Learn how to design and build scalable REST APIs with Node.js and Express in this step-by-step tutorial.",
            date: "Jan 12, 2025",
            comments: 89,
            views: "1,284",
            user: {name: "John Doe", avatar: "assets/images/users/user-3.jpg"},
            category: "Development",
            tags: ["Node.js", "API", "Tutorial"]
        },
        {
            id: 3,
            image: "assets/images/blog/blog-2.jpg",
            title: "SEO Strategies for 2025: How to Rank Higher",
            description: "Boost your website's search engine ranking with these proven SEO techniques for 2025.",
            date: "Jan 12, 2025",
            comments: 89,
            views: "1,284",
            user: {name: "Sophie Green", avatar: "assets/images/users/user-2.jpg"},
            category: "Marketing",
            tags: ["SEO", "Marketing", "Growth"]
        },
        {
            id: 4,
            title: "Web Design Trends to Watch in 2025",
            description: "Explore the top web design trends that will shape the user experience in 2025.",
            date: "Jan 12, 2025",
            comments: 89,
            views: "1,284",
            user: {name: "Anna White", avatar: "assets/images/users/user-5.jpg"},
            tags: ["Web Design", "UX/UI", "Trends"]
        },
        {
            id: 5,
            image: "assets/images/blog/blog-3.jpg",
            title: "5 Key Tips for New Entrepreneurs",
            description: "Start your entrepreneurial journey with these 5 essential tips that will guide you through the first year of business.",
            date: "Jan 12, 2025",
            comments: 89,
            views: "1,284",
            user: {name: "David Clark", avatar: "assets/images/users/user-7.jpg"},
            category: "Business",
            tags: ["Business", "Entrepreneur", "Startup"]
        },
        {
            id: 6,
            image: "assets/images/blog/blog-4.jpg",
            title: "The Future of Artificial Intelligence",
            description: "Discover how AI is transforming industries and what the future holds for this cutting-edge technology.",
            date: "Jan 12, 2025",
            comments: 89,
            views: "1,284",
            user: {name: "Michael Turner", avatar: "assets/images/users/user-4.jpg"},
            category: "Technology",
            tags: ["AI", "Technology", "Innovation"]
        },
        {
            id: 7,
            title: "Top Data Science Trends in 2025",
            description: "Get ahead in the data science field with the latest trends, technologies, and tools that are reshaping the industry.",
            date: "Jan 12, 2025",
            comments: 89,
            views: "1,284",
            user: {name: "Olivia Brown", avatar: "assets/images/users/user-1.jpg"},
            category: "Data Science",
            tags: ["Data Science", "Trends", "2025"],
            variant: "primary"
        },
        {
            id: 8,
            image: "assets/images/blog/blog-5.jpg",
            title: "Top Data Science Trends in 2025",
            description: "Get ahead in the data science field with the latest trends, technologies, and tools that are reshaping the industry.",
            date: "Jan 12, 2025",
            comments: 89,
            views: "1,284",
            user: {name: "Olivia Brown", avatar: "assets/images/users/user-1.jpg"},
            category: "Data Science",
            tags: ["Data Science", "Trends", "2025"]
        }
    ];
}
