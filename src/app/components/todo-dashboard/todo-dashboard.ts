import { Component, signal } from '@angular/core';
import { TodoInput } from '../todo-input/todo-input';
import { TodoTasks } from '../todo-tasks/todo-tasks';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'todo-dashboard',
  imports: [TodoInput, TodoTasks],
  templateUrl: './todo-dashboard.html',
})
export class TodoDashboard {
  title = signal('Lista de Tareas');
  tasks = signal<Task[]>([
    {
      name: 'Tarea 1',
      completed: true,
    },
    {
      name: 'Tarea 2',
      completed: false,
    },
    {
      name: 'Tarea 3',
      completed: true,
    },
  ]);

  addTask(t: Task) {
    this.tasks.update((task) => [...task, t]);
  }
}
