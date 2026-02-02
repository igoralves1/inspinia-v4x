import { Component, inject, type OnDestroy } from '@angular/core';
import { PageTitleComponent } from "@app/components/page-title.component";
import { UiCardComponent } from "@app/components/ui-card.component";
import { FaviconService } from '@core/services/favicon.service';
@Component({
    selector: 'app-live-favicon',
    imports: [PageTitleComponent, UiCardComponent],
    templateUrl: './live-favicon.component.html',
    styles: ``
})
export class LiveFaviconComponent implements OnDestroy {
    private favicon = inject(FaviconService)

    setBadge(count: number | string, color: string) {
        this.favicon.setFaviconWithBadge(count, color, '/favicon.ico');
    }

    ngOnDestroy(): void {
        this.favicon.resetFavicon('/favicon.ico');
    }
}
