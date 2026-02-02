
export type ProductType = {
    id: number,
    image: string,
    name: string,
    discount: number;
    manufacturer: string,
    category: string,
    sku: string,
    stock: number,
    sellPrice: number;
    price: number,
    orders: number,
    rating: number,
    reviews: number,
    status: "published" | "pending" | "out-of-stock",
    date: string,
    time: string;
    selected?: boolean,
}
