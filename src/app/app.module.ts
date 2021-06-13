import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { WeatherViewComponent } from './components/weather-view/weather-view.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { DayTemperatureComponent } from './components/day-temperature/day-temperature.component';
import { AverageTemperatureComponent } from './components/average-temperature/average-temperature.component';
import { CountrySelectComponent } from './components/country-select/country-select.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    SearchBarComponent,
    WeatherViewComponent,
    DayTemperatureComponent,
    AverageTemperatureComponent,
    CountrySelectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
