import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Container from './components/Container';
import ErrorMessage from './components/ErrorMessage';
import GridContainer from './components/GridContainer';
import Heading from './components/Heading';
import Input from './components/Input';
import MainContent from './components/MainContent';
import NavBar from './components/NavBar';
import SearchArea from './components/SearchArea';
import WeatherCard from './components/WeatherCard';

import { getWeatherCards } from './actions';
import { IRootState } from './models/states';
import { IWeatherTypes } from './models/weather';

import round from './helpers/round';

interface IWeatherAppProps extends React.Props<IWeatherTypes> {
	weatherData: Array<IWeatherTypes>;
	getWeatherCards(keyword: string): void;
}

interface IState {
	keyword: string;
}

export class App extends React.Component<IWeatherAppProps, IState> {
	public state: IState = {
		keyword: ''
	};

	public onKeywordChange = (value: string) => {
		this.setState({
			keyword: value
		});
		this.props.getWeatherCards(value);
	};

	public renderWeatherCards = (weatherData: IWeatherTypes) => {
		const { name, weather, wind } = weatherData;
		const conditions = weatherData.main;
		const { icon, main } = weather[0];
		const { temp, temp_min, temp_max, humidity } = conditions;
		const { speed } = wind;

		const weatherCardProps = {
			city: name,
			weatherState: main,
			temp: round(temp),
			minTemp: round(temp_min),
			maxTemp: round(temp_max),
			windSpeed: round(speed),
			humidity: round(humidity),
			iconUrl: icon
		};

		return <WeatherCard key={name} {...weatherCardProps} />;
	}

	public render(): React.ReactElement<[]> {
		const { weatherData } = this.props;
		const { keyword } = this.state;

		return (
			<Container>
				<NavBar>
					<Heading>Aussie Weather</Heading>
					<SearchArea>
						<Input
							type='text'
							value={keyword}
							onChange={e => this.onKeywordChange(e.target.value)}
						/>
					</SearchArea>
				</NavBar>
				<MainContent>
					<GridContainer>
						{weatherData[0] ? (
							weatherData.map(weather => this.renderWeatherCards(weather))
						) : (
							<ErrorMessage keyword={keyword} />
						)}
					</GridContainer>
				</MainContent>
			</Container>
		);
	}
}

function mapStateToProps(state: IRootState) {
	return {
		weatherData: state.weather.weatherData
	};
}

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		getWeatherCards: (keyword: string) => {
			dispatch(getWeatherCards(keyword));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
