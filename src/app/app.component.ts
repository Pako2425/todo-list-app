import { Component } from '@angular/core';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [TodoListComponent, AddTaskComponent]
})
export class AppComponent {
  title = 'My Angular App';
}