import { shallow } from 'enzyme';
import React from 'react';
import ErrorMessage from './index';

describe('ErrorMessage Component', () => {
	it('should render without crashing', () => {
		const keyword = 'keyword';
		const wrapper = shallow(<ErrorMessage keyword={keyword} />);

		expect(wrapper).toMatchSnapshot();
	});
});
