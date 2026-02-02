import {Component, inject, TemplateRef} from '@angular/core';
import {
    SidebarContentComponent
} from '@/app/views/dashboards/dashboard-3/components/sidebar/components/sidebar-content.component';
import {NgIcon} from '@ng-icons/core';
import {NgbOffcanvas} from '@ng-bootstrap/ng-bootstrap';
import {SimplebarAngularModule} from 'simplebar-angular';

@Component({
  selector: 'app-sidebar',
    imports: [
        SidebarContentComponent,
        NgIcon,
        SimplebarAngularModule
    ],
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent {
    private offcanvasService = inject(NgbOffcanvas);

    open(content: TemplateRef<any>) {
        this.offcanvasService.open(content, {panelClass: 'asidebar border-start overflow-hidden', position: 'end'})
    }

}
