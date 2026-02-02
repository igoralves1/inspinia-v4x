import {Component} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {PinNoteType} from '@/app/views/other-apps/pin-board/types';
import {PinBoardCardComponent} from '@/app/views/other-apps/pin-board/components/pin-board-card.component';
import {FormsModule} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-pin-board',
    imports: [
        PageTitleComponent,
        PinBoardCardComponent,
        FormsModule
    ],
    templateUrl: './pin-board.component.html',
    styles: ``
})
export class PinBoardComponent {


    newNote: Partial<PinNoteType> = {
        title: '',
        description: '',
        variant: 'primary'
    };

    constructor(private modalService: NgbModal) {}

    openAddModal(content: any) {
        this.newNote = { title: '', description: '', variant: 'primary' };
        this.modalService.open(content, { centered: true });
    }

    addNote() {
        const now = new Date();
        const formattedDate = now.toLocaleDateString('en-GB').split('/').join('-');
        const formattedTime = now.toTimeString().split(' ')[0];

        this.pinNotes.unshift({
            time: formattedTime,
            date: formattedDate,
            title: this.newNote.title!,
            description: this.newNote.description!,
            variant: this.newNote.variant!
        });
    }

    deleteNote(index: number) {
        this.pinNotes.splice(index, 1);
    }
    pinNotes: PinNoteType[] = [
        {
            time: '14:22:07',
            date: '08-04-2025',
            title: 'Client feedback summary',
            description: 'Positive response on UI, requested dark mode toggle and faster load times.',
            variant: 'primary'
        },
        {
            time: '17:09:33',
            date: '05-04-2025',
            title: 'Blog content ideas',
            description: 'Write about upcoming trends in web design and practical CSS tips.',
            variant: 'danger'
        },
        {
            time: '10:55:10',
            date: '02-04-2025',
            title: 'Code optimization checklist',
            description: 'Refactor JS functions, minimize DOM manipulation, and lazy load assets.',
            variant: 'warning'
        },
        {
            time: '09:30:44',
            date: '30-03-2025',
            title: 'Newsletter draft',
            description: "Focus on April's product update, new feature highlights, and tutorials.",
            variant: 'info'
        },
        {
            time: '16:47:25',
            date: '28-03-2025',
            title: 'Bug report log',
            description: 'Users reporting login timeout issues on mobile—investigate session handling.',
            variant: 'dark'
        },
        {
            time: '11:18:03',
            date: '26-03-2025',
            title: 'Design review notes',
            description: 'Refine hero section spacing and use softer gradients for cards background.',
            variant: 'light'
        },
        {
            time: '11:18:03',
            date: '26-03-2025',
            title: 'Design review notes',
            description: 'Refine hero section spacing and use softer gradients for cards background.',
            variant: 'purple'
        },
        {
            time: '08:45:12',
            date: '10-04-2025',
            title: 'Team meeting recap',
            description: 'Discussed key milestones, delegated tasks, and set deadlines for the next sprint.',
            variant: 'success'
        }
    ]
}
