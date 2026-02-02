import { Component } from '@angular/core';
import {LucideAngularModule, LucideSearch} from 'lucide-angular';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-sidebar',
    imports: [LucideAngularModule, RouterLink],
template:`
    <button type="button" class="btn mb-3 btn-lg btn-primary w-100">Ask Question</button>

    <div class="card">
        <div class="card-body border-bottom border-dashed">
            <h5 class="mb-3 text-uppercase fw-bold">Search</h5>
            <div class="app-search">
                <input type="text" class="form-control bg-light-subtle" placeholder="Search issues...">
                <lucide-angular [img]="SearchIcon" class="app-search-icon text-muted"/>
            </div>
        </div>

        <div class="card-body border-bottom border-dashed">
            <h5 class="mb-3 text-uppercase fw-bold">Category:</h5>
            <ul class="list-group list-group-flush fs-sm">
                @for (cat of categories; track $index) {
                    <li class="list-group-item ps-0">
                        <a [routerLink]="[]" class="link-reset fw-medium">{{ cat }}</a>
                    </li>
                }
            </ul>
        </div>

        <div class="card-body border-bottom border-dashed">
            <h5 class="mb-3 text-uppercase fw-bold">Popular Questions:</h5>
            <ul class="list-group list-group-flush fs-sm">
                @for (question of questions; track $index) {
                    <li class="list-group-item ps-0">
                        <a [routerLink]="[]" class="link-reset fw-medium">{{ question }}</a>
                    </li>
                }
            </ul>
        </div>

        <div class="card-body">
            <h5 class="mb-3 text-uppercase fw-bold">Popular Tags:</h5>
            <div class="d-flex flex-wrap gap-1">
                @for (tag of tags; track $index) {
                    <a class="btn btn-light btn-sm" [routerLink]="[]">{{ tag }}</a>
                }
            </div>
        </div>

    </div>
`,
  styles: ``
})
export class SidebarComponent {
SearchIcon=LucideSearch

    categories: string[] = [
        'Development Talk',
        'AI & Ethics',
        'Product Design',
        'Career Growth',
        'Open Source'
    ];

    questions: string[] = [
        'Unlocking the Secrets of Modern UI Design',
        'How to Build a Portfolio with Tailwind CSS',
        'Boost Productivity with These Web Dev Tools',
        'The Future of Frontend: Trends to Watch in 2025',
        'Essential Tips for Clean and Maintainable Code'
    ];

    tags: string[] = [
        'Web Design', 'Frontend', 'Tailwind CSS', 'JavaScript', 'React',
        'Startup', 'DevTools', 'Open Source', 'Performance', 'UX/UI', 'SEO'
    ];
}
