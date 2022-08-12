import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailslescommandesComponent } from './detailslescommandes.component';

describe('DetailslescommandesComponent', () => {
  let component: DetailslescommandesComponent;
  let fixture: ComponentFixture<DetailslescommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailslescommandesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailslescommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
