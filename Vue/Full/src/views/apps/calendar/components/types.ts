export type ExternalEventType = {
  id: number
  textClass: string
  className: string
  title: string
}

export type OptionsType = {
  value: string
  text: string
}

export type EventInputType = {
  id: string
  title: string
  start: object | number
  end?: object | number
  className: string
}
