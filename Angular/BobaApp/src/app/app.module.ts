import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { BobaCardComponent } from './boba/card/boba-card.component';
import { ToppingBadgeComponent } from './toppping/badge/topping-badge.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
	declarations: [
		AppComponent,
		HeroComponent,
		BobaCardComponent,
		ToppingBadgeComponent,
		ContactComponent
	],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
