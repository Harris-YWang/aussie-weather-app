import { actionTypes } from '../constants';
import sydneyWeatherData from './mock-data/sydney';
import weatherData from './mock-data/weather';
import weatherReducer from './weatherReducer';

describe('Weather Reducer', () => {
	it('Should return the initial state', () => {
		const initState = weatherReducer(undefined, { type: actionTypes.INIT });
		expect(initState).toEqual(weatherData);
	});

	it('Should return new state if receiving a keyword', () => {
		const keyword = 'Sydney';
		const newState = weatherReducer(undefined, {
			type: actionTypes.KEYWORD_CHANGE,
			payload: keyword
		});
		expect(newState).toEqual(sydneyWeatherData);
	});
});
