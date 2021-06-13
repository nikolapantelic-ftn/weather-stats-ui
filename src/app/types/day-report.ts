import { City } from "./city";
import { Temperature } from "./temperature";
import { HourReport } from "./hour-report";

export interface DayReport {

  id: number;
  city: City;
  date: Date;
  average: Temperature;
  hourReports: HourReport[];


}
