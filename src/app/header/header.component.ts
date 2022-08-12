import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBurgers, IMenus } from '../models/IProduit';
import { PanierserviceService } from '../services/panierservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private notif: PanierserviceService) {}
 
  items$: Observable<any> = this.notif.items$;

  ngOnInit(): void {}
}
