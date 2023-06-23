import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent {
   data:string = '';

   constructor(private dataService:DataService){}

   sendData(){
    this.dataService.setData(this.data);
   }
}
