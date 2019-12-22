import React from 'react';
import { shallow } from 'enzyme';
import ErrorMessage from './index';

describe('ErrorMessage Component', () => {
  it('should render without crashing', () => {
    const keyword = 'keyword';
    const wrapper = shallow(<ErrorMessage keyword={keyword} />);

    expect(wrapper).toMatchSnapshot();
  });
});
