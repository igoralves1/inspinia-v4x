export type TaskItemType = {
    id: number;
    category: {
        name: string;
        variant: string;
    };
    title: string;
    users: string[];
    date: string;
    image?: string;
    status: "todo" | "in-progress" | "done" | "in-review";
    progress?: number;
}
