import { City } from "./city";
import { Temperature } from "./temperature";

export interface DayReport {

  id: number;
  city: City;
  date: Date;
  average: Temperature;


}
