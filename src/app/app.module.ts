import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EssaiComponent } from './essai/essai.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { ProduitsComponent } from './produits/produits.component';
import { DetailProduitComponent } from './produits/detail-produit/detail-produit.component';
import { ListProduitComponent } from './produits/list-produit/list-produit.component';
import { ItemProduitComponent } from './produits/list-produit/item-produit/item-produit.component';
import { AcceuilProduitComponent } from './produits/acceuil-produit/acceuil-produit.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PanierComponent } from './produits/panier/panier.component';
import { ItemPanierComponent } from './produits/panier/item-panier/item-panier.component';
import { MenuComponent } from './produits/list-produit/menu/menu.component';
import { DetailmenuComponent } from './produits/list-produit/menu/detailmenu/detailmenu.component';
import { ZonesComponent } from './produits/panier/zones/zones.component';
import { CommandeComponent } from './produits/commande/commande.component';
import { ComplementsComponent } from './produits/complements/complements.component';
import { ListCommandeComponent } from './produits/commande/list-commande/list-commande.component';
import { ListeTousCommandeComponent } from './admins/liste-tous-commande/liste-tous-commande.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DetailsComponent } from './admins/liste-tous-commande/details/details.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { DetailClientComponent } from './produits/commande/list-commande/detail-client/detail-client.component';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    EssaiComponent,
    HomeComponent,
    ProductComponent,
    HeaderComponent,
    ProduitsComponent,
    DetailProduitComponent,
    ListProduitComponent,
    ItemProduitComponent,
    AcceuilProduitComponent,
    PanierComponent,
    ItemPanierComponent,
    MenuComponent,
    DetailmenuComponent,
    ZonesComponent,
    CommandeComponent,
    ComplementsComponent,
    ListCommandeComponent,
    ListeTousCommandeComponent,
    DetailsComponent,

    NotFoundComponent,
    DetailClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
