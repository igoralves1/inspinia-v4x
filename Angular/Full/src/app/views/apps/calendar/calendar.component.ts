import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {FullCalendarComponent, FullCalendarModule} from '@fullcalendar/angular';
import {CalendarOptions, EventApi, EventClickArg} from '@fullcalendar/core';
import interactionPlugin, {Draggable} from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list'
import {FormsModule} from '@angular/forms';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {NgIcon} from '@ng-icons/core';
import {SimplebarAngularModule} from 'simplebar-angular';

@Component({
    selector: 'app-calendar',
    imports: [
        PageTitleComponent,
        FullCalendarModule,
        FormsModule,

        NgIcon,
        SimplebarAngularModule
    ],
    templateUrl: './calendar.component.html',
    styles: ``
})
export class CalendarComponent implements OnInit {
    @ViewChild('calendar') calendarComponent!: FullCalendarComponent;
    @ViewChild('eventModal') eventModal!: TemplateRef<any>;

    currentEventTitle: string = '';
    currentEventVariant: string = '';
    currentEditingEvent: EventApi | null = null;
    modalRef!: NgbModalRef;
    selectedDate: Date | null = null;

    defaultEvents = [
        {
            id: 'event-1',
            title: 'Interview - Backend Engineer',
            start: new Date(),
            end: new Date(),
            variant: 'primary'
        },
        {
            id: 'event-2',
            title: 'Design Sprint Planning',
            start: new Date(Date.now() + 16000000),
            end: new Date(Date.now() + 20000000),
            variant: 'info'
        },
        {
            id: 'event-3',
            title: 'Project Kick-off Meeting',
            start: new Date(Date.now() + 400000000),
            end: new Date(Date.now() + 440000000),
            variant: 'purple'
        },
        {
            id: 'event-4',
            title: 'UI/UX Design Review',
            start: new Date(Date.now() + 80000000),
            end: new Date(Date.now() + 180000000),
            variant: 'warning'
        },
        {
            id: 'event-5',
            title: 'Code Review - Frontend',
            start: new Date(Date.now() + 200000000),
            end: new Date(Date.now() + 220000000),
            variant: 'success'
        },
        {
            id: 'event-6',
            title: 'Team Stand-up Meeting',
            start: new Date(Date.now() + 340000000),
            end: new Date(Date.now() + 345000000),
            variant: 'secondary'
        },
        {
            id: 'event-7',
            title: 'Client Presentation Prep',
            start: new Date(Date.now() + 1200000000),
            end: new Date(Date.now() + 1300000000),
            variant: 'danger'
        },
        {
            id: 'event-8',
            title: 'Backend API Integration',
            start: new Date(Date.now() + 2500000000),
            end: new Date(Date.now() + 2600000000),
            variant: 'dark'
        }
    ];

    externalEvents = [
        {
            title: "Project Kickoff",
            variant: "primary"
        },
        {
            title: "Team Sync-up",
            variant: "secondary"
        },
        {
            title: "Client Meeting",
            variant: "success"
        },
        {
            title: "Product Launch",
            variant: "danger"
        },
        {
            title: "Internal Review",
            variant: "info"
        },
        {
            title: "Quarterly Planning",
            variant: "warning"
        },
        {
            title: "Year-End Celebration",
            variant: "dark"
        },
        {
            title: "Annual Conference",
            variant: "purple"
        }
    ]


    calendarOptions!: CalendarOptions;

    constructor(private modalService: NgbModal) {
    }

    ngOnInit(): void {
        this.calendarOptions = {
            plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
            initialView: 'dayGridMonth',
            themeSystem: 'bootstrap',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
            },
            buttonText: {
                today: 'Today',
                month: 'Month',
                week: 'Week',
                day: 'Day',
                list: 'List',
                prev: 'Prev',
                next: 'Next',
            },
            slotDuration: '00:30:00',
            slotMinTime: '07:00:00',
            slotMaxTime: '19:00:00',

            height: window.innerHeight - 240,
            editable: true,
            droppable: true,
            selectable: true,
            events: this.defaultEvents,
            dateClick: this.handleDateClick.bind(this),
            eventClick: this.handleEventClick.bind(this),
            eventDidMount: (info) => {
                const variant = info.event.extendedProps['variant'];
                if (variant) {
                    const el = info.el;
                    el.classList.add(
                        `bg-${variant}-subtle`,
                        `text-${variant}`,
                        'border-start',
                        'border-3',
                        `border-${variant}`
                    );
                }
            }
        };
    }

    ngAfterViewInit(): void {
        const containerEl = document.getElementById('external-events');
        if (containerEl) {
            new Draggable(containerEl, {
                itemSelector: '.external-event',
                eventData: function (eventEl) {
                    const title = eventEl.innerText.trim();
                    const variant = eventEl.getAttribute('data-variant') || 'primary';
                    return {
                        title,
                        extendedProps: {variant}
                    };
                }
            });
        }
    }

    offsetDate(days: number): Date {
        return new Date(new Date().setDate(new Date().getDate() + days));
    }

    handleDateClick(arg: any): void {
        this.selectedDate = arg.date;
        this.openModal();
    }

    handleEventClick(arg: EventClickArg): void {
        this.openModal(arg.event);
    }


    openModal(event?: EventApi): void {
        this.currentEditingEvent = event || null;
        this.currentEventTitle = event?.title || '';
        this.currentEventVariant = event?.extendedProps['variant'] || 'primary';
        this.modalRef = this.modalService.open(this.eventModal, {centered: true});
    }

    saveEvent(): void {
        if (!this.currentEventTitle || !this.currentEventVariant) return;
        const calendarApi = this.calendarComponent.getApi();

        if (this.currentEditingEvent) {
            const oldEvent = this.currentEditingEvent.toPlainObject();
            this.currentEditingEvent.remove();
            calendarApi.addEvent({
                ...oldEvent,
                title: this.currentEventTitle,
                extendedProps: {
                    variant: this.currentEventVariant
                }
            });
        } else {
            calendarApi.addEvent({
                id: String(Date.now()),
                title: this.currentEventTitle,
                start: this.selectedDate ?? new Date(),
                allDay: true,
                extendedProps: {
                    variant: this.currentEventVariant
                }
            });
        }

        this.modalRef.close();
        this.selectedDate = null;
        this.currentEventVariant = '';
    }

    deleteEvent(): void {
        this.currentEditingEvent?.remove();
        this.modalRef.close();
        this.selectedDate = null;
        this.currentEventVariant = '';
    }
}
