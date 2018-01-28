import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAwbTrackingComponent } from './awbtracking.component';

describe('PageAwbTrackingComponent', () => {
  let component: PageAwbTrackingComponent;
  let fixture: ComponentFixture<PageAwbTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAwbTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAwbTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
