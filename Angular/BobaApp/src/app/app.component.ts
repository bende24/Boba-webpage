import { Component } from '@angular/core';
import { Tea } from './boba/tea.interface';
import { TeaItemsService } from './boba/tea-items.service';
import { ToppingItemsService } from './toppping/topping-items.service';
import { Topping } from './toppping/topping.interface';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title = 'Boba';
	teas: Tea[];
	toppings: Topping[];

	constructor(
		private teaItemService: TeaItemsService,
		private toppingItemsService: ToppingItemsService) {
		this.teas = teaItemService.get();
		this.toppings = toppingItemsService.get();
	}
}
