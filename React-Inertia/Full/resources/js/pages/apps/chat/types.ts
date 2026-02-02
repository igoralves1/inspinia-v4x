export type ContactType = {
  id: string
  name: string
  avatar?: string
  lastMessage?: string
  timestamp?: string
  unreadMessages?: number
  isOnline: boolean
}

export type MessageType = {
  id: string
  senderId: string
  text: string
  time: string
}

export type ChatThread = {
  id: string
  participants: ContactType[]
  messages: MessageType[]
}
