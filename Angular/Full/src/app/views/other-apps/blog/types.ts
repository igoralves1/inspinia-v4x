export type BlogType = {
    id: number;
    image?: string;
    title?: string;
    description?: string;
    date?: string;
    comments?: number
    views?: string;
    user: {
        name: string;
        avatar: string;
    }
    category?: string;

    tags?: string[],
    variant?: string;
};
