import { Component } from '@angular/core';
import { TodoInput } from "../todo-input/todo-input";
import { TodoTasks } from '../todo-tasks/todo-tasks';

@Component({
  selector: 'todo-dashboard',
  imports: [TodoInput, TodoTasks],
  templateUrl: './todo-dashboard.html'
})
export class TodoDashboard {

}
