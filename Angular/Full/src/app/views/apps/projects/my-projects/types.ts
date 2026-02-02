export type ProjectType = {
    id: string,
    title: string,
    icon: string,
    variant: string,
    updatedTime: string,
    task: {
        total: number,
        completed: number,
        new?: number,
    },
    files: number,
    comments: number,
    date: string,
    members: string[],
    status: "in-progress" | "pending-review" | "delayed",
    progress: number,
}
