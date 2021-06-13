import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import { Observable } from "rxjs";
import { City } from "../types/city";
import { CitySearchQuery } from "../types/city-search-query";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private citiesUrl = environment.apiHost + '/cities'

  constructor(private http: HttpClient) { }

  get(searchQuery: CitySearchQuery): Observable<City> {
    const url = searchQuery.cityName && searchQuery.countryCode ?
      this.citiesUrl + '/' + searchQuery.countryCode + '/' + searchQuery.cityName : '';
    return this.http.get<City>(url);
  }

}
