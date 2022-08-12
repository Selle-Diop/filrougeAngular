import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from '../app-routing.module';
import { NotFoundComponent } from '../not-found/not-found.component';
import { CommandeComponent } from '../produits/commande/commande.component';
import { ListProduitComponent } from '../produits/list-produit/list-produit.component';

import { AdminsComponent } from './admins.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { NewProduitsComponent } from './liste-produits/new-produits/new-produits.component';
import { DetailslescommandesComponent } from './listedes-commandes/detailslescommandes/detailslescommandes.component';
import { ListedesCommandesComponent } from './listedes-commandes/listedes-commandes.component';
import { DetailslivraisonsComponent } from './livraison/detailslivraisons/detailslivraisons.component';
import { DetailslivreursComponent } from './livraison/detailslivreurs/detailslivreurs.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { ZoneComponent } from './listedes-commandes/zone/zone.component';



@NgModule({
  imports: [],
  exports: []
})
export class AdminsRoutingModule { }
