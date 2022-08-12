import { Component, OnInit } from '@angular/core';
import { PanierserviceService } from 'src/app/services/panierservice.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  mespaniers: any;
  prixtt: number = 0;
  sumT: number = 0;


  constructor(private pans: PanierserviceService) {}
  items = this.pans.items$;

  ngOnInit(): void {
    this.mespaniers = this.pans.items$;
    
  }
}
