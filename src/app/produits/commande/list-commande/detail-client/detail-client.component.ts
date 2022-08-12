import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IClient, IGetCommande, IProduits } from 'src/app/models/IProduit';
import { ProduitsService } from 'src/app/services/produits/produits.service';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.css'],
})
export class DetailClientComponent implements OnInit {
  client!: IClient;
  commande!: IGetCommande
  produit!:IProduits
  id: number = +this.route.snapshot.params['id'];

  constructor(
    private commandeService: ProduitsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.commandeService.getOneClient(this.id).subscribe((e) => {
      this.client = e
      console.log(this.client);
      

    });
  }
}
