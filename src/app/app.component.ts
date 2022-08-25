import { Component } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item';

import {
  faCoffee,
  faPizzaSlice,
  faDrumstickBite,
  faBreadSlice,
  faLeaf,
  faIceCream,
  faBeerMugEmpty,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Chirpus Pizza';
  faCoffee = faCoffee;

  menuItems: MenuItem[] = [
    {
      name: 'Chicken Fingers',
      category: 'Dinner',
      price: 11.99,
      icon: faDrumstickBite,
    },

    {
      name: 'Pizza',
      category: 'Dinner',
      price: 11.99,
      icon: faPizzaSlice,
    },

    {
      name: 'Breadsticks',
      category: 'Sides',
      price: 4.99,
      icon: faBreadSlice,
    },

    {
      name: 'Caesar Salad',
      category: 'Salads',
      price: 5.99,
      icon: faLeaf,
    },

    {
      name: 'Ice Cream',
      category: 'Dessert',
      price: 8.99,
      icon: faIceCream,
    },

    {
      name: 'Beer',
      category: 'Drink',
      price: 3.99,
      icon: faBeerMugEmpty,
    },
  ];
}
