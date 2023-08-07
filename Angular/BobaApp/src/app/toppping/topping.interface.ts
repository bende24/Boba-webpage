import { ToppingBadgeCollection } from "./badge/topping-badge-collection.interface";

export interface Topping{
    name: string,
    description: string,
    toppings: ToppingBadgeCollection
}