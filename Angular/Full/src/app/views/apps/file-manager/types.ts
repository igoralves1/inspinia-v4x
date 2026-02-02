export type FileMenuType = {
    label: string,
    icon: string,
    badge?: {
        text: string;
        variant: string;
    }
    link: string;
}

export type FolderType = {
    name: string;
    size: number;
}

export type FileRecordType = {
    name: string;
    icon: string;
    size: number;
    type: string;
    url: string;
    modified: string;
    avatar: string;
    email: string;
    users: string[];
    isFavorite: boolean,
    selected?: boolean;
}
