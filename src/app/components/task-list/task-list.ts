import { Component, EventEmitter, Input,Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../../Models/task.model';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {

  editingIndex: number | null = null;
  editingTitle: string = '';


  @Input() tasks: Task[] = [];

  @Output() deleteTask = new EventEmitter<number>();

  @Output() editTask = new EventEmitter<{index: number, newTitle: string}>();

  startEditing(index: number, currentTitle: string) {
  this.editingIndex = index;
  this.editingTitle = currentTitle;
  }

saveEdit(index: number) {
  if (this.editingTitle.trim() !== '') {
    this.editTask.emit({ index: index, newTitle: this.editingTitle.trim() });
  }
  this.editingIndex = null;
  this.editingTitle = '';
}



}
