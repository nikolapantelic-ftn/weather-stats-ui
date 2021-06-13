import { Temperature } from "./temperature";

export interface HourReport {

  id: number;
  time: Date;
  weatherIcon: string;
  temperature: Temperature

}
