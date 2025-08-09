import { Component, input } from '@angular/core';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'todo-tasks',
  imports: [],
  templateUrl: './todo-tasks.html',
})
export class TodoTasks {
  tasks = input.required<Task[]>();
}
