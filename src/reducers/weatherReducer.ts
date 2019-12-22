import { actionTypes } from '../constants';
import { IWeatherAction } from '../models/actions';
import { IWeatherState } from '../models/states';
import weatherData from '../services/data.json';

const initialState: IWeatherState = {
	weatherData
};

const weatherReducer = (state = initialState, action: IWeatherAction) => {
	switch (action.type) {
		case actionTypes.KEYWORD_CHANGE:
			return {
				weatherData: weatherData.filter(weather =>
					weather.name.toLowerCase().includes(action.payload.toLowerCase())
				)
			};
		default:
			return state;
	}
};

export default weatherReducer;
