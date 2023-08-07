import { Component } from '@angular/core';
import { Tea } from './boba/tea.interface';
import { TeaItemService } from './boba/tea-items.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title = 'Boba';
	teas: Tea[]

	constructor(private teaItemService: TeaItemService) {
		this.teas = teaItemService.getTeas();
	}
}
