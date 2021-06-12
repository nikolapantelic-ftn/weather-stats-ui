import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import { Observable } from "rxjs";
import { City } from "../types/city";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private citiesUrl = environment.apiHost + '/cities'

  constructor(private http: HttpClient) { }

  getForCity(city: string): Observable<City> {
    const url = city ? this.citiesUrl + '/' + city : '';
    return this.http.get<City>(url);
  }

}
