import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedesCommandesComponent } from './listedes-commandes.component';

describe('ListedesCommandesComponent', () => {
  let component: ListedesCommandesComponent;
  let fixture: ComponentFixture<ListedesCommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListedesCommandesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListedesCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
