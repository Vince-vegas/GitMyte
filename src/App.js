import React, { Fragment } from 'react';
import './App.css';
import './main.scss';

import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SearchedPage from './Pages/SearchedPage';
import GithubProvider from './Context/GithubState';
import UserPage from './Pages/UserPage';
import NavBar from './Components/Navigation/NavBar';

/*
 * Developers
 * If you notice that I'm wrapping all pages/components in one Provider(because it only have 3 pages)
 * GithubProvider
 * even thought you scale the States, the provider will handle a large of states
 * I use Immer Libray, it is the most rewarding data structures library on React to handle a large of states
 * it makes web applications perform to the highest.
 */

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <GithubProvider>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/search" component={SearchedPage} />
          <Route exact path="/user" component={UserPage} />
        </GithubProvider>
      </Switch>
    </Fragment>
  );
};

export default App;
