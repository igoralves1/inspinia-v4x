import type { EventClickArg, EventDropArg, EventInput } from '@fullcalendar/core'
import type { DateClickArg, DropArg } from '@fullcalendar/interaction'

export type CalendarFormType = {
  isEditable: boolean
  eventData?: EventInput
  onUpdateEvent: (data: any) => void
  onRemoveEvent: () => void
  onAddEvent: (data: any) => void
  open: boolean
  toggle: () => void
}

export type CalendarProps = {
  onDateClick: (arg: DateClickArg) => void
  onEventClick: (arg: EventClickArg) => void
  onDrop: (arg: DropArg) => void
  onEventDrop: (arg: EventDropArg) => void
  events: EventInput[]
}

export type SubmitEventType = {
  title: string
  category: string
}
