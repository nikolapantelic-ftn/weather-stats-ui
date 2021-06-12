import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Output() search = new EventEmitter<string>();
  searchText = '';

  constructor() { }

  onKeyUp(): void {
    this.search.emit(this.searchText);
  }

}
