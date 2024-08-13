import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {
  forecastData: any;
  city: string = '';

  constructor(private weatherService: WeatherService) {}

  getForecast() {
    if (this.city) {
      this.weatherService.getForecast(this.city).subscribe(data => this.forecastData = data);
    }
  }
}
