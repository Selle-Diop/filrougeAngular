import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilProduitComponent } from './acceuil-produit.component';

describe('AcceuilProduitComponent', () => {
  let component: AcceuilProduitComponent;
  let fixture: ComponentFixture<AcceuilProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceuilProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceuilProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
