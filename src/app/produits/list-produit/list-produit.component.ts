import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBurger, IMenu } from 'src/app/models/burger.model';
import { IFrites, IProduit, ITailles } from 'src/app/models/IProduit';
import { PanierserviceService } from 'src/app/services/panierservice.service';
import { ProduitsService } from 'src/app/services/produits/produits.service';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css'],
})
export class ListProduitComponent implements OnInit {
  catalogues!: any;
  menu!: any;
  burger!: any;
  // cacher: string = "show";
  lesmenus!: any;
  compF!: any;
  compB!: any;
  searchText!:any

  // produits: IMenu[] | IBurger[] = [];

  constructor(private prod: ProduitsService) {}

  ngOnInit(): void {
    this.prod.getLesCatalogues().subscribe((d) => {
      //  console.log(d);

      this.menu = d.menu;
      this.burger = d.burger;
    });
    this.prod.getMenus().subscribe((m: any) => {
      //  console.log(m);
      this.lesmenus = m;
      // m.forEach((n: any) => {

      // })
    });
    // this.prod.getLesComplements().subscribe((c:any) => {
    //   // this.compB = c.taille
    //   // this.compF = c.portion;

    //   console.log(c);
    // });
  }
}
