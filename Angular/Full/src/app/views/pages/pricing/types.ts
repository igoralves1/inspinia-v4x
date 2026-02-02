export type PricingType = {
    name: string;
    description: string;
    price: number;
    paymentType: string;
    text: string;
    features: {
        icon: string;
        name: string;
        variant: string;
    }[];
    buttonText: string;
    isPopular?: boolean
}