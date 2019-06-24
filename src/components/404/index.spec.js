import React from 'react';
import {
  shallow
} from 'enzyme';
import Page404 from './index.jsx';

it('renders link to homepage', () => {
  const wrapper = shallow(<Page404/> );
  expect(wrapper.find('a').props().href).toEqual('http://localhost:3000/')
});