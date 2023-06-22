import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserManagementComponent } from './User Management Component/user-management/user-management.component';
import { CounterComponent } from './counter/counter/counter.component';
import { TaskListComponent } from './Persisting Data Localstorage/task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent,
    CounterComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
