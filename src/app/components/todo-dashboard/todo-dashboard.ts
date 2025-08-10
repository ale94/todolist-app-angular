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
      id: 1,
      name: 'Realizar curso de angular',
      completed: true,
    },
    {
      id: 2,
      name: 'Escuchar musica de eminem',
      completed: false,
    },
    {
      id: 3,
      name: 'Ir a correr',
      completed: true,
    },
  ]);

  addTask(t: Task) {
    this.tasks.update((task) => [...task, t]);
  }

  updateTaskCompletion(inputTask: Task) {
    this.tasks.update((tasks) =>
      tasks.map((task) =>
        task.id === inputTask.id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  deleteTask(id: number) {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== id));
  }
}
