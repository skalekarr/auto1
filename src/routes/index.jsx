import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CarsList from '../containers/list/index.jsx';
import CarDetails from '../containers/details/index.jsx'
import Page404 from '../components/Page404/index.jsx'

const routing = () =>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={CarsList} />
      <Route path="/stockNumber/:stockNumber" component={CarDetails} />
      <Route path="" component={Page404} />
    </Switch>
  </BrowserRouter>

export default routing;