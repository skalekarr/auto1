import React from 'react';
import {
  shallow
} from 'enzyme';
import CustomDropdown from './index.jsx';
import { DropdownButton, Dropdown } from 'react-bootstrap';

describe('Dropdown', () => {
  const props = {
    title: 'title',
    options: [{ name: 'asc'}],
    selected: 'asc',
    handleClick: jest.fn()
  };
  const wrapper = shallow( <CustomDropdown {...props}/> );

  it('render options', () => {
    expect(wrapper.find(DropdownButton).length).toEqual(1);
    expect(wrapper.find(Dropdown.Item).length).toEqual(props.options.length);
  });

  it('handle click', () => {
    wrapper.find(Dropdown.Item).simulate('click');
    expect(props.handleClick).toHaveBeenCalled();
  });
});
