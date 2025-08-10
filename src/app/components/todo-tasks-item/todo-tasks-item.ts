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
  edit = output<Task>();
  isEdited = signal(false);

  deleteTask(id: number) {
    this.delete.emit(id);
  }

  changeIsEdit() {
    this.isEdited.set(!this.isEdited());
  }

  editTask(name: string, id: number) {
    const task: Task = {
      id,
      name,
      completed: false,
    };
    this.edit.emit(task);
    this.isEdited.set(!this.isEdited());
  }
}
