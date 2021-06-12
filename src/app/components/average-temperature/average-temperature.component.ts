import { Component, Input } from '@angular/core';
import { Temperature } from "../../types/temperature";
import { format } from 'date-fns';

@Component({
  selector: 'app-average-temperature',
  templateUrl: './average-temperature.component.html',
  styleUrls: ['./average-temperature.component.scss']
})
export class AverageTemperatureComponent {

  @Input() startDate!: Date
  @Input() endDate!: Date;
  @Input() temperature!: Temperature;

  constructor() { }

  get dateInterval(): string {
    const startDate = new Date(this.startDate);
    const endDate = new Date(this.endDate);
    return this.formatDateInterval(format(startDate, 'do'), format(endDate, 'do'),
      format(startDate, 'MMM'), format(endDate, 'MMM'),
      format(startDate, 'Y'), format(endDate, 'Y'));
  }

  formatDateInterval(startDay: string, endDay: string,
                     startMonth: string, endMonth: string,
                     startYear: string, endYear: string): string {
    if (startYear !== endYear) {
      return startMonth + ' ' + startDay + ' ' + startYear + ' - ' + endMonth + ' ' + endDay + ' ' + endYear;
    }
    if (startMonth !== endMonth) {
      return startMonth + ' ' + startDay + ' - ' + endMonth + ' ' + endDay + ' ' + startYear;
    }
    return startMonth + ' ' + startDay + ' - ' + endDay + ' ' + endYear;
  }

  get temperatureCelsius(): number {
    return Math.round(this.temperature.celsius);
  }

}
