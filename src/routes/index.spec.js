import React from 'react';
import {
  shallow
} from 'enzyme';
import Routing from './index.jsx';
import { BrowserRouter, Route, Switch } from "react-router-dom";

it('Routing', () => {
  const wrapper = shallow(< Routing/> );
  expect(wrapper.find(BrowserRouter).length).toEqual(1);
  expect(wrapper.find(Switch).length).toEqual(1);
  expect(wrapper.find(Route).length).toEqual(3);
});