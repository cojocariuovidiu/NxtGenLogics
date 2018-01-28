import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTrainMasterComponent } from './train-master.component';

describe('PageFormValidationComponent', () => {
  let component: PageTrainMasterComponent;
  let fixture: ComponentFixture<PageTrainMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTrainMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTrainMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
