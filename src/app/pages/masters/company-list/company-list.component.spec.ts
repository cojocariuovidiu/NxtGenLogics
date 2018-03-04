import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCompanyListComponent } from './company-list.component';

describe('PageTrainLoadingComponent', () => {
  let component: PageCompanyListComponent;
  let fixture: ComponentFixture<PageCompanyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCompanyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCompanyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
