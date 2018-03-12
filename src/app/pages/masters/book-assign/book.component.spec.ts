import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBookAssignComponent } from './book.component';

describe('PageFormElementsComponent', () => {
  let component: PageBookAssignComponent;
  let fixture: ComponentFixture<PageBookAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBookAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBookAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
