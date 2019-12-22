import React from 'react';
import { shallow } from 'enzyme';
import WeatherCard from './index';

describe('WeatherCard Component', () => {
  it('should render without crashing', () => {
    const props = {
      city: 'Sydney',
      weatherState: 'Clear',
      temp: 26.8,
      minTemp: 23.9,
      maxTemp: 30,
      windSpeed: 2.6,
      humidity: 44,
      iconUrl: 'http://openweathermap.org/img/wn/01d@2x.png'
    };
    const wrapper = shallow(<WeatherCard {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
