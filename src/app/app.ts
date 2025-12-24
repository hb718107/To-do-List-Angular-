import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoHeader } from './components/todo-header/todo-header';
import { EmptyState } from './components/empty-state/empty-state';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from './Models/task.model';
import { AddTaskModalComponent } from './components/add-task-modal/add-task-modal';
import { TaskList } from './components/task-list/task-list';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoHeader, EmptyState, CommonModule, FormsModule, AddTaskModalComponent, TaskList],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  tasks: Task[] = [
  { title: 'Learn Angular basics', completed: false },
  { title: 'Build Todo App', completed: true },
  { title: 'Refactor components', completed: false }
];

  showModal = false;

  addTask(newTask: string) {
    this.tasks.push({ title: newTask, completed: false });
    // console.log(this.tasks);
  }
  deleteTask(taskIndex: number) {
    this.tasks.splice(taskIndex, 1);
  }
  updateTask(event: {index: number, newTitle: string}) {
    this.tasks[event.index].title = event.newTitle;
  }
}
