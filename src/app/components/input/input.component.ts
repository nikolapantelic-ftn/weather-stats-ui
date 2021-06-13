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

  onKeyUp(): void {
    this.search.emit(this.searchText);
  }

}
