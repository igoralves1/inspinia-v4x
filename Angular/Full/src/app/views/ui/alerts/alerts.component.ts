import {Component} from '@angular/core';
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {NgIcon} from '@ng-icons/core';

interface Alert {
    id: number;
    message: string;
    type: string;
}

@Component({
    selector: 'app-alerts',
    standalone: true,
    imports: [NgbAlertModule, PageTitleComponent, UiCardComponent, NgIcon],
    templateUrl: './alerts.component.html',
    styles: [``]
})
export class AlertsComponent {
    alertCounter = 0;

    showAlerts = {
        primary: true,
        secondary: true,
        dark: true,
        purple: true,
        danger: true,
        warning: true,
        info: true,
        light: true
    };

    alerts: Alert[] = [];

    alertData: Alert[] = [
        {id: 1, type: 'primary', message: 'Heads up! This is a primary alert with important information.'},
        {id: 2, type: 'secondary', message: 'Notice: This is a secondary alert with supporting details.'},
        {id: 3, type: 'success', message: 'Success! Your action was completed successfully.'},
        {id: 4, type: 'danger', message: 'Error! Something went wrong—please try again later.'},
        {id: 5, type: 'warning', message: 'Warning! Please review your input before proceeding.'},
        {id: 6, type: 'info', message: 'Info: Here’s something you might find helpful.'},
        {id: 7, type: 'light', message: 'Note: This is a light alert with a subtle message.'},
        {id: 8, type: 'dark', message: 'Notice: This dark alert is great for general messages.'},
        {
            id: 9,
            type: 'purple',
            message: 'Heads up: This purple alert is perfect for catching attention with general information.'
        }
    ];

    linkAlert = [
        {
            variant: 'primary',
            content: `Need more info? Check out <a href="javascript:void(0);" class="alert-link">this primary link</a>.`
        },
        {
            variant: 'secondary',
            content: `This is a secondary alert with <a href="javascript:void(0);" class="alert-link">a helpful link</a>.`
        },
        {
            variant: 'success',
            content: `Operation successful! View results <a href="javascript:void(0);" class="alert-link">here</a>.`
        },
        {
            variant: 'danger',
            content: `Something went wrong. Learn more <a href="javascript:void(0);" class="alert-link">via this alert</a>.`
        },
        {
            variant: 'warning',
            content: `Heads up! Check <a href="javascript:void(0);" class="alert-link">this warning</a>.`
        },
        {
            variant: 'info',
            content: `Click <a href="javascript:void(0);" class="alert-link">this info link</a> for help.`
        },
        {
            variant: 'light',
            content: `A light reminder with <a href="javascript:void(0);" class="alert-link">a gentle link</a>.`
        },
        {
            variant: 'dark',
            content: `General alert: <a href="javascript:void(0);" class="alert-link">More info</a>.`
        },
        {
            variant: 'purple',
            content: `Important notice: <a href="javascript:void(0);" class="alert-link">Click here</a>.`
        }
    ];

    triggerAlert(): void {
        const newAlert: Alert = {
            id: this.alertCounter++,
            message: `Alert #${this.alertCounter}: You triggered a live alert!`,
            type: 'success'
        };
        this.alerts.push(newAlert);
    }

    removeAlert(id: number): void {
        this.alerts = this.alerts.filter(alert => alert.id !== id);
    }

    close(alert: Alert): void {
        const index = this.alertData.indexOf(alert);
        if (index > -1) this.alertData.splice(index, 1);
    }
}
