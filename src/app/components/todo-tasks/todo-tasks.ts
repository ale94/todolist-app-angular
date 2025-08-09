import { Component, input } from '@angular/core';
import { Task } from '../../interfaces/task';
import { TodoTasksItem } from '../todo-tasks-item/todo-tasks-item';

@Component({
  selector: 'todo-tasks',
  imports: [TodoTasksItem],
  templateUrl: './todo-tasks.html',
})
export class TodoTasks {
  tasks = input.required<Task[]>();
}
