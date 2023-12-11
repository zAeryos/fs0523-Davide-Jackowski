import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = 'd968f3964c47fbe252a96bcb365bb129';
  // d968f3964c47fbe252a96bcb365bb129
  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${this.apiKey}`;
    return this.http.get(apiUrl);
  }
}
