import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather-alerts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weather-alerts.component.html',
  styleUrls: ['./weather-alerts.component.css']
})
export class WeatherAlertsComponent {
  alertsData: any;
  lat: number | null = null;
  lon: number | null = null;

  constructor(private weatherService: WeatherService) {}

  getWeatherAlerts() {
    if (this.lat && this.lon) {
      this.weatherService.getWeatherAlerts(this.lat, this.lon).subscribe(data => this.alertsData = data);
    }
  }
}
