import {Component} from '@angular/core';
import {UiCardComponent} from '@app/components/ui-card.component';
import {projectUpdates} from '@/app/views/dashboards/dashboard-1/data';
import {RouterLink} from '@angular/router';
import {NgIcon} from '@ng-icons/core';

@Component({
  selector: 'app-project-updates',
    imports: [
        UiCardComponent,
        RouterLink,
        NgIcon
    ],
  template: `
      <app-ui-card title="Latest Project Updates">
          <span helper-text class="badge text-bg-warning fs-xxs p-1"> 8 Notifications</span>
          <div card-body class="timeline timeline-icon-bordered">
              @for (project of projectUpdates; track $index; let last = $last) {
                  <div
                      class="timeline-item d-flex align-items-stretch">
                      <div class="timeline-dot">
                          <ng-icon [name]="project.icon"
                                   [class]="'fs-xl d-flex align-items-center justify-content-center text-' + project.variant"></ng-icon>
                      </div>
                      <div class="timeline-content ps-3">
                          <div class="d-flex justify-content-between">
                              <h5 class="mb-1 fs-base">
                                  {{ project.title }}
                                  <span class="badge badge-label" [class]="'badge-soft-' + project.variant + ' ms-2'">
                                {{ project.category }}
                              </span>
                              </h5>
                              <span class="text-muted fs-xxs">{{ project.date }} at {{ project.time }}</span>
                          </div>
                          <p class="mb-1 text-muted">{{ project.description }}</p>
                          <div class="d-flex align-items-center gap-2">
                              <img [src]="project.avatar" [alt]="project.name" class="rounded-circle avatar-xxs">
                              <a routerLink="/pages/profile"
                                 class="fw-medium link-reset text-muted">{{ project.name }}</a>
                          </div>
                          @if (!last) {
                              <hr class="border-dashed">
                          }
                      </div>
                  </div>
              }
          </div>

      </app-ui-card>
  `,
  styles: ``
})
export class ProjectUpdatesComponent {

    protected readonly projectUpdates = projectUpdates;
}
