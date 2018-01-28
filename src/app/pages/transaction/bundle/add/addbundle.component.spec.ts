import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddBundleComponent } from './addbundle.component';

describe('PageAddBundleComponent', () => {
  let component: PageAddBundleComponent;
  let fixture: ComponentFixture<PageAddBundleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAddBundleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
