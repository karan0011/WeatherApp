import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { AirQualityComponent } from './components/air-quality/air-quality.component';
import { WeatherAlertsComponent } from './components/weather-alerts/weather-alerts.component';
import { UVIndexComponent } from './components/uv-index/uv-index.component';
import { NewsComponent } from './components/news/news.component';
import { GroceryComponent } from './components/grocery/grocery.component';
import { FormComponent } from './components/form/form.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'current-weather', component: CurrentWeatherComponent },
  { path: 'forecast', component: ForecastComponent },
  { path: 'air-quality', component: AirQualityComponent },
  { path: 'weather-alerts', component: WeatherAlertsComponent },
  { path: 'uv-index', component: UVIndexComponent },
  { path: 'news', component: NewsComponent },
  { path: 'grocery', component: GroceryComponent },
  { path: 'form', component: FormComponent },
];
