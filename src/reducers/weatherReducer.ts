import { actionTypes } from '../constants';
import weatherData from '../services/data.json';
import { WeatherAction } from '../models/actions';
import { WeatherState } from '../models/states';

const initialState: WeatherState = {
  weatherData: weatherData
};

const weatherReducer = (state = initialState, action: WeatherAction) => {
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
