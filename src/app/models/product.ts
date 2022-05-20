export interface Product {
    id: number;
    image: string;
    title: string;
    price: number;
    description: string;
    category: string;
    rating: Rating;
}

export interface Rating {
    rate: number;
    count: number;
}