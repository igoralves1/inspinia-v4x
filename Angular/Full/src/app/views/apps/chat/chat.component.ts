import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {ChatSidebarComponent} from '@/app/views/apps/chat/components/chat-sidebar.component';
import {NgbDropdownModule, NgbOffcanvas, NgbOffcanvasModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {ChatService} from '@/app/views/apps/chat/chat.service';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {SimplebarAngularComponent, SimplebarAngularModule} from 'simplebar-angular';
import {NgIcon} from '@ng-icons/core';
import {generateInitials} from '@/app/utils/string-utils';
import {LucideAngularModule, LucideMessageSquare} from 'lucide-angular';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-chat',
    imports: [
        PageTitleComponent,
        NgbOffcanvasModule,
        FormsModule,
        ReactiveFormsModule,
        ChatSidebarComponent,
        SimplebarAngularModule,
        NgIcon,
        NgbTooltipModule,
        NgbDropdownModule,
        LucideAngularModule,
        RouterLink
    ],
    templateUrl: './chat.component.html',
    styles: ``
})
export class ChatComponent implements OnInit, AfterViewInit {
    chatForm: FormGroup;
    submitted = false;
    @ViewChild('simplebarRef', {static: false}) simplebarRef!: SimplebarAngularComponent;
    activeChatId: string = '';
    currentMessage = '';

    constructor(public chatService: ChatService, private offcanvasService: NgbOffcanvas, private fb: FormBuilder) {
        this.chatForm = this.fb.group({
            message: ['', Validators.required]
        });
    }


    ngAfterViewInit() {
        this.simplebarRef.SimpleBar.getScrollElement().scrollTop = 300
        this.onListScroll()
    }

    onListScroll() {
        if (this.simplebarRef !== undefined) {
            setTimeout(() => {
                this.simplebarRef.SimpleBar.getScrollElement().scrollTop =
                    this.simplebarRef.SimpleBar.getScrollElement().scrollHeight
            }, 100)
        }
    }


    ngOnInit(): void {
        this.activeChatId = this.chatService.getUsers()[0]?.id || '';
    }

    get messages() {
        return this.chatService.getMessages(this.activeChatId);
    }

    sendMessage() {
        this.submitted = true;

        if (this.chatForm.invalid) {
            this.chatForm.markAllAsTouched();
            return;
        }
        if (!this.currentMessage.trim()) return;
        this.chatService.sendMessage(this.activeChatId, this.currentMessage);
        this.currentMessage = '';
        this.chatForm.reset();
        this.onListScroll()
        this.submitted = false;
    }


    openSidebar(content: TemplateRef<any>) {
        this.offcanvasService.open(content, {panelClass: 'outlook-left-menu outlook-left-menu-lg'})
    }

    get activeUser() {
        return this.chatService.getUsers().find(u => u.id === this.activeChatId);
    }

    protected readonly generateInitials = generateInitials;
    protected readonly LucideMessageSquare = LucideMessageSquare;
}
