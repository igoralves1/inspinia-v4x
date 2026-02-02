export type CompanyType = {
    id:number;
    logo: string;
    name: string;
    tags: {
        name: string;
        icon: string;
    }[];
    rating: number;
    description: string;
    stats: {
        name: string;
        count: number;
        prefix?: string;
        suffix?: string;
    }[],
    url: string;
}
