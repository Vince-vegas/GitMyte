import React from 'react';
import SearchInput from '../Components/Search/SearchInput';
import GithubIcon from '../Components/Icons/GithubIcon';
import '../Styles/homepage.scss';

const Home = () => (
  <div className="main-page">
    <div className="container">
      <div className="page-content">
        <GithubIcon />
        <h1>Search Github Users</h1>
        <SearchInput />
      </div>
    </div>
  </div>
);

export default Home;
