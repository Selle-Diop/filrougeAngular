import { Component, Input, OnInit } from '@angular/core';
import { ProduitsService } from 'src/app/services/produits/produits.service';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css'],
})
export class ZonesComponent implements OnInit {
  zones!: any;
   show: boolean = false;
   buttonName: any = 'Show';

  constructor(private zone: ProduitsService) {}
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
  toggle() {
      
    this.show = !this.show;

    
      if (this.show) {
      
        this.buttonName = "Hide";
    } else {
        
        this.buttonName = "Show";
    }
  }


  ngOnInit(): void {
    this.zone.getZones().subscribe((z: any) => {
      this.zones = z;

      // console.log(this.zones);
    });
  }
}
