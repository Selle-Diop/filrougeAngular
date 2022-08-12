import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminsRoutingModule } from './admins-routing.module';
import { AdminsComponent } from './admins.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ZoneComponent } from './listedes-commandes/zone/zone.component';
import { ListedesCommandesComponent } from './listedes-commandes/listedes-commandes.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { NewProduitsComponent } from './liste-produits/new-produits/new-produits.component';
import { DetailslescommandesComponent } from './listedes-commandes/detailslescommandes/detailslescommandes.component';
import { DetailslivraisonsComponent } from './livraison/detailslivraisons/detailslivraisons.component';
import { DetailslivreursComponent } from './livraison/detailslivreurs/detailslivreurs.component';
import { RouterModule, Routes } from '@angular/router';
import { ListeTousCommandeComponent } from './liste-tous-commande/liste-tous-commande.component';


const routes: Routes = [
  { path: '', component: ListeTousCommandeComponent },

  { path: 'commandes', component: ListeTousCommandeComponent },

  { path: 'commandes/detail/:id', component: DetailslescommandesComponent },
  // { path: 'commandes/zone', component: ZoneComponent },

  { path: 'commandes/zone/:id', component: ZoneComponent },

  { path: 'livraison', component: LivraisonComponent },

  { path: 'livraison/:id', component: DetailslivraisonsComponent },

  { path: 'livraison/livreur/:id', component: DetailslivreursComponent },

  { path: 'Produits', component: ListeProduitsComponent },

  { path: 'Produits/new', component: NewProduitsComponent },
];

@NgModule({
  declarations: [
    AdminsComponent,
    ListeProduitsComponent,
    ListedesCommandesComponent,
    ZoneComponent,
    LivraisonComponent,
    NewProduitsComponent,
    DetailslescommandesComponent,
    DetailslivraisonsComponent,
    DetailslivreursComponent,
  ],
  imports: [
    CommonModule,
   
    FormsModule,
   
    Ng2SearchPipeModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class AdminsModule {}
