import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailslivraisonsComponent } from './detailslivraisons.component';

describe('DetailslivraisonsComponent', () => {
  let component: DetailslivraisonsComponent;
  let fixture: ComponentFixture<DetailslivraisonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailslivraisonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailslivraisonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
