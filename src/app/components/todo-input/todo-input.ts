import { Component, output, signal } from '@angular/core';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'todo-input',
  imports: [],
  templateUrl: './todo-input.html',
})
export class TodoInput {
  name = signal('');
  completed = signal(false);
  newTask = output<Task>();

  addTask() {
    const newTask: Task = {
      name: this.name(),
      completed: false,
    };
    this.newTask.emit(newTask);
    this.name.set('');
  }
}
