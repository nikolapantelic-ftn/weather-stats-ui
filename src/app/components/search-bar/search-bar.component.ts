import { Component, Output, EventEmitter } from '@angular/core';
import { debounce } from 'lodash';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  @Output() search = new EventEmitter<string>();

  constructor() {
    this.onSearch = debounce(this.onSearch, 500);
  }

  onSearch(event: any): void {
    this.search.emit(event);
  }

}
