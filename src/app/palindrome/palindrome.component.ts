import { Component } from '@angular/core';


@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.css']
})
export class PalindromeComponent {
  newTodoTitle: string = ''; // Initialize with an empty string
  todos: string[] = [];
  inputArray:string[]=[];

  addTodo() {
    if (this.newTodoTitle.trim()) {
      this.todos.push(this.newTodoTitle);
      this.newTodoTitle = ''; // Reset the input field
    }
  }

  findPalindromes(){
    for (let i = 0; i <this.todos.length; i++) {
      const element = this.todos[i].toString();
      const reverse = element.split('').reverse().join('');

      if(element == reverse){
        this.inputArray.push(element);
      }
    }
      return this.inputArray;
  }
}
