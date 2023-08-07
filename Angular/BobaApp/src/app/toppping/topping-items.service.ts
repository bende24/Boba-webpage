import { Injectable } from '@angular/core';
import { Topping } from './topping.interface';

@Injectable({
	providedIn: 'root',
})
export class ToppingItemsService {
	private toppings: Topping[] = [
		{
			name: 'Popping Boba',
			description:
				'Popping Boba is tiny bursts of joy that explode with flavor in your mouth!',
			toppings: {
				names: ['Grape', 'Mango', 'Kiwi', 'Strawberry'],
                toppingsTextColor: "#BB1E1C",
                toppingsBackgroundColor: "#FBE2D9"
			},
		},
		{
			name: 'Jelly',
			description:
				'Bubble tea jelly is like a whimsical dance of jiggly delight in your mouth! ',
			toppings: {
				names: ['Aloe', 'Coffe', 'Fruit'],
                toppingsTextColor: "#8A3B03",
                toppingsBackgroundColor: "#FDF0D7"
			},
		},
		{
			name: 'Special',
			description:
				'Experience extraordinary flavors and textures with our special toppings! ',
			toppings: {
				names: ['Tapioca', 'Pudding', 'Ice'],
                toppingsTextColor: "#542003",
                toppingsBackgroundColor: "#EFDBCF"
			},
		},
	];

	get(): Topping[] {
		return this.toppings;
	}
}
