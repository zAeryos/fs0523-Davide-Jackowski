import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  cities      : string[]  = ['London', 'New York', 'Tokyo'];
  weatherData : any[]     = [];
  searchCity  : string    = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getCitiesWeather();
  }

  getCitiesWeather(): void {
    this.cities.forEach((city) => {
      this.weatherService.getWeather(city).subscribe((data) => {
        console.log(data.list[0])
        this.weatherData.push({
          city: city,
          data: data
        });
      });
    });
  }

  kelvinToCelsius(temp: number): number {
    return Number.parseFloat((Math.round((temp - 273.15) * 100) / 100).toFixed(1));
  }

  getWeatherImage(weather: string): string {
    if (weather === 'Clear') {
      return '../../../assets/sunny.png';
    } else if (weather === 'Clouds') {
      return '../../../assets/cloudy.png';
    } else if (weather === 'Rain') {
      return '../../../assets/rainy.png';
    } else if (weather === 'Thunderstorm') {
      return '../../../assets/thunderstorm.png';
    } else if (weather === 'Snow') {
      return '../../../assets/snowy.png'
    } else {
      return '../../../assets/rainbow.png';
    }
  }

  searchWeather(): void {
    if (this.searchCity) {
      this.weatherService.getWeather(this.searchCity).subscribe((data) => {
        this.weatherData = [data];
      });
    }
  }
}
