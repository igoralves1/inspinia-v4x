export type OrderStatisticsType = {
    id: number;
    title: string;
    count: number;
    change: string;
    icon: string;
    variant: string;
};

export type OrderType = {
    id: string;
    date: string;
    time: string;
    name: string;
    avatar: string;
    email: string;
    amount: number;
    paymentStatus: "paid" | "pending" | "failed";
    orderStatus: "delivered" | "processing" | "cancelled" | "shipped";
    cardImage: string;
    cardNumber: string;
    selected?: boolean;
};
