import { Component, Input } from '@angular/core';
import { Tea } from '../boba/tea.interface';

@Component({
	selector: 'app-hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.css', '../card/card.css'],
})
export class HeroComponent {
	@Input() tea!: Tea;
}
