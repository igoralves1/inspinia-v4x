
export type ActionType = {
  icon: string
  label: string
}

export type EmailSidebarItemType = {
  label: string
  icon: string
  link: string
  badge?: {
    variant: string
    text: string
  }
}

export type EmailType = {
  id: number
  isStarred: boolean
  variant?: string
  avatar?: string
  name: string
  subject: string
  snippet: string
  attachments: number
  date: string
  time: string
  isRead: boolean
}
