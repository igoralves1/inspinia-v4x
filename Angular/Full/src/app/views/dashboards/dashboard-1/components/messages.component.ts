import {Component} from '@angular/core';
import {messages} from '@/app/views/dashboards/dashboard-1/data';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-messages',
    imports: [
        RouterLink
    ],
    template: `
        <div class="p-4 border-end border-dashed">
            <h4 class="fs-lg mb-1">Welcome to INSPINIA+ Admin Theme.</h4>
            <span class="text-muted">You have <span class="text-primary fw-semibold">42</span> messages and 6 notifications.</span>
            <ul class="list-group list-group-flush mt-3">
                @for (message of messages; track i; let i = $index) {
                    <li
                        class="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
                        <div>
                                            <span class="badge avatar-xs me-2 text-bg-{{message.variant}}"><span
                                                class="avatar-title fw-medium fs-sm">{{ i + 1 }}</span></span>
                            {{ message.label }}
                        </div>
                        <span class="text-muted">{{ message.timestamp }}</span>
                    </li>
                }
            </ul>

            <div class="text-center mt-2">
                <a [routerLink]="[]" class="btn btn-secondary rounded-pill">View Messages</a>
            </div>
        </div>
    `,
    styles: ``
})
export class MessagesComponent {

    protected readonly messages = messages;
}
