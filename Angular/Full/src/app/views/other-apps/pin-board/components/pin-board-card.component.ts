import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PinNoteType} from '@/app/views/other-apps/pin-board/types';
import {NgIcon} from '@ng-icons/core';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-pin-board-card',
    imports: [ NgIcon,NgbModalModule],
    template: `
        <p class="text-end fs-10">{{ note.time }} {{ note.date }}</p>
        <h4 class="fs-md">{{ note.title }}</h4>
        <p>{{ note.description }}</p>
        <a href="javascript:void(0)" (click)="onDelete()" class="pin-board-delete fs-lg">
            <ng-icon name="tablerTrash"/>
        </a>
    `,
    styles: ``
})
export class PinBoardCardComponent {
    @Input() note!: PinNoteType
    @Output() delete = new EventEmitter<void>();

    onDelete() {
        this.delete.emit();
    }
}
