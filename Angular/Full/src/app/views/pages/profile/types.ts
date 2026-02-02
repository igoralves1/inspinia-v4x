
export type BlogType = {
    category: string;
    image: string;
    title: string;
    description: string;
    tags: string[];
    date: string;
    comments: number;
    views: number;
    author: {
        name: string;
        avatar: string;
    };
    link: string;
}
