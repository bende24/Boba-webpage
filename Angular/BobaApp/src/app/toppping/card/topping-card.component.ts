import { Component, Input } from '@angular/core';
import { Topping } from '../topping.interface';

@Component({
	selector: 'app-topping-card',
	templateUrl: './topping-card.component.html',
	styleUrls: ['./topping-card.component.css', '../../card/card.css'],
})
export class ToppingCardComponent {
	@Input() topping!: Topping;
}