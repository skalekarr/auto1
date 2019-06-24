import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CarsList from '../containers/list';
import CarDetails from '../containers/details';
import Page404 from '../components/404';

const routes = () =>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={CarsList} />
      <Route path="/stockNumber/:stockNumber" component={CarDetails} />
      <Route path="" component={Page404} />
    </Switch>
  </BrowserRouter>

export default routes;