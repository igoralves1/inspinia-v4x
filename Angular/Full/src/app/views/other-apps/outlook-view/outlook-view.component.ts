import {ChangeDetectorRef, Component, inject, TemplateRef, ViewChild} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {NgbNavModule, NgbOffcanvas, NgbOffcanvasModule} from '@ng-bootstrap/ng-bootstrap';
import {SimplebarAngularModule} from 'simplebar-angular';
import {NgIcon} from '@ng-icons/core';
import {OutlookNavComponent} from '@/app/views/other-apps/outlook-view/components/outlook-nav/outlook-nav.component';

@Component({
  selector: 'app-outlook-view',
    imports: [
        PageTitleComponent,
        NgbOffcanvasModule,
        NgbNavModule,
        SimplebarAngularModule,
        NgIcon,
        OutlookNavComponent
    ],
  templateUrl: './outlook-view.component.html',
  styles: ``
})
export class OutlookViewComponent {
    activeId = 1;
    navReady = false;
    constructor(private cdr: ChangeDetectorRef) {}
    @ViewChild('content', { static: true }) contentRef!: TemplateRef<any>;

    @ViewChild(OutlookNavComponent) set navSetter(nav: OutlookNavComponent) {
        if (nav && !this.navReady) {
            this.navComponent = nav;
            this.navReady = true;
            this.cdr.detectChanges();
        }
    }
    navComponent!: OutlookNavComponent;
    private offcanvasService = inject(NgbOffcanvas);

    open(content: TemplateRef<any>){
        this.offcanvasService.open(content,{panelClass:'outlook-left-menu',position:'start'})
    }
}
