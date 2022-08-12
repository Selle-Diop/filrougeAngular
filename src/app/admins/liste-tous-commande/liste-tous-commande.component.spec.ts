import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTousCommandeComponent } from './liste-tous-commande.component';

describe('ListeTousCommandeComponent', () => {
  let component: ListeTousCommandeComponent;
  let fixture: ComponentFixture<ListeTousCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeTousCommandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeTousCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
