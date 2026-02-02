export type ChatUserType = {
    id: string;
    name: string;
    avatar?: string;
    lastMessage: string;
    time: string;
    unread?: number;
    online?: boolean;
}

export type MessageType = {
    from: 'me' | 'them';
    content: string;
    time: string;
}

