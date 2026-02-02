export type ActionType = {
    icon: string;
    label: string;
}
export type EmailItemType = {
    id: number;
    isStarred: boolean;
    avatar?: string;
    variant?: string;
    name: string;
    subject: string;
    snippet: string;
    attachments: number;
    date: string;
    time: string;
    isRead: boolean;
    selected?: boolean;
}
