import { Injectable } from '@angular/core';
import { Tea } from './tea.interface';

@Injectable({
	providedIn: 'root', // Indicates that the service is provided at the root level
})
export class TeaItemsService {
	private teas: Tea[] = [
		{
			image: {
				url: '../assets/teas/green_tea.png',
				backgroundColor: '#FD9F7D',
			},
			name: 'Green Tea',
			description: 'Strawberry, Lemon, Mango, Passionfruit, Peach',
			toppings: {
				names: ['Grape boba', 'Mango boba', 'Kiwi boba', 'Tapioca'],
				toppingsTextColor: '#BB1E1C',
				toppingsBackgroundColor: '#FBE2D9',
			},
		},
		{
			image: {
				url: '../assets/teas/hibiscus_green_tea.png',
				backgroundColor: '#F7B9BF',
			},
			name: 'Hibiscus Green Tea',
			description:
				'A little sweet, a little tart, and a whole lot of refreshing!',
			toppings: {
				names: ['Grape boba', 'Kiwi boba', 'Tapioca'],
				toppingsTextColor: '#69192F',
				toppingsBackgroundColor: '#F9DBDE',
			},
		},
		{
			image: {
				url: '../assets/teas/honey_green_tea.png',
				backgroundColor: '#F7E6A5',
			},
			name: 'Honey Green Tea',
			description: 'Green tea with a touch of sweetness!',
			toppings: {
				names: ['Aloe jelly', 'Fruit jelly'],
				toppingsTextColor: '#8F4C0E',
				toppingsBackgroundColor: '#F8EAB7',
			},
		},
		{
			image: {
				url: '../assets/teas/lychee_oolong_tea.png',
				backgroundColor: '#F6E193',
			},
			name: 'Lychee Oolong Tea',
			description: 'A flavor combination of exotic and comforting!',
			toppings: {
				names: ['Aloe jelly', 'Mango boba', 'Tapioca'],
				toppingsTextColor: '#8F4C0E',
				toppingsBackgroundColor: '#F8EAB7',
			},
		},
		{
			specialBanner: {
				text: 'New',
				textColor: '#3A6718',
			},
			image: {
				url: '../assets/teas/strawberry_matcha_latte.png',
				backgroundColor: '#F2CECE',
			},
			name: 'Strawberry Matcha Latte',
			description: 'Matcha + Strawberry = <3',
			toppings: {
				names: ['Tapioca', 'Ice'],
				toppingsTextColor: '#7F0303',
				toppingsBackgroundColor: '#FADFDF',
			},
		},
		{
			image: {
				url: '../assets/teas/thai_tea_latte.png',
				backgroundColor: '#F98B63',
			},
			name: 'Thai Tea Latte',
			description: 'Enjoy both hot and ice in one cup!',
			toppings: {
				names: ['Tapioca', 'Ice'],
				toppingsTextColor: '#A9380E',
				toppingsBackgroundColor: '#FCD8CB',
			},
		},
		{
			image: {
				url: '../assets/teas/milk_tea.png',
				backgroundColor: '#FAE7D2',
			},
			name: 'Milk Tea',
			description: 'Green, Black, Oolong, Earl grey',
			toppings: {
				names: ['Tapioca', 'Pudding', 'Coffee jelly'],
				toppingsTextColor: '#694219',
				toppingsBackgroundColor: '#FAE7D2',
			},
		},
		{
			image: {
				url: '../assets/teas/caramell_milk_tea.png',
				backgroundColor: '#FFE2B3',
			},
			name: 'Caramell Milk Tea',
			description:
				"It's the ultimate treat, a liquid hug that warms your soul.",
			toppings: {
				names: ['Tapioca', 'Pudding', 'Coffee jelly'],
				toppingsTextColor: '#805005',
				toppingsBackgroundColor: '#F9E9CF',
			},
		},
	];

	get(): Tea[] {
		return this.teas;
	}
}
