import { Component, OnInit } from '@angular/core';
import { ICatalogue } from '../models/burger.model';
import { ProductsService } from '../services/product/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  catalogue!:ICatalogue
  
  constructor(private product:ProductsService) {}

  ngOnInit(): void {
    
    this.catalogue = this.product.getCatalogues()
    console.log(this.catalogue.burgers);
    
  }
}
