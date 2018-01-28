import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHubOutComponent } from './hubout.component';

describe('PageHubOutComponent', () => {
  let component: PageHubOutComponent;
  let fixture: ComponentFixture<PageHubOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHubOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHubOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
