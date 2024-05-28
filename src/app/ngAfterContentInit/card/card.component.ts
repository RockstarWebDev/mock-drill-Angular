import { Component, ContentChild, AfterContentInit } from '@angular/core';
import { ProjectedContentComponent } from '../projected-content/projected-content.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements AfterContentInit {
  @ContentChild(ProjectedContentComponent)
  projectedContent: ProjectedContentComponent;

  ngAfterContentInit(): void {
    console.log('Content has been projected and initialized!');
    // You can now access the projected content and perform any logic on it
    console.log(this.projectedContent);
  }
}
