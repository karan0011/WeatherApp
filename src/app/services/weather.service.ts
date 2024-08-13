import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '981185395eadb0b909a48767f02a9d80';  // Replace with your actual API key
  private baseUrl = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) {}

  getCurrentWeather(city: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/weather?q=${city}&appid=${this.apiKey}`);
  }

  getForecast(city: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/forecast?q=${city}&appid=${this.apiKey}`);
  }

  getAirQuality(lat: number, lon: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/air_pollution?lat=${lat}&lon=${lon}&appid=${this.apiKey}`);
  }

  getWeatherAlerts(lat: number, lon: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/alerts?lat=${lat}&lon=${lon}&appid=${this.apiKey}`);
  }

  getUVIndex(lat: number, lon: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/uvi?lat=${lat}&lon=${lon}&appid=${this.apiKey}`);
  }
}
