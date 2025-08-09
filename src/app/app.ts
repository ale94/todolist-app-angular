import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoDashboard } from './components/todo-dashboard/todo-dashboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoDashboard],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('todolist-app');
}
