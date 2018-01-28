import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCompanyInfoComponent } from './company-info.component';

describe('PageFormElementsComponent', () => {
  let component: PageCompanyInfoComponent;
  let fixture: ComponentFixture<PageCompanyInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCompanyInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCompanyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
