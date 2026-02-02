import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {messages} from '@/app/views/widgets/data';
import {FormsModule} from '@angular/forms';
import {SimplebarAngularComponent, SimplebarAngularModule} from 'simplebar-angular';
import {NgIcon} from '@ng-icons/core';
import {LucideAngularModule, LucideMessageSquare} from 'lucide-angular';

@Component({
    selector: 'app-chat-card',
    imports: [FormsModule, SimplebarAngularModule, NgIcon, LucideAngularModule],
    template: `
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">Chat</h4>
            </div>
            <ngx-simplebar style="height: 380px;" #scrollRef>
                <div class="card-body py-0">
                    @for (msg of messages; track $index) {
                        <div class="d-flex align-items-start gap-2 my-3 chat-item"
                             [class]="msg.fromUser ? 'text-end justify-content-end' : ''">

                            @if (!msg.fromUser) {
                                <img [src]="msg.avatar" class="avatar-md rounded-circle" alt="User">
                            }

                            <div>
                                <div class="chat-message py-2 px-3 rounded"
                                     [class]="msg.fromUser ? 'bg-info-subtle' : 'bg-warning-subtle'">
                                    {{ msg.message }}
                                </div>
                                <div class="text-muted fs-xs mt-1">
                                    <ng-icon name="tablerClock"/>
                                    {{ msg.time }}
                                </div>
                            </div>

                            @if (msg.fromUser) {
                                <img [src]="msg.avatar" class="avatar-md rounded-circle" alt="User">
                            }
                        </div>
                    }
                </div>
            </ngx-simplebar>

            <div class="card-footer bg-body-secondary border-top border-dashed border-bottom-0">
                <div class="d-flex gap-2">
                    <div class="app-search flex-grow-1">
                        <input type="text" class="form-control bg-light-subtle border-light"
                               placeholder="Enter message..."
                               [(ngModel)]="inputMessage" (keyup.enter)="sendMessage()">
                        <lucide-angular [img]="LucideMessageSquare" class="app-search-icon text-muted"/>
                    </div>
                    <button type="button" class="btn btn-primary btn-icon" (click)="sendMessage()">
                        <ng-icon name="tablerSend2" class="fs-xl"/>
                    </button>
                </div>
            </div>
        </div>
    `,
    styles: ``
})
export class ChatCardComponent implements AfterViewInit {
    inputMessage = '';
    @ViewChild('scrollRef', {static: false})
    scrollRef!: SimplebarAngularComponent

    ngAfterViewInit() {
        this.scrollRef.SimpleBar.getScrollElement().scrollTop = 300
        this.onListScroll()
    }

    onListScroll() {
        if (this.scrollRef !== undefined) {
            setTimeout(() => {
                this.scrollRef.SimpleBar.getScrollElement().scrollTop =
                    this.scrollRef.SimpleBar.getScrollElement().scrollHeight
            }, 100)
        }
    }

    sendMessage() {
        const messageText = this.inputMessage.trim();
        if (!messageText) return;

        const currentTime = new Date();
        const formattedTime = currentTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

        messages.push({
            message: this.inputMessage,
            time: formattedTime,
            fromUser: true,
            avatar: 'assets/images/users/user-2.jpg'
        });
        this.inputMessage = '';
        setTimeout(() => {
            messages.push({
                message: messageText,
                time: formattedTime,
                fromUser: false,
                avatar: 'assets/images/users/user-5.jpg'
            });
            this.onListScroll()
        }, 1000);
        this.onListScroll()

    }

    protected readonly messages = messages;
    protected readonly LucideMessageSquare = LucideMessageSquare;
}

