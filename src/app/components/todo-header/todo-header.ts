import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'todo-header',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-header.html',
  styleUrls: ['./todo-header.css'],
})
export class TodoHeader {
  
  searchText: string = '';
  selectedFilter: string = 'ALL';

  
  @Output() searchClicked = new EventEmitter<string>();
  @Output() filterChanged = new EventEmitter<string>();
  @Output() toggleDarkMode = new EventEmitter<void>();


 
  onSearchButtonClick() {
    this.searchClicked.emit(this.searchText);
    console.log(this.searchText);
  }

  
  onFilterChange(event: Event) {
    this.selectedFilter = (event.target as HTMLSelectElement).value;
    this.filterChanged.emit(this.selectedFilter);
    console.log(this.selectedFilter);
  }

  onDarkModeClick() {
  this.toggleDarkMode.emit();
}
}
