import { Component } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent {
   users:string[] = [];
   newUser:string = ''


   addUser():void{
     if(this.newUser.trim() !== ''){
      this.users.push(this.newUser);
      this.newUser = '';
     }
   }
 
   deleteUser(i: number){
    this.users.splice(i,1);
   }
}
