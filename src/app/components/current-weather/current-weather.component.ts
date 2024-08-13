import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent {
  weatherData: any;
  city: string = '';

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    if (this.city) {
      this.weatherService.getCurrentWeather(this.city).subscribe(data => this.weatherData = data);
    }
  }
}
