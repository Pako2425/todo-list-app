import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private tasks: string[] = [];

  addTask(task: string): void {
    this.tasks.push(task)
  }

  getTasks(): string[] {
    return this.tasks;
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }
  
}
