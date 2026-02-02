import {Component, inject, TemplateRef} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {EmailSidebarComponent} from '@/app/views/apps/email/components/email-sidebar.component';
import {SimplebarAngularModule} from 'simplebar-angular';
import {NgIcon} from '@ng-icons/core';
import {LucideAngularModule, LucideSearch} from 'lucide-angular';
import {NgbCollapseModule, NgbDropdownModule, NgbOffcanvas, NgbTooltip} from '@ng-bootstrap/ng-bootstrap';
import {QuillEditorComponent} from 'ngx-quill';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'app-compose',
    imports: [
        PageTitleComponent,
        EmailSidebarComponent,
        SimplebarAngularModule,
        NgIcon,
        LucideAngularModule,
        NgbCollapseModule,
        QuillEditorComponent,
        FormsModule,
        NgbDropdownModule,
        NgbTooltip
    ],
    templateUrl: './compose.component.html',
    styles: ``
})
export class ComposeComponent {
    protected readonly LucideSearch = LucideSearch;

    isCollapsed = true;
    isCollapsed2 = true;

    private offcanvasService = inject(NgbOffcanvas);

    editorContent: string = `
  <p>Hi <strong><em>James</em></strong>,</p>
                        <p>I hope you're doing well.</p>
                        <p>I'm reaching out regarding the latest updates on our project. Please find the summary below:</p>
                        <ul>
                            <li>All UI components have been reviewed and finalized.</li>
                            <li>The mobile responsiveness is now optimized across all breakpoints.</li>
                            <li>We’re awaiting final client feedback before deployment.</li>
                        </ul>
                        <p>Let me know if you need anything else or if there's anything you'd like us to adjust.</p>
                        <p><br></p>
                        <p>Best regards,</p>
                        <p><em>Damian</em></p>`

    editorConfig= {
        toolbar: [[{ 'header': [false, 1, 2, 3, 4, 5, 6] }], ['bold', 'italic', 'underline', 'strike'], [{ 'color': [] }, { 'background': [] }], ['blockquote', 'code-block'], [{ 'list': 'ordered' }, { 'list': 'bullet' }], ['link', 'image', 'video']]
    }


    open(content: TemplateRef<any>) {
        this.offcanvasService.open(content, {panelClass: 'outlook-left-menu outlook-left-menu-sm'});
    }

}
