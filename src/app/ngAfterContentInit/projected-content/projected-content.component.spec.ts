import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectedContentComponent } from './projected-content.component';

describe('ProjectedContentComponent', () => {
  let component: ProjectedContentComponent;
  let fixture: ComponentFixture<ProjectedContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectedContentComponent]
    });
    fixture = TestBed.createComponent(ProjectedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
