import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-on-it',
  templateUrl: './child-on-it.component.html',
  styleUrls: ['./child-on-it.component.css'],
})
export class ChildOnItComponent implements OnInit {
  @Input() data: string = '';
  lifecycleTicks: number = 0;

  ngOnInit(): void {
    this.lifecycleTicks++;
  }
}
