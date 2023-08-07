import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-topping-badge',
	templateUrl: './topping-badge.component.html',
	styleUrls: ['./topping-badge.component.css'],
})
export class ToppingBadgeComponent {
	@Input() text!: string;
	@Input() textColor!: string;
	@Input() backgroundColor!: string;
}
