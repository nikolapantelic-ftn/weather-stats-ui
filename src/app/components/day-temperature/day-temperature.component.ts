import { Component, Input } from '@angular/core';
import { format } from 'date-fns';
import { Temperature } from "../../types/temperature";

@Component({
  selector: 'app-day-temperature',
  templateUrl: './day-temperature.component.html',
  styleUrls: ['./day-temperature.component.scss']
})
export class DayTemperatureComponent {

  @Input() date!: Date;
  @Input() temperature!: Temperature;

  constructor() { }

  get dayOfWeek(): string {
    return format(new Date(this.date), 'eeee');
  }

  get temperatureCelsius(): number {
    return Math.round(this.temperature.celsius);
  }

}
