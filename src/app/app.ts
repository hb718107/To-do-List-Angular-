import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoHeader } from './components/todo-header/todo-header';
import { EmptyState } from './components/empty-state/empty-state';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from './Models/task.model';
import { AddTaskModalComponent } from './components/add-task-modal/add-task-modal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoHeader, EmptyState, CommonModule, FormsModule, AddTaskModalComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  tasks: Task[] = [];
  showModal = false;

  addTask(newTask: string) {
    this.tasks.push({ title: newTask, completed: false });
  }
}
