import React from 'react';

import Heading from './components/Heading';
import NavBar from './components/NavBar';
import Container from './components/Container';
import SearchArea from './components/SearchArea';
import Input from './components/Input';
import MainContent from './components/MainContent';
import GridContainer from './components/GridContainer';
import WeatherCard from './components/WeatherCard';

import weatherData from './services/data.json';

import { WeatherTypes } from './models/weather';

// interface WeatherAppProps extends React.Props<WeatherTypes> {

// }

class App extends React.Component {
  round = (x: number) => Number(x.toFixed(1));

  renderWeatherCard = (weatherData: WeatherTypes) => {
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
    return (
      <Container>
        <NavBar>
          <Heading>Aussie Weather</Heading>
          <SearchArea>
            <Input />
          </SearchArea>
        </NavBar>
        <MainContent>
          <GridContainer>
            {weatherData.map(weatherData =>
              this.renderWeatherCard(weatherData)
            )}
          </GridContainer>
        </MainContent>
      </Container>
    );
  }
}

export default App;
