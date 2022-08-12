import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IClient } from 'src/app/models/IProduit';
import { ProduitsService } from 'src/app/services/produits/produits.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  client!:any
  id: number = +this.route.snapshot.params['id'];

  constructor(private  prodService: ProduitsService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.prodService.getOneClient(this.id).subscribe((data) => {
    //   this.client=data;
    // })
  }

}
