import { Component } from '@angular/core';

@Component({
  selector: 'app-chunky-monkey',
  templateUrl: './chunky-monkey.component.html',
  styleUrls: ['./chunky-monkey.component.css']
})
export class ChunkyMonkeyComponent {
  aryElemets: string = '';
  monkey: any[] = [];
  size: number = 0;
  chunks: any[] = [];
 
  
  addElement(): void {
    this.monkey.push(this.aryElemets);
    this.aryElemets = ''; // Reset the input fiel
  }
  
  onChunk(): any[] {
    let  index: number = 0;
    while (index < this.monkey.length) {
      this.chunks.push(this.monkey.slice(index, index + this.size));
      index += this.size;
    }
    return this.chunks;
  }
  
}
