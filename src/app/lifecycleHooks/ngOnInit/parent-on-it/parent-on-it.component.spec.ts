import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOnItComponent } from './parent-on-it.component';

describe('ParentOnItComponent', () => {
  let component: ParentOnItComponent;
  let fixture: ComponentFixture<ParentOnItComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentOnItComponent]
    });
    fixture = TestBed.createComponent(ParentOnItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
