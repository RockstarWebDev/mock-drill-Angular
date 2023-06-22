import { Component } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent {
   users:string[] = [];
   newUser:string = '';
   selectedUser:string = '';
   selectedUserIndex: number = -1;


   addUser():void{
    if (this.selectedUser.trim() !== '') {
      this.users.push(this.selectedUser);
      this.selectedUser = '';
    }
   }

   editUser(index:number):void{
    this.selectedUser = this.users[index];
    this.selectedUserIndex = index;
   }

   updateUser(){
    console.log('Updating user:', this.selectedUser);
    if (this.selectedUserIndex !== -1 && this.selectedUser.trim() !== '') {
      this.users[this.selectedUserIndex] = this.selectedUser;
      this.selectedUser = '';
      this.selectedUserIndex = -1;
    }
    console.log('Updated users:', this.users);
   }
 
   deleteUser(i: number){
    this.users.splice(i,1);
   }

   cancelEdit(): void {
    this.selectedUser = '';
    this.selectedUserIndex = -1;
  }
}
