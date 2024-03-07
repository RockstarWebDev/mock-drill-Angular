import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnChanges {
  @Input() data: string = '';
  lifecycleTicks: number = 0;

  ngOnChanges(): void {
    this.lifecycleTicks++;
  }
}
