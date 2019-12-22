import { WeatherTypes } from '../models/weather';

export interface WeatherState {
  weatherData: Array<WeatherTypes>;
}

export interface RootState {
  weather: WeatherState;
}
