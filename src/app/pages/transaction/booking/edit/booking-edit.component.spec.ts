import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBookingEditComponent } from './booking-edit.component';

describe('PageBookingEditComponent', () => {
  let component: PageBookingEditComponent;
  let fixture: ComponentFixture<PageBookingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBookingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBookingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
