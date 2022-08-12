import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBurger, IMenu } from 'src/app/models/burger.model';
import {
  IBurgers,
  IGetCommande,
  ILivraison,
  ILivreur,
  IMenus,
  IProduit,
  IZone,
  IZones,
} from 'src/app/models/IProduit';

@Injectable({
  providedIn: 'root',
})
export class ProduitsService {
  private prod: IProduit = {
    menus: [
      {
        id: 1,
        nom: 'menu simple',
        image: 'assets/images/bb.jpeg',
        burger: [
          {
            id: 1,
            nom: 'burger simple',
            image: 'assets/images/bagburger.jpg',
            prix: 1000,
            quantite: 0,
          },
        ],
        frites: [
          {
            id: 1,
            nom: 'portion simple',
            quantite: 1,
          },
        ],
        boisson: [
          {
            id: 1,
            taille: 'petit model',
            quantite: 1,
          },
        ],
        quantite: 0,

        prix: 222222,
      },
      {
        id: 20,
        nom: 'menu simple',
        image: 'assets/images/bb.jpeg',
        burger: [
          {
            id: 22,
            nom: 'burger simple',
            image: 'assets/images/bagburger.jpg',
            prix: 1000,
            quantite: 0,
          },
        ],
        frites: [
          {
            id: 24,
            nom: 'portion simple',
            quantite: 1,
          },
        ],
        boisson: [
          {
            id: 62,
            taille: 'petit model',
            quantite: 1,
          },
        ],
        prix: 222222,
        quantite: 0,
      },
      {
        id: 30,
        nom: 'menu simple',
        image: 'assets/images/bb.jpeg',
        burger: [
          {
            id: 43,
            nom: 'burger simple',
            image: 'assets/images/bagburger.jpg',
            prix: 1000,
            quantite: 0,
          },
        ],
        frites: [
          {
            id: 39,
            nom: 'portion simple',
            quantite: 1,
          },
        ],
        boisson: [
          {
            id: 83,
            taille: 'petit model',
            quantite: 1,
          },
        ],
        prix: 222222,
        quantite: 0,
      },
      {
        id: 300,
        nom: 'menu ',
        image: 'assets/images/bb.jpeg',
        burger: [
          {
            id: 443,
            nom: 'burger simple',
            image: 'assets/images/bagburger.jpg',
            prix: 1000,
            quantite: 0,
          },
        ],
        frites: [
          {
            id: 339,
            nom: 'portion simple',
            quantite: 1,
          },
        ],
        boisson: [
          {
            id: 383,
            taille: 'petit model',
            quantite: 1,
          },
        ],
        prix: 222222,
        quantite: 0,
      },
    ],
    burgers: [
      {
        id: 51,
        nom: 'burger simple',
        image: 'assets/images/bagburger.jpg',
        prix: 2333,
        quantite: 0,
      },
      {
        id: 52,
        nom: 'burger double',
        image: 'assets/images/bagburger.jpg',
        prix: 2333,
        quantite: 0,
      },
      {
        id: 93,
        nom: 'Cheese Burger',
        image: 'assets/images/bagburger.jpg',
        prix: 2333,
        quantite: 0,
      },
      {
        id: 47,
        nom: 'Double Cheese',
        image: 'assets/images/bagburger.jpg',
        prix: 2333,
        quantite: 0,
      },
      {
        id: 447,
        nom: ' Cheese',
        image: 'assets/images/bagburger.jpg',
        prix: 23,
        quantite: 0,
      },
    ],
  };
  private UrlCat = 'http://127.0.0.1:8000/api/catalogues';

  private UrlMenus = 'http://127.0.0.1:8000/api/menus';

  private UrlMenudetail = 'http://127.0.0.1:8000/api/menus/';

  private UrlBurger = 'http://127.0.0.1:8000/api/burgers';
  private Urlproduit = 'http://127.0.0.1:8000/api/produits/';
  private UrlZone = 'http://127.0.0.1:8000/api/zones/';
  private UrlClients = 'http://127.0.0.1:8000/api/clients/';
  private UrlLivreurs = 'http://127.0.0.1:8000/api/livreurs/';
  private UrlLivraisons = 'http://127.0.0.1:8000/api/livraisons';

  tabMenu: IMenus[] = [];

  constructor(private htpp: HttpClient) {}

  getBurgers(): IBurger[] {
    return this.prod.burgers;
  }
  getMenus(): Observable<any> {
    return this.htpp.get<any>(this.UrlMenus);
  }

  getLivreurs(): Observable<any> {
    return this.htpp.get<any>(this.UrlLivreurs);
  }
  getOneLivreur(id: number): Observable<ILivreur> {
    return this.htpp.get<ILivreur>(this.UrlLivreurs + id);
  }

  getClients(): Observable<any> {
    return this.htpp.get<any>(this.UrlClients);
  }
  getOneClient(id: number): Observable<any> {
    return this.htpp.get<any>(this.UrlClients + id);
  }
  getZones(): Observable<IZones[]> {
    return this.htpp.get<IZones[]>(this.UrlZone);
  }
  getOneZone(id: number): Observable<IZones> {
    return this.htpp.get<IZones>(this.UrlZone + id);
  }

  getLesCatalogues(): Observable<any> {
    return this.htpp.get<any>(this.UrlCat);
  }

  getOneProd(id: number): Observable<any> {
    return this.htpp.get<any>(this.Urlproduit + '' + id);
  }

  getOneMenu(id: number): Observable<any> {
    return this.htpp.get<any>(this.UrlMenudetail + '' + id);
  }
  getOneMenus(): Observable<any> {
    return this.htpp.get<any>(this.UrlMenudetail);
  }

  getMenuTab(): IMenus[] {
    this.getMenus().subscribe((v) => {
      this.tabMenu.push(v);
    });

    return this.tabMenu;
  }
  tabab: any = [];
  getUnMenuTab(id: number) {
    this.tabab = this.getMenuTab()[0];
    return this.tabab.find((un: any) => un.id === id);
  }

  postLivraison(body: ILivraison) {
    this.htpp.post<any>(this.UrlLivraisons, body).subscribe();
  }
  CommandeLivrer: IGetCommande[] = [];
  addCommandTab(commande: IGetCommande) {
    this.CommandeLivrer.push(commande);
  }
  lessCommandTab(commande: IGetCommande) {
    this.CommandeLivrer.splice(this.CommandeLivrer.indexOf(commande), 1);
  }

  isDisableButton() {
    if (this.CommandeLivrer.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  // getCatalogueById(id: number): IProduit
  // {
  //   const cata = this.prod.find((p: IMenus|IBurgers) => {

  //     p.menus.id === id;
  //   }
  //   );
  //     return cata;
  // }
}
