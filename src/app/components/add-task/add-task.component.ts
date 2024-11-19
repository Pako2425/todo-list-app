import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  newTask: string = '';

  constructor(private todoService: TodoService) {};

  addNewTask(): void {
    if(this.newTask.trim()) {
      this.todoService.addTask(this.newTask);
      this.newTask = '';
    }
  }

}
