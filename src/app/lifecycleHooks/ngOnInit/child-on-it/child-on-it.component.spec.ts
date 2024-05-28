import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOnItComponent } from './child-on-it.component';

describe('ChildOnItComponent', () => {
  let component: ChildOnItComponent;
  let fixture: ComponentFixture<ChildOnItComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildOnItComponent]
    });
    fixture = TestBed.createComponent(ChildOnItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
