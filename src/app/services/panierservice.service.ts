import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, take } from 'rxjs';

import { IBurgers, ICommande, IMenus, IProduit } from '../models/IProduit';

@Injectable({
  providedIn: 'root',
})
export class PanierserviceService {
  private itemsSubject = new BehaviorSubject<any>([]);

  items$: Observable<any> = this.itemsSubject.asObservable();
  constructor(private htpp: HttpClient) {
    let existingCartItems = JSON.parse(
      localStorage.getItem('products') || '[]'
    );
    if (!existingCartItems) {
      existingCartItems = [];
    }
    this.itemsSubject.next(existingCartItems);
  }

  addToCart(product: any) {
    this.items$
      .pipe(
        take(1),
        map((products) => {
          product.quantite = 1;
          if (!this.isExistProduct(products, product.id)) {
            products.push(product);
          } else {
            products.forEach((element: any) => {
              element.quantite += product.quantite + 1;
            });
          }

          localStorage.setItem('products', JSON.stringify(products));
        })
      )
      .subscribe();
  }
  deleteCard(pr: IMenus | IBurgers) {
    this.items$
      .pipe(
        take(1),
        map((products) => {
          products.splice(products.indexOf(pr), 1);
          localStorage.setItem('products', JSON.stringify(products));
        })
      )
      .subscribe();
  }
  increment(product: IMenus | IBurgers, q: any) {
    this.items$
      .pipe(
        take(1),
        map((products) => {
          products.forEach((el: any) => {
            if (el.id === product.id) {
              el.quantite = q;
            }
          });
          localStorage.setItem('products', JSON.stringify(products));
        })
      )
      .subscribe();
  }
  isExistProduct(tab: IBurgers[] | IMenus[], idprod: number) {
    return tab.find((pro: IMenus | IBurgers) => {
      return pro.id === idprod;
    });
  }
  
  prixTotals() {
    let Total = 0;
    this.items$.subscribe((manypro: any) => {
      manypro.forEach((Onepro: any) => {
        Total += Onepro.prix * Onepro.quantite;
      });
      localStorage.setItem('products', JSON.stringify(manypro));
    });
    return Total;
  }

  getPanier() {
    return JSON.parse(localStorage.getItem('products') || '[]')
  }

  private UrlCommande = 'http://127.0.0.1:8000/api/commandes';

  getCommande(): Observable<any> {
    return this.htpp.get<any>(this.UrlCommande);
  }
  UpdateCommande(id: number, etat: string) {
    this.htpp.put<any>(this.UrlCommande+"/"+id, {isEtatCommande:etat}).subscribe()
  }

  tabLine:Array<any> = [];
  getLineOfCommande() {
    this.items$.subscribe((produits: any) => {
      produits.forEach((product: any) => {
        this.tabLine.push({
          'produit': product,
          'quantite': +product.quantite

        });
      });
    })
    return this.tabLine
  }
  postCommande(body: ICommande) {
    
    this.htpp.post<ICommande>(this.UrlCommande, body).subscribe();
  }
}
