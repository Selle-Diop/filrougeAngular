import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { ActivatedRoute } from '@angular/router';
import { IBurgers, IMenus } from 'src/app/models/IProduit';
import { ProduitsService } from 'src/app/services/produits/produits.service';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css'],
})
export class DetailProduitComponent implements OnInit {
  id: number = +this.router.snapshot.params['id'];
  produit!: IMenus | IBurgers;

  constructor(
    private detailse: ProduitsService,
    private router: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}
  transform(image: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'data:image/png;base64, ' + image
    );
  }
  ngOnInit(): void {
    this.detailse.getOneProd(this.id).subscribe((data: IMenus | IBurgers) => {
      this.produit = data;
    });
  }
}
