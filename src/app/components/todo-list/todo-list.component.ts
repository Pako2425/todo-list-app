import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  tasks: string[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.tasks = this.todoService.getTasks();
    this.todoService.addTask("Make daddy a sandwitch");
  }

  removeTask(taskIndex: number): void {
    this.todoService.removeTask(taskIndex);
    this.tasks = this.todoService.getTasks();
  }
}
