import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IBurger, IMenu } from 'src/app/models/burger.model';
import { IBurgers, IMenus, IProduit } from 'src/app/models/IProduit';
import { PanierserviceService } from 'src/app/services/panierservice.service';

@Component({
  selector: 'app-item-produit',
  templateUrl: './item-produit.component.html',
  styleUrls: ['./item-produit.component.css'],
})
export class ItemProduitComponent implements OnInit {
  @Input() pr!: IMenus | IBurgers;
  //  @Input() show: string = '';
  constructor(
    private pan: PanierserviceService,
    private sanitizer: DomSanitizer
  ) {}
  getProduits(product: IMenus | IBurgers) {
    this.pan.addToCart(product);
    // console.log(product);
  }
  transform(image: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'data:image/png;base64, ' + image
    );
  }

  ngOnInit(): void {
    // console.log(this.pr);
  }
}
