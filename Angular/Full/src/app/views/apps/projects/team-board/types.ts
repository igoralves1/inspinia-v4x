export type TeamType = {
    id: number;
    name: string;
    members: string[];
    description: string;
    stats: {
        icon: string;
        name: string;
        count?: {
            value: number | string;
            prefix?: string;
            suffix?: string;
        }
    }[],
    progress: number;
    progressTitle: string;
    lastUpdatedTime: string;
    isNew?: boolean;
}
