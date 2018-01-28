import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTrainUnloadingComponent } from './trainunloading.component';

describe('PageTrainUnloadingComponent', () => {
  let component: PageTrainUnloadingComponent;
  let fixture: ComponentFixture<PageTrainUnloadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTrainUnloadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTrainUnloadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
