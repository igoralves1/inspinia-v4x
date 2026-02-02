import {Component, Input} from '@angular/core';
import {NgIcon} from '@ng-icons/core';
import {RouterLink} from '@angular/router';
import type {BlogType} from '../types';

@Component({
    selector: 'app-blog-card',
    imports: [NgIcon,RouterLink],
    template: `
        <article class="card rounded-3">

            <div class="badge text-bg-dark badge-label position-absolute top-0 start-0 m-3">
                {{ blog.category }}
            </div>


            <img class="card-img-top rounded-top-3" [src]="blog.image"
                 alt="Tech Innovations">


            <div class="card-body">

                <h6 class="card-title fs-lg lh-base mb-2">
                    <a [routerLink]="blog.link" class="link-reset">{{ blog.title }}</a>
                </h6>
                <p class="mb-3 text-muted">
                    {{ blog.description }}
                </p>

                <div class="d-flex align-items-center flex-wrap gap-1">
                    @for (tag of blog.tags; track $index) {
                        <a  [routerLink]="[]" class="badge badge-label badge-default">{{ tag }}</a>
                    }
                </div>

                <p class="d-flex flex-wrap gap-3 text-muted mb-0 mt-3 align-items-center fs-base">
                    <span class="d-flex align-items-center flex-wrap gap-1"><ng-icon name="tablerCalendar"
                                                                                     class="fs-md"></ng-icon>
                        {{ blog.date }}</span>
                    <span class="d-flex align-items-center flex-wrap gap-1"><ng-icon name="tablerMessageCircle"
                                                                                     class="fs-md"></ng-icon> <a
                        [routerLink]="[]"
                        class="link-reset">{{ blog.comments }}</a></span>
                    <span class="d-flex align-items-center flex-wrap gap-1"><ng-icon name="tablerEye"
                                                                                     class="fs-md"></ng-icon>
                        {{ blog.views }}</span>
                </p>
            </div>


            <div class="card-footer bg-transparent d-flex justify-content-between">
                <div class="d-flex justify-content-start align-items-center gap-2">
                    <div class="avatar avatar-xs">
                        <img [src]="blog.author.avatar" alt="avatar-4"
                             class="img-fluid rounded-circle">
                    </div>
                    <div>
                        <h5 class="text-nowrap fs-sm mb-0 lh-base">
                            <a [routerLink]="[]" class="link-reset">{{ blog.author.name }}</a>
                        </h5>
                    </div>
                </div>
                <a class="link-primary fw-semibold d-flex align-items-center flex-wrap gap-1" [routerLink]="blog.link">Read
                    more
                    <ng-icon
                        name="tablerArrowRight"/>
                </a>
            </div>
        </article>
    `,
    styles: ``
})
export class BlogCardComponent {
    @Input() blog!: BlogType
}
