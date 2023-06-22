import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
 tasks: string[] = [];
 newTask: string = '';

  constructor(private taskService: TaskService){
    this.tasks = this.taskService.getTasks();
  }
 
  addTask(){
    if(this.newTask){
      this.taskService.addTasks(this.newTask);
      this.tasks = this.taskService.getTasks();
      this.newTask = '';
    }
  } 

  deleteTask(index: number): void {
    this.taskService.deleteTasks(index);
    this.tasks = this.taskService.getTasks();
  }
}
