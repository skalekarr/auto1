import React from 'react';
import {
  shallow
} from 'enzyme';
import Filters from './index.jsx';
import Dropdown from '../dropdown';
import { Button } from 'react-bootstrap';

describe('Filters', () => {
  const props = {
    selectedColor: 'blue',
    colors: [{ name: 'blue'}],
    manufacturers: [{ name: 'Volkswagen'}],
    selectedManufacturer: 'Volkswagen',
    handleFilterChange: jest.fn(),
    handleFilterClick: jest.fn()
  };

  const wrapper = shallow(<Filters {...props}/>);

  it('render two dropdowns', () => {
    expect(wrapper.find(Dropdown).length).toEqual(2);
    expect(wrapper.find(Dropdown).at(0).props().title).toEqual(props.selectedColor);
    expect(wrapper.find(Dropdown).at(1).props().title).toEqual(props.selectedManufacturer);
  });

  it('handle filter change', () => {
    wrapper.find(Dropdown).at(0).props().handleClick();
    wrapper.find(Dropdown).at(1).props().handleClick();
    expect(props.handleFilterChange).toHaveBeenCalled()
  });

  it('handle filter click', () => {
    wrapper.find(Button).simulate('click');
    expect(props.handleFilterClick).toHaveBeenCalled()
  });

  it('should have default title', () => {
    const testProps = {
      ...props,
      selectedColor: '',
      selectedManufacturer: ''
    };

    const wrapper = shallow(<Filters {...testProps}/>);
    expect(wrapper.find(Dropdown).at(0).props().title).toEqual('All the colors');
    expect(wrapper.find(Dropdown).at(1).props().title).toEqual('All the Manufacturers');
  });
});
