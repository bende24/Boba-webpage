import { Injectable } from '@angular/core';
import { Tea } from './tea.interface';

@Injectable({
	providedIn: 'root', // Indicates that the service is provided at the root level
})
export class TeaItemService {
	private teas: Tea[] = [
		{
			specialBanner: '',
			image: {
				url: '../assets/teas/green_tea.png',
				backgroundColor: '#FD9F7D',
			},
			name: 'Green Tea',
			description: 'Strawberry, Lemon, Mango, Passionfruit, Peach',
			toppings: ['Grape boba', 'Mango boba', 'Kiwi boba', 'Tapioca'],
			toppingsTextColor: '#BB1E1C',
			toppingsBackgroundColor: '#FBE2D9',
		},
		{
			specialBanner: '',
			image: {
				url: '../assets/teas/hibiscus_green_tea.png',
				backgroundColor: '#F7B9BF',
			},
			name: 'Hibiscus Green Tea',
			description:
				'A little sweet, a little tart, and a whole lot of refreshing!',
			toppings: ['Grape boba', 'Kiwi boba', 'Tapioca'],
			toppingsTextColor: '#69192F',
			toppingsBackgroundColor: '#F9DBDE',
		},
	];

	getTeas(): Tea[] {
		return this.teas;
	}
}
