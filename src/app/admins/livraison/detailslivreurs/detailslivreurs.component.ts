import { Component, OnInit } from '@angular/core';
import { ProduitsService } from 'src/app/services/produits/produits.service';

@Component({
  selector: 'app-detailslivreurs',
  templateUrl: './detailslivreurs.component.html',
  styleUrls: ['./detailslivreurs.component.css']
})
export class DetailslivreursComponent implements OnInit {

  constructor(private livreur: ProduitsService) { }

  ngOnInit(): void {
    // this.livreur.getLivreurs().subscribe((l: any) => {
    //   console.log(l);
      
    // })
  }

}
