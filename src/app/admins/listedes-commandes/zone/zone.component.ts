import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ICommandeZone,
  IGetCommande,
  ILivraison,
  ILivreur,
  IZones,
} from 'src/app/models/IProduit';
import { ProduitsService } from 'src/app/services/produits/produits.service';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css'],
})
export class ZoneComponent implements OnInit {
  zone!: IZones;
  idZone: number = +this.route.snapshot.params['id'];
  commandes: IGetCommande[] = [];
  leslivreurs: ILivreur[] = [];
  idLiv!: number;
  constructor(
    private zoneService: ProduitsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.zoneService.getOneZone(this.idZone).subscribe((r: any) => {
      r.commandes.forEach((com: IGetCommande) => {
        if (com.isEtatCommande == 'valider') {
          this.commandes.push(com);
        }
      });
      // console.log(this.commandes);
    });
    this.zoneService.getLivreurs().subscribe((livreurs: ILivreur[]) => {
      livreurs.forEach((l: ILivreur) => {
        if (l.isEtatLivreur == 'disponible') {
          this.leslivreurs.push(l);
        }

        console.log(this.leslivreurs);
      });
    });
    // console.log(tab);
  }
  isChecked(commande: IGetCommande, input: HTMLInputElement) {
    if (input.checked) {
      this.zoneService.addCommandTab(commande);
    } else {
      this.zoneService.lessCommandTab(commande);
    }
    // console.log(this.zoneService.CommandeLivrer);
  }
  addLivraison() {
    let tab: string[] = [];
    this.zoneService.CommandeLivrer.forEach((c: IGetCommande) => {
      tab.push('/api/commandes/' + c.id);
    });
    let body: ILivraison = {
      livreur: '/api/livreurs/' + this.idLiv,
      commandes: tab,
      zones: ['/api/zones/' + this.idZone],
    };
    this.zoneService.postLivraison(body);
    // console.log(body);
  }
  acttiverButtonLivrer() {
    return this.zoneService.isDisableButton();
  }

  selectLivreur(select: HTMLSelectElement) {
    this.idLiv = +select.value;
    // console.log(this.idLiv);
  }
}
