/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import '../../../Styles/user-repos.scss';
import ReposCard from '../../Card/ReposCard';
import { withRouter } from 'react-router-dom';
import { GithubContext } from '../../../Context/GithubState';
import ChevronD from '../../Icons/ChevronD';
import FlipMove from 'react-flip-move';

// User Repositories or User Projects

const UserRepos = (props) => {
  const githubContext = useContext(GithubContext);
  const {
    userRepos,
    getUserRepo,
    dispatch,
    showSelection,
    sortByStars,
    sortByForks,
    sortBySize,
  } = githubContext;

  useEffect(() => {
    const queryStr = new URLSearchParams(props.location.search);
    const name = queryStr.get('name');

    getUserRepo(name);

    return () => {
      dispatch({ type: 'set-user-repos', repos: [] });
    };
  }, []);

  return (
    <div className="user-repos">
      <div className="lg-container">
        <div className="row page-title">
          <div className="w-50 col-sm-6">
            <h1>Top Repos</h1>
          </div>
          <div className="w-50 col-sm-6">
            <div className="sort-box">
              <span>Sort by:</span>
              <button className="slc-btn" onClick={showSelection}>
                <span>Stars</span> <ChevronD />
              </button>
              <ul className="sort-menu">
                <li className="sort-list">
                  <button className="sort-link" onClick={sortByStars}>
                    Stars
                  </button>
                </li>
                <li className="sort-list">
                  <button className="sort-link" onClick={sortByForks}>
                    Forks
                  </button>
                </li>
                <li className="sort-list">
                  <button className="sort-link" onClick={sortBySize}>
                    Size
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          {userRepos.map(({ id, ...otherProps }) => {
            return <ReposCard key={id} {...otherProps} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default withRouter(UserRepos);
