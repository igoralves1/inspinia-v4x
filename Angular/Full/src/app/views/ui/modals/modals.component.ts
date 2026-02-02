import {Component, inject, TemplateRef} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {NgIcon} from '@ng-icons/core';
import {NgbModal, NgbModalModule, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-modals',
    imports: [
        PageTitleComponent,
        UiCardComponent,
        NgIcon,
        NgbModalModule,
        FormsModule
    ],
  templateUrl: './modals.component.html',
  styles: ``
})
export class ModalsComponent {
    private modalService = inject(NgbModal)

    name: string = ''

    open(content: TemplateRef<any>) {
        this.modalService.open(content)
    }

    openModal(content: TemplateRef<HTMLElement>, options: NgbModalOptions) {
        this.modalService.open(content, options)
    }

    openvaryingModal(content: TemplateRef<HTMLElement>, name: string) {
        this.modalService.open(content)
        this.name = name
    }
}
