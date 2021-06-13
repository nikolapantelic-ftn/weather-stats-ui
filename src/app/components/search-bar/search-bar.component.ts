import { Component, Output, EventEmitter, Input } from '@angular/core';
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
  @Input() iconCode: string | undefined = '02d';
  selectedCountryCode = CountryCode.uk;

  weatherApiIconsUrl = 'http://openweathermap.org/img/wn/';

  constructor() {
    this.onSearch = debounce(this.onSearch, 400);
  }

  get iconUrl(): string {
    if (this.iconCode) {
      return this.weatherApiIconsUrl + this.iconCode + '@2x.png';
    }
    return this.weatherApiIconsUrl + '02d@2x.png'
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
