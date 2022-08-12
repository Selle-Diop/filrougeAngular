import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/services/menu/menu.service';
import { ProduitsService } from 'src/app/services/produits/produits.service';

@Component({
  selector: 'app-detailmenu',
  templateUrl: './detailmenu.component.html',
  styleUrls: ['./detailmenu.component.css'],
})
export class DetailmenuComponent implements OnInit {
  id: number = +this.router.snapshot.params['id'];
  prmenu!: any;
  fr!: any;
  boi!: any;
  bur!: any;

  constructor(
    private sanitizer: DomSanitizer,
    private router: ActivatedRoute,
    private detailmenu: ProduitsService,
    private menuService: MenuService
  ) {}
  transform(image: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'data:image/png;base64, ' + image
    );
  }
  private selectedLink: string = 'false';

  setradio(e: string): void {
    this.selectedLink = e;
  }

  isSelected(name: string): boolean {
    if (!this.selectedLink) {
      // if no radio button is selected, always return false so every nothing is shown
      return false;
    }

    return this.selectedLink === name; // if current radio button is selected, return true, else return false
  }

  // tab: Array<number> = []
  // isChecked(value:any) {
  //    this.tab.find(idb => {

  //      idb === value
  //     console.log(idb);
  //   })

  // }
  
  plus(i: number) {
     if (this.menuService.tab[i].quantiteChoisie ==this.menuService.tab[i].quantiteTotal) {
       return;
     }
    this.menuService.tab[i].quantiteChoisie++;
    this.menuService.isQuantiteFull(this.menuService.tab[i]);
     console.log(this.menuService.isQuantiteFull(this.menuService.tab[i]))
  }
  moins(i: number) {
    if (this.menuService.tab[i].quantiteChoisie<=0) {
      return
    }
      this.menuService.tab[i].quantiteChoisie--;
    // console.log(this.menuService.tab[i]);
  }
  Acitvebutton() {
    return this.menuService.isActiveButton()
  }

  ngOnInit(): void {
    // this.detailmenu.getOneMenus().subscribe((data: any) => {
    //   console.log(data);
    //   this.prmenu = data;
    //    console.log(this.prmenu);
    // });
    this.prmenu = this.detailmenu.getUnMenuTab(this.id);
    this.prmenu.Frites[0];
    this.prmenu.Tailles;
    this.prmenu.Burgers[0];
    this.menuService.recupBoisson(this.prmenu.Tailles);
    // console.log(this.prmenu.Tailles);

  }
}
