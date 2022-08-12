import { Injectable } from '@angular/core';
import { ICatalogue } from 'src/app/models/burger.model';



@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private cata: ICatalogue = {
    menus: [
      {
        nom: 'menu',
        image: 'string',
        burger: [
          {
            nom: 'burger1',
            image: 'string',
            prix: 1200,
          },
        ],
        prix: 1200,
      },
    ],
    burgers: [
      {
        nom: 'burger1',
        image: 'string',
        prix: 1200,
      },
    ],
  };

  constructor() {}
  getCatalogues() {
    return this.cata;
  }
}
