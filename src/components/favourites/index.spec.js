import React from 'react';
import {
  shallow
} from 'enzyme';
import Favorites from './index.jsx';
import { Button } from 'react-bootstrap';


describe('Favourites', () => {
  const props = {
    isFavorite: false,
    toggleFavourites: jest.fn()
  };
  const wrapper = shallow( <Favorites {...props}/> );

  it('render Favorites items', () => {
    expect(wrapper.find(Button).length).toEqual(1);
  });

  it('handle click', () => {
    wrapper.find(Button).simulate('click');
    expect(props.toggleFavourites).toHaveBeenCalled();
  });

  describe('Toggle favorites', () => {
    it('should add to the favourites', () => {
      expect(wrapper.find(Button).text()).toEqual('Save');
    });

    it('should remove to the favourites', () => {
      const newProps = {...props, isFavorite: true };
      const wrapper = shallow( <Favorites {...newProps}/> );

      expect(wrapper.find(Button).text()).toEqual('Remove');
    });
  });
});
