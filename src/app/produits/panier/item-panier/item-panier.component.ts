import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, observable } from 'rxjs';
import { IBurgers, ICommande, ILineCommand, IMenus, IProduits } from 'src/app/models/IProduit';
import { PanierserviceService } from 'src/app/services/panierservice.service';

@Component({
  selector: 'app-item-panier',
  templateUrl: './item-panier.component.html',
  styleUrls: ['./item-panier.component.css'],
})
export class ItemPanierComponent implements OnInit {
  @Input() prodOne: any;
  priT!: any;
  show: boolean = false;
  buttonName: any = 'Show';

  constructor(
    private prodService: PanierserviceService,
    private sanitizer: DomSanitizer,
    private r: PanierserviceService
  ) {}

  items$ = this.r.items$;
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show) {
      this.buttonName = 'Hide';
    } else {
      this.buttonName = 'Show';
    }
  }

  Commander(tab: Observable<any[]>) {
    tab.forEach((el: any) => {
      this.r.deleteCard(el);
    });
  }
  transform(image: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'data:image/png;base64, ' + image
    );
  }
  delete(prS: IMenus | IBurgers) {
    this.r.deleteCard(prS);
  }
  quantitePrice(produit: IMenus | IBurgers, q: any) {
    this.prodService.increment(produit, q);
  }
  prixtotal() {
    return (this.priT = this.prodService.prixTotals());
  }

  private selectedLink: string = 'false';

  setradio(e: string): void {
    this.selectedLink = e;
  }

  isSelected(name: string): boolean {
    if (!this.selectedLink) {
      // if no radio button is selected, always return false so every nothing is shown
      return false;
    }

    return this.selectedLink === name; // if current radio button is selected, return true, else return false
  }
  // recuperersuplivraison() {
  //   this.item$.subscribe((pro) => {
  //     pro.forEach((p) => {
  //       this.produit.push({
  //         quantite: +p.quantity,
  //         produit: 'api/produits/' + p.id,
  //       });
  //     });
  //   });
  // }
  sendCommande() {
    let body: ICommande = {
      Produits: this.OperationCommande(),
      zone: '/api/zones/5',
      client: '/api/clients/19',
    };

    this.prodService.postCommande(body);
  }
  OperationCommande()  {
    let Produits: ILineCommand[] = [];
    this.items$.subscribe((pro: any) => {
      pro.forEach((p: IProduits) => {
        Produits.push({
          quantite: +p.quantite,
          produit: 'api/produits/' + p.id,
        });
      });
    });
    return Produits;
  }
  // OperationCommande() {
  //   let tab = this.prodService.getPanier()
  //   const Produits: ILineCommand[] = [];
  //   tab.forEach((produit: IProduits) => {
  //     Produits.push({
  //       quantite: produit.quantite,
  //       produit:'/api/produits/' + produit.id
  //     });
  //   })
  //   return Produits
  // }

  ngOnInit(): void {
    this.prixtotal();
  }
}
