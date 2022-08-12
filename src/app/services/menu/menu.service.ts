import { Injectable } from '@angular/core';
import { ITailles } from 'src/app/models/IProduit';

@Injectable({
  providedIn: 'root',
})
export class MenuService {

  tab: { quantiteTotal: number; quantiteChoisie: number }[] = [];
  
  recupBoisson(taille: ITailles[]) {
    taille.forEach((e: ITailles) => {
      this.tab.push({ quantiteTotal: e.quantite, quantiteChoisie: 0 });
    });
  }

  isQuantiteFull(element: {
    quantiteTotal: number;
    quantiteChoisie: number;
  }): boolean {
    if (element.quantiteChoisie >= element.quantiteTotal) {
      return true;
    }
    return false;
  }
  isActiveButton() {
   let isFull=true
    this.tab.forEach((e) => {
      isFull = isFull && this.isQuantiteFull(e)
    })
    return isFull
  }
// ----------------------------------commandes--------------------------------

  constructor() {}
}
