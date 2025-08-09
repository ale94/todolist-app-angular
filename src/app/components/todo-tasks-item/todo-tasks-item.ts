import { Component, input } from '@angular/core';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'todo-tasks-item',
  imports: [],
  templateUrl: './todo-tasks-item.html'
})
export class TodoTasksItem {

  task = input.required<Task>();

}
