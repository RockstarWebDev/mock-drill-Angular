import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-on-it',
  templateUrl: './parent-on-it.component.html',
  styleUrls: ['./parent-on-it.component.css'],
})
export class ParentOnItComponent {
  arbitraryData: string = 'initial';

  constructor() {
    setTimeout(() => {
      this.arbitraryData = 'final';
    }, 2000);
  }
}
