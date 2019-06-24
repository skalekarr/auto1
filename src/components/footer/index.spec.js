import React from 'react';
import {
  shallow
} from 'enzyme';
import Footer from './index.jsx';
import { Row } from 'react-bootstrap';

it('Footer', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.find(Row).text()).toEqual('© AUTO1 Group 2018')
});
