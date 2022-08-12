import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-essai',
  templateUrl: './essai.component.html',
  styleUrls: ['./essai.component.css']
})
export class EssaiComponent implements OnInit {
  

  personne: {nom: string,prenom: string} = {
    nom: "diop",
    prenom:"selle"
  };
  constructor() { }

  ngOnInit(): void {
  }

  valider(test: NgForm)
  {
  console.log(test);
  }
}
