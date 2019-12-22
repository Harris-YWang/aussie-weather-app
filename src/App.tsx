import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import Heading from './components/Heading';
import NavBar from './components/NavBar';
import Container from './components/Container';
import SearchArea from './components/SearchArea';
import Input from './components/Input';
import MainContent from './components/MainContent';
import GridContainer from './components/GridContainer';
import WeatherCard from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';

import { WeatherTypes } from './models/weather';
import { RootState } from './models/states';
import { getWeatherCards } from './actions';

import round from './helpers/round';

interface WeatherAppProps extends React.Props<WeatherTypes> {
  weatherData: Array<WeatherTypes>;
  getWeatherCards: (keyword: string) => void;
}

type State = {
  keyword: string;
};

export class App extends React.Component<WeatherAppProps, State> {
  state: State = {
    keyword: ''
  };

  onKeywordChange = (value: string) => {
    this.setState({
      keyword: value
    });
    this.props.getWeatherCards(value);
  };

  renderWeatherCards = (weatherData: WeatherTypes) => {
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
  };

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
              weatherData.map(weatherData =>
                this.renderWeatherCards(weatherData)
              )
            ) : (
              <ErrorMessage keyword={keyword} />
            )}
          </GridContainer>
        </MainContent>
      </Container>
    );
  }
}

function mapStateToProps(state: RootState) {
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
