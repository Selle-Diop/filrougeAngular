import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, take } from 'rxjs';
import { IClient } from 'src/app/models/IProduit';
import { ProduitsService } from 'src/app/services/produits/produits.service';

@Component({
  selector: 'app-list-commande',
  templateUrl: './list-commande.component.html',
  styleUrls: ['./list-commande.component.css']
})
export class ListCommandeComponent implements OnInit {

  constructor( private client:ProduitsService,private router:Router) { }
tabClient:IClient[]= [];
  ngOnInit(): void {
    this.client.getClients().pipe(
      take(1),
      map((e) => {
        e.filter((c: IClient) => {
          if (c.commandes.length > 0)
            this.tabClient.push(c);
          // console.log(this.tabClient);
          
        })
      })
    ).subscribe()
  }
  detail(client: IClient) {
    this.router.navigateByUrl('detailClientCommande/'+client.id)
    
    
  }

}
