import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommandeComponent } from './produits/commande/commande.component';
import { DetailClientComponent } from './produits/commande/list-commande/detail-client/detail-client.component';
import { ListCommandeComponent } from './produits/commande/list-commande/list-commande.component';
import { DetailsComponent } from './admins/liste-tous-commande/details/details.component';
import { ListeTousCommandeComponent } from './admins/liste-tous-commande/liste-tous-commande.component';
import { DetailProduitComponent } from './produits/detail-produit/detail-produit.component';
import { ListProduitComponent } from './produits/list-produit/list-produit.component';
import { DetailmenuComponent } from './produits/list-produit/menu/detailmenu/detailmenu.component';
import { PanierComponent } from './produits/panier/panier.component';
import { ProduitsComponent } from './produits/produits.component';

const routes: Routes = [
  {path: 'Admin',
    loadChildren: () => import('../app/admins/admins.module')
      .then((m) => m.AdminsModule),
  },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ListProduitComponent },
  { path: 'list/:id', component: DetailProduitComponent },
  { path: 'detailmenu/:id', component: DetailmenuComponent },
  { path: 'detailClientCommande/:id', component: DetailClientComponent },

  { path: 'panier', component: PanierComponent },
  { path: 'Commande', component: CommandeComponent },

  // { path: 'admin', component: ListeTousCommandeComponent },

  { path: 'listCommande', component: ListCommandeComponent }
  // { path: 'Home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
