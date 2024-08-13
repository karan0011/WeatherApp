import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-air-quality',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './air-quality.component.html',
  styleUrls: ['./air-quality.component.css']
})
export class AirQualityComponent {
  airQualityData: any;
  lat: number | null = null;
  lon: number | null = null;

  constructor(private weatherService: WeatherService) {}

  getAirQuality() {
    if (this.lat && this.lon) {
      this.weatherService.getAirQuality(this.lat, this.lon).subscribe(data => this.airQualityData = data);
    }
  }
}
