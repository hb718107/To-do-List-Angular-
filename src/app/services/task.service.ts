import { Injectable } from '@angular/core';
import { Task } from '../Models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    { title: 'Learn Angular basics', completed: false },
    { title: 'Build Todo App', completed: false },
    { title: 'Refactor components', completed: false },
    { title: 'Assignment Done', completed: true },
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(newTask: string) {
    this.tasks.push({ title: newTask, completed: false });
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  editTask(index: number, newTitle: string) {
    this.tasks[index].title = newTitle;
  }

  filterTasks(searchText: string, selectedFilter: string): Task[] {
    return this.tasks.filter(task => {
      const matchesSearch = task.title.toLowerCase().includes(searchText.toLowerCase());
      if (selectedFilter === 'COMPLETED') return matchesSearch && task.completed;
      if (selectedFilter === 'PENDING') return matchesSearch && !task.completed;
      return matchesSearch;
    });
  }
}
