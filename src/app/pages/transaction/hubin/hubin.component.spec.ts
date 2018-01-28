import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHubInComponent } from './hubin.component';

describe('PageHubInComponent', () => {
  let component: PageHubInComponent;
  let fixture: ComponentFixture<PageHubInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHubInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHubInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
