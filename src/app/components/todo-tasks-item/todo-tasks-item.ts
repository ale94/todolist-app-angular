import { Component, input, output, signal } from '@angular/core';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'todo-tasks-item',
  imports: [],
  templateUrl: './todo-tasks-item.html',
})
export class TodoTasksItem {
  task = input.required<Task>();
  delete = output<number>();
  edit = output<string>();

  deleteTask(id: number) {
    this.delete.emit(id);
  }

}
