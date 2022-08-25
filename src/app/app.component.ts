import { Component } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item';

import {
  faPizzaSlice,
  faDrumstickBite,
  faBreadSlice,
  faLeaf,
  faIceCream,
  faBeerMugEmpty,
} from '@fortawesome/free-solid-svg-icons';
import { Categories } from './enums/categories';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Chirpus Pizza';
  categories = Categories;

  menuItems: MenuItem[] = [
    {
      name: 'Chicken Fingers',
      category: 0,
      price: 11.99,
      icon: faDrumstickBite,
    },

    {
      name: 'Pizza',
      category: 0,
      price: 11.99,
      icon: faPizzaSlice,
    },

    {
      name: 'Breadsticks',
      category: 3,
      price: 4.99,
      icon: faBreadSlice,
    },

    {
      name: 'Caesar Salad',
      category: 2,
      price: 5.99,
      icon: faLeaf,
    },

    {
      name: 'Ice Cream',
      category: 1,
      price: 8.99,
      icon: faIceCream,
    },

    {
      name: 'Beer',
      category: 4,
      price: 3.99,
      icon: faBeerMugEmpty,
    },
  ];
}
