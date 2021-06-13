import { Component } from '@angular/core';
import { CountryCode } from "../../types/country-code";

@Component({
  selector: 'app-country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.scss']
})
export class CountrySelectComponent {

  countryCodes = [
    CountryCode.uk, CountryCode.nl, CountryCode.rs
  ];

  selected = CountryCode.uk;

  get countryClass(): string {
    if (this.selected === CountryCode.uk) {
      return 'uk';
    } else if (this.selected === CountryCode.nl) {
      return 'nl';
    } else if (this.selected === CountryCode.rs) {
      return 'rs';
    }
    return '';
  }

  constructor() { }

  onChange(event: any): void {
    this.selected = event.target.value;
  }

}
