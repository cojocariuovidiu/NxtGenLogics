import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBookingListComponent } from './booking-list.component';

describe('PageBookingComponent', () => {
  let component: PageBookingListComponent;
  let fixture: ComponentFixture<PageBookingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBookingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBookingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
