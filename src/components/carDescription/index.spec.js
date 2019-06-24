import React from 'react';
import {
  shallow
} from 'enzyme';
import CarDescription from './index.jsx';

it('render car description', () => {
  const props = {
    stockNumber: 10012,
    number: 10,
    unit: 'km',
    fuelType: 'Diesel',
    color: 'Blue' 
  };
  const expectedTest = `Stock # ${props.stockNumber} - ${props.number} ${props.unit} - ${props.fuelType} - ${props.color}`;
  const wrapper = shallow(< CarDescription {...props}/> );
  expect(wrapper.text()).toEqual(expectedTest);
});