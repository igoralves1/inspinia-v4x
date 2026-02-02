import { Component } from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {NgIcon} from '@ng-icons/core';
import {NgbToastModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-notifications',
    imports: [
        PageTitleComponent,
        UiCardComponent,
        NgIcon,
        NgbToastModule,
        FormsModule,
    ],
  templateUrl: './notifications.component.html',
  styles: ``
})
export class NotificationsComponent {
    liveToast = false
    showToast = true
    showToast2 = true
    showToast3 = true
    placement = true
    toastPlacement: string = ''
    close() {
        this.showToast = false
    }
}
