export type ForumPostType = {
    id: number;
    category: string;
    title: string;
    description: string;
    author: string;
    avatar: string;
    timeStamp: string;
    answers: number;
    votes: number;
    timeLeft: string;
    label: {
        variant: string;
        text: string;
    }
}
