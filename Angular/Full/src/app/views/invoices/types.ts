export type InvoiceType = {
    id: string;
    date: string;
    name: string;
    avatar?: string;
    email: string;
    purchase: string;
    amount: number;
    status: "paid" | "pending" | "overdue" | "draft",
    selected?: boolean;
}
