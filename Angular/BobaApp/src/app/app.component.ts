import { Component } from '@angular/core';
import { Tea } from './boba/tea.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Boba';
  tea: Tea = {
    specialBanner: "",
    name: "Green Tea",
    description: "Strawberry, Lemon, Mango, Passionfruit, Peach",
    toppings: ["Grape boba", "Mango boba", "Kiwi boba", "Tapioca"] 
  }
}
