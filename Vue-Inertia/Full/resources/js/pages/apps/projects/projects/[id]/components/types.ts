
export type TeamMemberType = {
    avatar: string
    name: string
    role: string
    url: string
}

export type FileType = {
    icon: string
    name: string
    size: number
}

export type CommentType = {
    name: string
    avatar: string
    date: string
    time: string
    message: string
    reply?: CommentType[]
}

export type TaskType = {
    id: number
    title: string
    name: string
    avatar: string
    time: string
    tasks: {
        total: number
        completed: number
    }
    comments: number
    status: 'completed' | 'delayed' | 'pending' | 'in-progress' | 'review' | 'planned'
}

export type ActivityType = {
    name: string
    avatar: string
    action: string
    datetime: string
    timeAgo: string
    extra?: {
        type: 'button' | 'message'
        label?: string
        icon?: string
        url?: string
        message?: string
    }
}
