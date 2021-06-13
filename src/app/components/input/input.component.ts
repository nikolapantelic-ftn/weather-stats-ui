import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Output() search = new EventEmitter<string>();
  searchText = '';
  placeholderText = 'Please enter your location';

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe(state => {
      if (state.matches) {
        this.placeholderText = 'Location';
      } else {
        this.placeholderText = 'Please enter your location';
      }
    })
  }

  get background(): string {
    if (this.searchText) {
      return 'background: url("../../../assets/search.svg") no-repeat scroll 0px 7px;' +
        'background-position-x: 98%;'
    }
    return '';
  }

  onKeyUp(): void {
    this.search.emit(this.searchText);
  }

}
