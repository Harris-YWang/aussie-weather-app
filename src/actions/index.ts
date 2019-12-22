import { actionTypes } from '../constants';

import { IWeatherAction } from '../models/actions';

export const getWeatherCards = (payload: string): IWeatherAction => ({
	type: actionTypes.KEYWORD_CHANGE,
	payload
});
