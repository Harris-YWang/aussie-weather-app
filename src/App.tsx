import React from 'react';

import Heading from './components/Heading';
import NavBar from './components/NavBar';
import Container from './components/Container';
import SearchArea from './components/SearchArea';
import Input from './components/Input';
import MainContent from './components/MainContent';
import GridContainer from './components/GridContainer';
import WeatherCard from './components/WeatherCard';

import { WeatherTypes } from './models/weather';
import { RootState } from './models/states';

import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { getWeatherCards } from './actions';

interface WeatherAppProps extends React.Props<WeatherTypes> {
  weatherData: Array<WeatherTypes>;
  getWeatherCards: (keyword: string) => void;
}

type State = {
  keyword: string;
};

class App extends React.Component<WeatherAppProps, State> {
  state: State = {
    keyword: ''
  };

  onKeywordChange = (value: string) => {
    this.setState({
      keyword: value
    });
    this.props.getWeatherCards(value);
  };

  round = (x: number) => Number(x.toFixed(1));

  renderWeatherCards = (weatherData: WeatherTypes) => {
    const { name, weather, wind } = weatherData;
    const conditions = weatherData.main;
    const { icon, main } = weather[0];
    const { temp, temp_min, temp_max, humidity } = conditions;
    const { speed } = wind;

    const weatherCardProps = {
      city: name,
      weatherState: main,
      temp: this.round(temp),
      minTemp: this.round(temp_min),
      maxTemp: this.round(temp_max),
      windSpeed: this.round(speed),
      humidity: this.round(humidity),
      iconUrl: icon
    };

    return <WeatherCard {...weatherCardProps} />;
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
            {weatherData.map(weatherData =>
              this.renderWeatherCards(weatherData)
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
