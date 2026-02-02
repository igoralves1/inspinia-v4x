import {Component, Input} from '@angular/core';
import {BlogType} from '@/app/views/other-apps/blog/types';
import {NgIcon} from '@ng-icons/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-blog-card',
  imports: [NgIcon,RouterLink],
  template: `
      <article class="card rounded-3 bg-{{blog.variant}} {{blog.variant ? 'bg-gradient' : ''}}">

          @if (blog.image) {
              <img class="card-img-top rounded-top-3" [src]="blog.image" alt="SEO Strategies">
          }

          @if (blog.title) {
              <div class="card-body">
                  @if (blog.category) {
                      <div
                          class="badge badge-label  {{blog.variant ? 'mb-3 bg-opacity-25 bg-white' : 'position-absolute top-0 start-0 m-3 text-bg-dark'}}">
                          {{ blog.category }}
                      </div>
                  }
                  <h6 class="card-title fs-lg lh-base mb-2">
                      <a routerLink="/other-apps/article"
                         [class]="blog.variant ? 'text-white' : 'link-reset'">{{ blog.title }}</a>
                  </h6>
                  <p class="mb-3" [class]="blog.variant ? 'text-white-50' : 'text-muted'">
                      {{ blog.description }}
                  </p>

                  <div>
                      @for (tag of blog.tags; track $index) {
                          <a [routerLink]="[]" class="badge badge-label  border me-1"
                             [class]="blog.variant ? 'rounded border-white border-opacity-25' : 'badge-default'">{{ tag }}</a>
                      }
                  </div>

                  <p class="d-flex flex-wrap gap-3  mb-0 mt-3 align-items-center fs-base"
                     [class]="blog.variant ? 'text-white-50' : 'text-muted'">
                      <span class="d-flex align-items-center gap-1"><ng-icon name="tablerCalendar" class="fs-md"/>
                          {{ blog.date }}</span>
                      <span class="d-flex align-items-center gap-1"><ng-icon name="tablerMessageCircle"
                                                                             class="fs-md"></ng-icon> <a href="#!"
                                                                                                         class="link-reset">{{ blog.comments }}</a></span>
                      <span class="d-flex align-items-center gap-1"><ng-icon name="tablerEye" class="fs-md"></ng-icon>
                          {{ blog.views }}</span>
                  </p>
              </div>
          }

          <div
              class="card-footer bg-transparent d-flex justify-content-between {{blog.variant ? 'border-light border-opacity-25' : ''}}">
              <div class="d-flex justify-content-start align-items-center gap-2">
                  <div class="avatar avatar-xs">
                      <img src={{blog.user.avatar}} alt="avatar-2" class="img-fluid rounded-circle">
                  </div>
                  <div>
                      <h5 class="text-nowrap fs-sm mb-0 lh-base">
                          <a [routerLink]="[]" [class]="blog.variant ? 'text-white' : 'link-reset'">{{ blog.user.name }}</a>
                      </h5>
                  </div>
              </div>
              <a class="fw-semibold d-flex align-items-center flex-wrap gap-1"
                 [class]="blog.variant ? 'text-white' : 'link-primary'" routerLink="/other-apps/article">Read more
                  <ng-icon name="tablerArrowRight"/>
              </a>
          </div>
      </article>
  `,
  styles: ``
})
export class BlogCardComponent {
    @Input() blog!: BlogType
}
