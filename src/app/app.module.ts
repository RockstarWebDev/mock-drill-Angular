import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserManagementComponent } from './User Management Component/user-management/user-management.component';
import { CounterComponent } from './counter/counter/counter.component';
import { TaskListComponent } from './Persisting Data Localstorage/task-list/task-list.component';

import { DestinationComponent } from './parent-child/destination/destination.component';
import { SourceComponent } from './parent-child/source/source.component';
import { CharCounterComponent } from './char counter/char-counter/char-counter.component';
import { PalindromeComponent } from './palindrome/palindrome.component';
import { ChunkyMonkeyComponent } from './chunky-monkey/chunky-monkey.component';
import { ProjectedContentComponent } from './ngAfterContentInit/projected-content/projected-content.component';
import { CardComponent } from './ngAfterContentInit/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent,
    CounterComponent,
    TaskListComponent,
    DestinationComponent,
    SourceComponent,
    CharCounterComponent,
    PalindromeComponent,
    ChunkyMonkeyComponent,
    ProjectedContentComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
