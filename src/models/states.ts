import { IWeatherTypes } from '../models/weather';

export interface IWeatherState {
	weatherData: Array<IWeatherTypes>;
}

export interface IRootState {
	weather: IWeatherState;
}
