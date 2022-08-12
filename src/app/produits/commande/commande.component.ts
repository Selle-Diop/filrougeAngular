import { Component, OnInit } from '@angular/core';
import { ProduitsService } from 'src/app/services/produits/produits.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css'],
})
export class CommandeComponent implements OnInit {
  com!: any;
  text = false;

  textButton = "Valider";

  constructor(private commande: ProduitsService) {}

  changeText(element:any) {
    this.text = !this.text;
    
  this.textButton = this.text?'Annuler':'Valider';
      
    
  }

  ngOnInit(): void {
    // this.commande.getCommande().subscribe((c: any) => {
    //   // console.log(c);
    //   this.com = c;
    // });
  }
}
