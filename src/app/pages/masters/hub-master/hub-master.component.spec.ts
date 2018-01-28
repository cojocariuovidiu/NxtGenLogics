import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHubMasterComponent } from './hub-master.component';

describe('PageHubMasterComponent', () => {
  let component: PageHubMasterComponent;
  let fixture: ComponentFixture<PageHubMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHubMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHubMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
