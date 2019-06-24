import React from 'react';
import {
  shallow
} from 'enzyme';
import Pagination from './index.jsx';
import { Row, Button } from 'react-bootstrap';

describe('Pagination', () => {
  const props = {
    goToPage: jest.fn(),
    totalPageCount: 10,
    currentPage: 1
  };
  
  it('renders links', () => {
    const wrapper = shallow(<Pagination {...props}/> );
    expect(wrapper.find(Row).length).toEqual(1);
    expect(wrapper.find(Button).length).toEqual(5);
  });

  describe('First link', () => {
    it('should be disabled if currentPage is 1', () => {
      const wrapper = shallow(<Pagination {...props}/> );
      expect(wrapper.find(Button).at(0).props().disabled).toEqual(true);
      expect(wrapper.find(Button).at(0).text()).toEqual('First');
    });

    it('should be not disabled if currentPage is more than 1', () => {
      const testProps = { ...props, currentPage: 2 };
      const wrapper = shallow(<Pagination { ...testProps }/> );
      expect(wrapper.find(Button).at(0).props().disabled).toEqual(false);
    });

    it('handle click', () => {
      const testProps = { ...props, currentPage: 2 };
      const wrapper = shallow(<Pagination { ...testProps }/> );
      wrapper.find(Button).at(0).simulate('click');
      expect(testProps.goToPage).toHaveBeenCalled();
    });
  });

  describe('Previous link', () => {
    it('should be disabled if currentPage is 1', () => {
      const wrapper = shallow(<Pagination {...props}/> );
      expect(wrapper.find(Button).at(1).props().disabled).toEqual(true);
      expect(wrapper.find(Button).at(1).text()).toEqual('Previous');

    });

    it('should be not disabled if currentPage is more than 1', () => {
      const testProps = { ...props, currentPage: 2 };
      const wrapper = shallow(<Pagination { ...testProps }/> );
      expect(wrapper.find(Button).at(1).props().disabled).toEqual(false);
    });

    it('handle click', () => {
      const testProps = { ...props, currentPage: 2 };
      const wrapper = shallow(<Pagination { ...testProps }/> );
      wrapper.find(Button).at(1).simulate('click');
      expect(testProps.goToPage).toHaveBeenCalled();
    });
  });

  describe('Third link', () => {
    it('should be disabled', () => {
      const wrapper = shallow(<Pagination {...props}/> );
      expect(wrapper.find(Button).at(2).props().disabled).toEqual(true);
      expect(wrapper.find(Button).at(2).text()).toEqual('Page 1 of 10');
    });
  });

  describe('Next link and Last link', () => {
    it('should be disabled if currentPage is 10', () => {
      const testProps = {...props, currentPage: 10};
      const wrapper = shallow(<Pagination {...testProps}/> );
      expect(wrapper.find(Button).at(4).props().disabled).toEqual(true);
      expect(wrapper.find(Button).at(3).props().disabled).toEqual(true);
    });

    it('should be not disabled if currentPage is more than 1', () => {
      const testProps = { ...props, currentPage: 2 };
      const wrapper = shallow(<Pagination { ...testProps }/> );
      expect(wrapper.find(Button).at(3).props().disabled).toEqual(false);
      expect(wrapper.find(Button).at(4).props().disabled).toEqual(false);
    });

    it('handle click', () => {
      const testProps = { ...props, currentPage: 2 };
      const wrapper = shallow(<Pagination { ...testProps }/> );
      wrapper.find(Button).at(3).simulate('click');
      wrapper.find(Button).at(4).simulate('click');
      expect(testProps.goToPage).toHaveBeenCalled();
    });
  });
});