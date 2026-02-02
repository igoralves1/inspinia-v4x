export type ProductType = {
    id: number,
    image: string,
    name: string,
    manufacturer: string,
    category: string,
    sku: string,
    stock: number,
    price: number,
    orders: number,
    rating: number,
    reviews: number,
    status: "published" | "pending" | "out-of-stock",
    date: string,
    time: string;
    selected?: boolean;
}
