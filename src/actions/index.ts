import { actionTypes } from '../constants';

import { WeatherAction } from '../models/actions';

export const getWeatherCards = (payload: string): WeatherAction => ({
  type: actionTypes.KEYWORD_CHANGE,
  payload
});
