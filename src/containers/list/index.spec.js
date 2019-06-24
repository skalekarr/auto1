import React from 'react';
import { shallow } from 'enzyme';
import { List } from './index.jsx';

describe('<List />', () => {
  const props = {
    getCarsList: jest.fn(),
    getFilterColors: jest.fn(),
    getFilterManufacturers: jest.fn(),
    setFilters: jest.fn(),
    setSortOrder: jest.fn(),
    cars: [{}],
    colors: [{ name: 'blue' }],
    currentPage: 10,
    selectedColor: 'blue',
    selectedManufacturer: 'Volkswagen',
    manufacturers: [{ name: 'Volkswagen' }],
    sortOrder: 'asc',
    totalCarsCount: 10,
    totalPageCount: 1,
    history: {
      push: jest.fn()
    },
  };
  const wrapper = shallow(<List {...props} />);

  it('componentDidMount', () => {
    wrapper.instance().componentDidMount();
    expect(props.getCarsList).toHaveBeenCalled();
    expect(props.getFilterColors).toHaveBeenCalled();
    expect(props.getFilterManufacturers).toHaveBeenCalled();
  });

  describe('handleFilterChange', () => {
    it('should set filter to colors', () => {
      const event = {
        type: 'color',
        color: 'blue'
      };
      wrapper.instance().handleFilterChange(event);
      expect(props.setFilters).toHaveBeenCalled();
    });

    it('should set filter to manufacturer', () => {
      const event = {
        type: 'manufacturer',
        color: 'Volkswagen'
      };
      wrapper.instance().handleFilterChange(event);
      expect(props.setFilters).toHaveBeenCalled();
    });
  });

  it('handleFilterClick', () => {
    wrapper.instance().handleFilterClick();
    expect(props.getCarsList).toHaveBeenCalled();
  });

  it('handleSort', () => {
    wrapper.instance().handleSort('sort');
    expect(props.getCarsList).toHaveBeenCalled();
    expect(props.setSortOrder).toHaveBeenCalled();
  });

  it('viewDetails', () => {
    wrapper.instance().viewDetails();
    expect(props.history.push).toHaveBeenCalled();
  });

  it('goToPage', () => {
    wrapper.instance().goToPage();
    expect(props.getCarsList).toHaveBeenCalled();
  });
});
