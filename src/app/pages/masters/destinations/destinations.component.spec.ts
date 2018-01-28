import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDestinationsComponent } from './destinations.component';

describe('PageDestinationsComponent', () => {
  let component: PageDestinationsComponent;
  let fixture: ComponentFixture<PageDestinationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDestinationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
