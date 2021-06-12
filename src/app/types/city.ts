import { Temperature } from "./temperature";
import { DayReport } from "./day-report";

export interface City {

  id: number;
  name: string;
  average: Temperature;
  dayReports: DayReport[];

}
