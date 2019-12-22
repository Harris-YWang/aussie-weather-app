import React from 'react';
import { mount } from 'enzyme';
import weather from './reducers/mock-data/weather';

import { App } from './App';

describe('Weather App', () => {
  const mockFunction = jest.fn();

  it('should handle keyword change', () => {
    const props = {
      weatherData: weather.weatherData
    };
    const wrapper = mount(
      <App weatherData={props.weatherData} getWeatherCards={mockFunction} />
    );

    expect(wrapper.find('input').props().value).toBe('');

    wrapper.find('input').simulate('change', {
      target: { value: 'Sydney' }
    });

    wrapper.update();

    expect(wrapper.find('input').props().value).toEqual('Sydney');
    expect(wrapper.props().getWeatherCards).toHaveBeenCalledTimes(1);
    expect(wrapper.props().getWeatherCards).toHaveBeenCalledWith('Sydney');
  });
});
