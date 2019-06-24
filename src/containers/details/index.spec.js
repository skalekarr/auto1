import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import ConnectedDetail, { Details } from './index.jsx';
import * as utils from '../../utils/generic';

describe('<Detail />', () => {
  const props = {
    getCarDetails: jest.fn(),
    car: {
      stockNumber: 11023
    },
    match: {
      params: {
        stockNumber: 11023
      }
    }
  };
  const wrapper = shallow(<Details {...props} />);

  it('componentDidMount', () => {
    wrapper.instance().componentDidMount();
    expect(props.getCarDetails).toHaveBeenCalled();
  });

  it('addFavourites', () => {
    const saveState = jest.spyOn(
      utils,
      "saveState"
    );
    wrapper.instance().addFavourites();
    expect(saveState).toHaveBeenCalled();
  });

  it('removeFavourites', () => {
    const removeState = jest.spyOn(
      utils,
      "removeState"
    );
    wrapper.instance().removeFavourites();
    expect(removeState).toHaveBeenCalled();
  });
});

describe('Provider <List /> ', () => {
  let wrapperConnected;

  beforeEach(() => {
    const mockStore = configureStore([]);
    const actions = {
      getCarDetails: jest.fn()
    };
    const props = {
      match: {
        params: {
          stockNumber: 11209
        }
      },
      getCarDetails: jest.fn()
    };
    const store = mockStore({
      carDetails: {
        car: {},
      }
    });
    const context = { store };
    wrapperConnected = shallow(<ConnectedDetail actions={actions} store={store} context={context}><Details {...props} /></ConnectedDetail>);
  });

  it('HamburgerMenu component should exist', () => {
    expect(wrapperConnected).toEqual({});
  });
});

