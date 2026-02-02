import PageBreadcrumb from '@/components/PageBreadcrumb'
import SimpleBar from 'simplebar-react'
import { useEffect, useRef } from 'react'
import { Button, Card, CardBody, Container } from 'react-bootstrap'

import AddEditModal from '@/views/apps/calendar/components/AddEditModal.tsx'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { Draggable } from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'

import useCalendar from '@/hooks/useCalendar'
import useViewPort from '@/hooks/useViewPort'

import { TbCircleFilled, TbPlus } from 'react-icons/tb'

const externalEvents = [
  { id: '11', title: 'Project Kickoff', variant: 'primary' },
  { id: '12', title: 'Team Sync-up', variant: 'secondary' },
  { id: '13', title: 'Client Meeting', variant: 'success' },
  { id: '14', title: 'Product Launch', variant: 'danger' },
  { id: '15', title: 'Internal Review', variant: 'info' },
  { id: '16', title: 'Quarterly Planning', variant: 'warning' },
  { id: '17', title: 'Year-End Celebration', variant: 'dark' },
  { id: '18', title: 'Annual Conference', variant: 'purple' },
]

const Page = () => {
  const {
    createNewEvent,
    eventData,
    events,
    isEditable,
    onAddEvent,
    onCloseModal,
    onDateClick,
    onDrop,
    onEventClick,
    onEventDrop,
    onRemoveEvent,
    onUpdateEvent,
    show,
  } = useCalendar()

  const { height } = useViewPort()

  const externalEventsEle = useRef<HTMLDivElement | null>(null)

  const draggableInstance = useRef<Draggable | null>(null)

  useEffect(() => {
    if (externalEventsEle.current) {
      draggableInstance.current = new Draggable(externalEventsEle.current, {
        itemSelector: '.external-event',
        eventData: function (eventEl) {
          return {
            title: eventEl.innerText,
            classNames: eventEl.getAttribute('data-class'),
          }
        },
      })
    }

    return () => {
      if (draggableInstance.current) {
        draggableInstance.current.destroy()
      }
    }
  }, [])

  return (
    <Container fluid>
      <PageBreadcrumb title="Calendar" subtitle="Apps" />

      <div className="outlook-box">
        <Card className="h-100 mb-0 d-none d-lg-flex rounded-end-0 overflow-y-auto">
          <CardBody>
            <Button variant="primary" className="w-100 btn-new-event" onClick={createNewEvent}>
              <TbPlus className="me-2 align-middle" />
              Create New Event
            </Button>

            <div ref={externalEventsEle}>
              <p className="text-muted mt-2 fst-italic fs-xs mb-3">Drag and drop your event or click in the calendar</p>
              {externalEvents.map((event) => (
                <div
                  key={event.id}
                  className={`external-event fc-event bg-${event.variant}-subtle text-${event.variant} border-start border-3 border-${event.variant} fw-semibold d-flex align-items-center`}
                  data-class={`bg-${event.variant}-subtle text-${event.variant} border-start border-3 border-${event.variant}`}>
                  <TbCircleFilled className="me-2" />
                  {event.title}
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        <Card className="h-100 mb-0 rounded-start-0 flex-grow-1 border-start-0">
          <div className="d-lg-none d-inline-flex card-header">
            <Button variant="primary" className="btn-new-event" onClick={createNewEvent}>
              <TbPlus className="me-2 align-middle" />
              Create New Event
            </Button>
          </div>

          <SimpleBar className="card-body" style={{ height: 'calc(100% - 350px)' }} data-simplebar data-simplebar-md>
            <FullCalendar
              initialView="dayGridMonth"
              plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin]}
              bootstrapFontAwesome={false}
              handleWindowResize={true}
              slotDuration="00:30:00"
              slotMinTime="07:00:00"
              slotMaxTime="19:00:00"
              buttonText={{
                today: 'Today',
                month: 'Month',
                week: 'Week',
                day: 'Day',
                list: 'List',
                prev: 'Prev',
                next: 'Next',
              }}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
              }}
              height={height - 240}
              editable={true}
              selectable={true}
              droppable={true}
              events={events}
              dateClick={onDateClick}
              eventClick={onEventClick}
              drop={onDrop}
              eventDrop={onEventDrop}
            />
          </SimpleBar>
        </Card>
      </div>

      <AddEditModal
        eventData={eventData}
        isEditable={isEditable}
        onAddEvent={onAddEvent}
        onRemoveEvent={onRemoveEvent}
        onUpdateEvent={onUpdateEvent}
        open={show}
        toggle={onCloseModal}
      />
    </Container>
  )
}

export default Page
