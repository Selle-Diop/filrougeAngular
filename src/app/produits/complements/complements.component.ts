import { Component, OnInit } from '@angular/core';
import { ComplementsService } from 'src/app/services/complements.service';

@Component({
  selector: 'app-complements',
  templateUrl: './complements.component.html',
  styleUrls: ['./complements.component.css'],
})
export class ComplementsComponent implements OnInit {
  constructor(private complemets: ComplementsService) {}

  ngOnInit(): void {
    this.complemets.getLesComplements().subscribe((c: any) => {
      console.log(c);
      
    })
    
  }
}
