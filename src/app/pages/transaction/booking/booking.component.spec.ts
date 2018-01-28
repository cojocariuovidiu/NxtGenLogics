import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBookingComponent } from './booking.component';

describe('PageBookingComponent', () => {
  let component: PageBookingComponent;
  let fixture: ComponentFixture<PageBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
