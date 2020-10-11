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
 To read code start from /Pages
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
