import { Component, inject } from '@angular/core';
import { PageTitleComponent } from "@app/components/page-title.component";
import { UiCardComponent } from "@app/components/ui-card.component";
import { ClipboardService } from '@core/services/clipboard.service';
import { NgIcon } from '@ng-icons/core';
@Component({
    selector: 'app-clipboard',
    imports: [PageTitleComponent, UiCardComponent, NgIcon],
    templateUrl: './clipboard.component.html',
    styles: ``
})
export class ClipboardComponent {


    private clipboard = inject(ClipboardService)

    copyFromElement(el: HTMLElement) {
        const value = (el as HTMLInputElement).value || el.innerText;
        this.clipboard.highlightElementText(el);
        this.clipboard.copyText(value)
    }

    cutFromInput(el: HTMLInputElement | HTMLTextAreaElement) {
        this.clipboard.cutText(el)
    }
}
