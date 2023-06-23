import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  receivedData:string = '';

  constructor(private dataService:DataService){}

  ngOnInit(): void {
    this.dataService.getData().subscribe({
      next: (data:string) =>{
        this.receivedData = data;
      }, error: (error) =>{
          console.log("not getting data in destination",error);
      }
    });
  }

}
