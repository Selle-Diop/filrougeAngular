import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailslivreursComponent } from './detailslivreurs.component';

describe('DetailslivreursComponent', () => {
  let component: DetailslivreursComponent;
  let fixture: ComponentFixture<DetailslivreursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailslivreursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailslivreursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
