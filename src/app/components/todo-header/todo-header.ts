import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'todo-header',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-header.html',
  styleUrl: './todo-header.css',
})
export class TodoHeader {

}
