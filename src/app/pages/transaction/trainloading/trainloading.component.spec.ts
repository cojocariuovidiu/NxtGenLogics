import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTrainLoadingComponent } from './trainloading.component';

describe('PageTrainLoadingComponent', () => {
  let component: PageTrainLoadingComponent;
  let fixture: ComponentFixture<PageTrainLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTrainLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTrainLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
