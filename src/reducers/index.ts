import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';

const rootReducers = combineReducers({
	weather: weatherReducer
});

export default rootReducers;
