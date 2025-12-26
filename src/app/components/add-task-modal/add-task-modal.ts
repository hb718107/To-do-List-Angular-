import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add-task-modal',
  templateUrl: './add-task-modal.html',
  styleUrls: ['./add-task-modal.css'],
  imports: [CommonModule, FormsModule],
  // host: {
  //   '[class.dark-mode]': 'darkMode'
  // }
})
export class AddTaskModalComponent {
  // @Input() darkMode: boolean = false;
  @Output() addTask = new EventEmitter<string>();
  @Output() close = new EventEmitter<void>();

  newTaskTitle: string = '';

  apply() {
    if (this.newTaskTitle.trim() !== '') {
      this.addTask.emit(this.newTaskTitle.trim());
      this.newTaskTitle = '';
      this.close.emit();
    }
  }

  cancel() {
    this.newTaskTitle = '';
    this.close.emit();
  }
}
