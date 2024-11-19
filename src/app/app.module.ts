import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoService } from './services/todo.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, AddTaskComponent, TodoListComponent],
  imports: [BrowserModule, FormsModule],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}