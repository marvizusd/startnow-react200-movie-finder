import React, { Component } from 'react';

import {
  HashRouter as Router,
  Route, Link
} from 'react-router-dom';

import MovieDetailContainer from './components/MovieDetail';
import MovieSearchContainer from './components/MovieSearch';

export default class App extends Component {
  render() {
    return (
      <Router>
      <div className='container'>
        <Route exact path='/' component={ MovieSearchContainer } />
        <Route path='/movie/:id' component={ MovieDetailContainer } />
      </div>
      </Router>
    );
  }
}
