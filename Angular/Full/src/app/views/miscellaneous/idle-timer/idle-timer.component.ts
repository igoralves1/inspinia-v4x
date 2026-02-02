import {Component, inject, type OnInit} from '@angular/core';
import {IdleDetectorService} from '@core/services/idle-detector.service';
import {PageTitleComponent} from "@app/components/page-title.component";
import {NgIcon} from '@ng-icons/core';
import {NgbAlertModule, NgbToastModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-idle-timer',
    imports: [PageTitleComponent, NgIcon, NgbToastModule,NgbAlertModule],
    templateUrl: './idle-timer.component.html',
    styles: ``
})
export class IdleTimerComponent implements OnInit{
    toasts: any[] = [];
    showAlert = false;
    private idleService = inject(IdleDetectorService);

    ngOnInit(): void {
        this.idleService.startMonitoring();

        this.idleService.onIdle.subscribe(() => {
            this.showAlert = true;
            this.showToast('You\'ve been inactive for too long. Please interact with the page to continue.', 'Idle Alert', 'text-bg-warning border-warning', 3000);
        });

        this.idleService.onResume.subscribe(() => {
            this.showAlert = false;
            this.showToast('We missed you! Welcome back!', ' Welcome back!', 'text-bg-success border-success', 3000);
        });
    }

    showToast(text: string, header: string, classname: string, delay: number) {
        this.toasts.push({ text, header, classname, delay });
    }

    remove(toast: any) {
        this.toasts = this.toasts.filter(t => t !== toast);
    }
}
