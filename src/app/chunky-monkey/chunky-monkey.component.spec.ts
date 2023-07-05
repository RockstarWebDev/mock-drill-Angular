import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChunkyMonkeyComponent } from './chunky-monkey.component';

describe('ChunkyMonkeyComponent', () => {
  let component: ChunkyMonkeyComponent;
  let fixture: ComponentFixture<ChunkyMonkeyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChunkyMonkeyComponent]
    });
    fixture = TestBed.createComponent(ChunkyMonkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
