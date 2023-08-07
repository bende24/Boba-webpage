import { Component, Input } from '@angular/core';
import { Tea } from '../tea.interface';

@Component({
	selector: 'app-boba-card',
	templateUrl: './boba-card.component.html',
	styleUrls: ['./boba-card.component.css'],
})
export class BobaCardComponent {
	@Input() tea!: Tea;
}
