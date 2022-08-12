import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IZones } from 'src/app/models/IProduit';
import { PanierserviceService } from 'src/app/services/panierservice.service';
import { ProduitsService } from 'src/app/services/produits/produits.service';

@Component({
  selector: 'app-liste-tous-commande',
  templateUrl: './liste-tous-commande.component.html',
  styleUrls: ['./liste-tous-commande.component.css'],
})
export class ListeTousCommandeComponent implements OnInit {
  zones:IZones[]= [];
  zone!: any
  commande!: any;
  searchText: string = '';
  // valider!: string;
  // annuler!: string;

  constructor(private commandeAll: PanierserviceService,
    private zoneService: ProduitsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.commandeAll.getCommande().subscribe((e: any) => {
      // console.log(e);
      this.commande = e;
      // console.log(this.commande);
    });
   this.zoneService.getZones().subscribe((e: IZones[]) => {
     
     e.forEach((zone: IZones) => {

       if (zone.commandes.length != 0) {

         this.zones.push(zone);
         
       }
      //  console.log(zone.commandes.length);
     });
   });

  }
  cancelCommand(id: number, etat: string) {
    this.commandeAll.UpdateCommande(id, etat);
  }
  detailZone(zone: any) {
    this.router.navigateByUrl('commandes/zone/' + zone.id)

  }
}
