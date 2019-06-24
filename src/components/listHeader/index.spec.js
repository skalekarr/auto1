import React from 'react';
import {
  shallow
} from 'enzyme';
import { Row, Col } from 'react-bootstrap';
import Dropdown from '../dropdown';
import ListHeader from './index.jsx';

describe('Pagination', () => {
  const props = {
    totalCarsCount: 100,
    sortOrder: 'asc',
    handleSort: jest.fn(),
    currentPage: 1,
    totalPageCount: 10,
    itemsPerPage: 10
  };
  
  it('renders components', () => {
    const wrapper = shallow(<ListHeader {...props}/> );
    expect(wrapper.find(Row).length).toEqual(1);
    expect(wrapper.find(Col).length).toEqual(2);
    expect(wrapper.find(Dropdown).length).toEqual(1);
  });

  describe('sort', () => {
    it('should have sort order when present', () => {
      const wrapper = shallow(<ListHeader {...props}/> );
      expect(wrapper.find(Dropdown).props().title).toEqual(props.sortOrder);
    });

    it('should have sort order when present', () => {
      const wrapper = shallow(<ListHeader {...props}/> );
      expect(wrapper.find(Dropdown).props().title).toEqual(props.sortOrder);
    });

    it('should have sort order when present', () => {
      const testProps = {...props, sortOrder: ''};
      const wrapper = shallow(<ListHeader {...testProps}/> );
      wrapper.find(Dropdown).props().handleClick();
      expect(testProps.handleSort).toHaveBeenCalled();
    });

  });

  describe('availale results', () => {
    it('show from the list count', () => {
      const wrapper = shallow(<ListHeader {...props}/> );
      const expectedText = `Showing ${props.currentPage*props.itemsPerPage} of ${props.totalCarsCount} results`;
      expect(wrapper.find('.results').text()).toEqual(expectedText);
    });

    it('show from the list count', () => {
      const testProps = {...props, currentPage: 10};
      const wrapper = shallow(<ListHeader {...testProps}/> );
      const expectedText = `Showing ${testProps.totalCarsCount} of ${testProps.totalCarsCount} results`;
      expect(wrapper.find('.results').text()).toEqual(expectedText);
    });
  });
});