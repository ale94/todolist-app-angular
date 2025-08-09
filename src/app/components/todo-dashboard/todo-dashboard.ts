import { Component } from '@angular/core';
import { TodoInput } from "../todo-input/todo-input";

@Component({
  selector: 'todo-dashboard',
  imports: [TodoInput],
  templateUrl: './todo-dashboard.html'
})
export class TodoDashboard {

}
