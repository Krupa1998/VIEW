import React from 'react'
import '../assets/css/App.css';
import HomePage from '../Pages/HomePage';
import LogInPage from '../Pages/LogInPage';
import SignUpPage from '../Pages/SignUpPage';
import MoviesListingPage from '../Pages/MoviesListingPage';
import TVShowsListingPage from '../Pages/TVShowsListingPage';
import MovieDetailsPage from '../Pages/MovieDetailsPage';
import TVShowDetailsPage from '../Pages/TVShowDetailsPage';

import { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {

  return (

    <Router>

      <Switch>

        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/login">
          <LogInPage />
        </Route>

        <Route path="/signup">
          <SignUpPage />
        </Route>

        <Route path="/movieslist">
          <MoviesListingPage />
        </Route>

        <Route path="/tvlist">
          <TVShowsListingPage />
        </Route>

        <Route path="/movie/:id">
          <MovieDetailsPage />
        </Route>

        <Route path="/tv/:id">
          <TVShowDetailsPage />
        </Route>

      </Switch>

    </Router >

  )
}

export default App
