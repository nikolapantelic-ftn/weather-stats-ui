import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-stats-ui';

  temperature: number | null = null;

  get backgroundGradient(): string {
    let red;
    let blue;
    let green;
    if (!this.temperature) {
      red = 255;
      blue = 255;
      green = 255;
    } else {
      red = (this.temperature + 40) / 80 * 255;
      blue = 255 - (this.temperature + 40) / 80 * 255;
      green = 130;
    }
    return 'linear-gradient(135deg, rgba(55,66,255,1) 0%, rgba(11,198,255,1) 28%, rgba(' + red + ','+ green +',' + blue + ',1) 100%);'
  }

  onCityChanged(event: any): void {
    if (event.average) {
      this.temperature = event.average.celsius;
    } else {
      this.temperature = null;
    }
  }
}
