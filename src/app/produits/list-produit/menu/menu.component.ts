import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IMenus } from 'src/app/models/IProduit';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Input() m!: any;
  constructor(private sanitizer: DomSanitizer) {}

  transform(image: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'data:image/png;base64, ' + image
    );
  }
  ngOnInit(): void {
    // console.log(this.m);
  }
}
