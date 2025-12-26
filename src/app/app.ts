import { TaskService } from './services/task.service';
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
  searchText: string = '';
  selectedFilter: string = 'ALL';
  filteredTasks: Task[] = [];
  showModal = false;

  darkMode: boolean = false;

  constructor(private taskService: TaskService) {
    this.filteredTasks = this.tasks;
  }

  get tasks(): Task[] {
    return this.taskService.getTasks();
  }

  addTask(newTask: string) {
    this.taskService.addTask(newTask);
    this.applyFilter();
  }

  deleteTask(taskIndex: number) {
    this.taskService.deleteTask(taskIndex);
    this.applyFilter();
  }

  updateTask(event: { index: number; newTitle: string }) {
    this.taskService.editTask(event.index, event.newTitle);
    this.applyFilter();
  }

  onSearchClicked(search: string) {
    this.searchText = search;
    this.applyFilter();
  }

  onFilterChanged(filter: string) {
    this.selectedFilter = filter;
    this.applyFilter();
  }

  applyFilter() {
    this.filteredTasks = this.taskService.filterTasks(this.searchText, this.selectedFilter);
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;

    if (this.darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}
