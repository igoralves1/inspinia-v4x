import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-skills',
    imports: [RouterLink],
    template: `
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">Skills</h4>
            </div>

            <div class="card-body">
                <div class="d-flex flex-wrap gap-1">
                    @for (skill of skills; track $index) {
                        <a class="btn btn-light btn-sm" [routerLink]="[]">{{ skill }}</a>
                    }
                </div>

            </div>
        </div>
    `,
    styles: ``
})
export class SkillsComponent {

    skills = [
        'Product Design',
        'UI/UX',
        'Tailwind CSS',
        'Bootstrap',
        'React.js',
        'Next.js',
        'Vue.js',
        'Figma',
        'Design Systems',
        'Template Authoring',
        'Responsive Design',
        'Component Libraries']

}
