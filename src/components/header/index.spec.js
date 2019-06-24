import React from 'react';
import {
  shallow
} from 'enzyme';
import Header from './index.jsx';
import { Row, Col, Image } from 'react-bootstrap';

it('Header', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find(Row).length).toEqual(2);
  expect(wrapper.find(Col).length).toEqual(1);
  expect(wrapper.find(Image).length).toEqual(1);
});
