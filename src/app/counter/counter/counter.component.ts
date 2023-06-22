import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counterValue:number[] = [];

  increment():void {
    this.counterValue.push(this.counterValue.length+1);
  }

  decrement():void {
    if (this.counterValue.length > 0){
      this.counterValue.pop();
    }
  }

  
}
