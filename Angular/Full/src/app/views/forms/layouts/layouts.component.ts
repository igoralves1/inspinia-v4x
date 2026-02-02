import {Component, inject, TemplateRef} from '@angular/core';
import { PageTitleComponent } from "@app/components/page-title.component";
import {LucideAngularModule, LucideShieldUser, ShieldUser} from 'lucide-angular';
import {UiCardComponent} from '@app/components/ui-card.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-layouts',
    imports: [PageTitleComponent, LucideAngularModule, UiCardComponent, RouterLink],
    templateUrl: './layouts.component.html',
    styles: ``
})
export class LayoutsComponent {
    ShieldUser = ShieldUser
    private modalService = inject(NgbModal)

    open(content: TemplateRef<any>) {
        this.modalService.open(content, { size: 'lg' })
    }

    protected readonly LucideShieldUser = LucideShieldUser;
}
