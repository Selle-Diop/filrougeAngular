import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailmenuComponent } from './detailmenu.component';

describe('DetailmenuComponent', () => {
  let component: DetailmenuComponent;
  let fixture: ComponentFixture<DetailmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
