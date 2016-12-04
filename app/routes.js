// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import MangaReader from './containers/MangaReader';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/view" component={MangaReader} />
  </Route>
);
