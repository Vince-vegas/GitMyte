/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import '../../../Styles/user-repos.scss';
import ReposCard from '../../Card/ReposCard';
import ChevronD from '../../Icons/ChevronD';
import FlipMove from 'react-flip-move';

// User Repositories or User Projects

const UserRepos = ({
  showSelection,
  sortByForks,
  sortBySize,
  sortByStars,
  userRepos,
}) => {
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
        <div>
          <FlipMove
            typeName="ul"
            duration={500}
            delay={100}
            easing="ease"
            staggerDurationBy={50}
            className="row"
            name="bouncy"
          >
            {userRepos.map(({ id, ...otherProps }) => {
              return <ReposCard key={id} {...otherProps} />;
            })}
          </FlipMove>
        </div>
      </div>
    </div>
  );
};

export default UserRepos;
