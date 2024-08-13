import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-uv-index',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './uv-index.component.html',
  styleUrls: ['./uv-index.component.css']
})
export class UVIndexComponent {
  uvIndexData: any;
  lat: number | null = null;
  lon: number | null = null;

  constructor(private weatherService: WeatherService) {}

  getUVIndex() {
    if (this.lat && this.lon) {
      this.weatherService.getUVIndex(this.lat, this.lon).subscribe(data => this.uvIndexData = data);
    }
  }
}
