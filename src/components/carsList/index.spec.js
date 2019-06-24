import React from 'react';
import {
  shallow
} from 'enzyme';
import CarsList from './index.jsx';
import { Media, Button } from 'react-bootstrap';

const car = {
  pictureUrl: 'source.png',
  manufacturerName: 'Volkswagen',
  modelName: 'Presco',
  stockNumber: 10123,
  mileage: {
    number: 10,
    unit: 'kms'
  },
  color: 'blue',
  fuelType: 'diesel'
};

describe('CarsList', () => {
  const props = {
    cars: [car],
    viewDetails: jest.fn()
  };
  const wrapper = shallow( < CarsList {...props}/> );

  it('render items', () => {
    expect(wrapper.find(Media).length).toEqual(1);
    expect(wrapper.find(Button).length).toEqual(1);
  });

  it('handle view details', () => {
    wrapper.find(Media).find(Button).simulate('click');
    expect(props.viewDetails).toHaveBeenCalled();
  });
});