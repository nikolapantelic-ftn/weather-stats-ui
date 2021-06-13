import { Component, Output, EventEmitter } from '@angular/core';
import { debounce } from 'lodash';
import { CitySearchQuery } from "../../types/city-search-query";
import { CountryCode } from "../../types/country-code";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  @Output() search = new EventEmitter<CitySearchQuery>();
  selectedCountryCode = CountryCode.uk;


  constructor() {
    this.onSearch = debounce(this.onSearch, 400);
  }

  onSearch(event: any): void {
    const searchQuery: CitySearchQuery = {
      cityName: event,
      countryCode: this.selectedCountryCode
    }
    this.search.emit(searchQuery);
  }

  onChange(event: any) {
    this.selectedCountryCode = event.target.value;
  }

}
