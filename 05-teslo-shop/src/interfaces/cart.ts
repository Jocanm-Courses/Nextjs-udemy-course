import { ISizes } from "./";

export interface ICartProduct {
    id: string;
    description: string;
    image: string;
    price: number;
    sizes: ISizes;
    slug: string;
    title: string;
    gender: 'men' | 'women' | 'kid' | 'unisex'
    quantity?: number
}

