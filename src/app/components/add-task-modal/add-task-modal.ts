import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'add-task-modal',
  templateUrl: './add-task-modal.html',
  styleUrls: ['./add-task-modal.css'],
  imports: [FormsModule, CommonModule],
})
export class AddTaskModalComponent {
  taskTitle = '';

  @Output() close = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<string>();

  apply() {
    if (this.taskTitle.trim()) {
      this.addTask.emit(this.taskTitle);
      this.taskTitle = '';
      this.close.emit();
    }
  }

  cancel() {
    this.taskTitle = '';
    this.close.emit();
  }
}
