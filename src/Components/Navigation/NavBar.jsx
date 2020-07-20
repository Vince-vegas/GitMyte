import React from 'react';
import { Link } from 'react-router-dom';
import GithubIcon from '../Icons/GithubIcon';
import '../../Styles/navbar.scss';

const NavBar = () => {
  return (
    <div className="main-header">
      <nav className="nav">
        <div className="logo-box">
          <p className="logo">
            <GithubIcon /> GitMyte
          </p>
        </div>

        <div className="right-box">
          <Link className="link" to="/">
            Home
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
