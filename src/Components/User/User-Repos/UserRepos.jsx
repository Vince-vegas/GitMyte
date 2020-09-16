/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import '../../../Styles/user-repos.scss';
import ReposCard from '../../Card/ReposCard';
import ChevronD from '../../Icons/ChevronD';
import FlipMove from 'react-flip-move';

// User Repositories or User Projects

const UserRepos = ({
  sortByForks,
  sortBySize,
  sortByStars,
  selectedRepos,
  onShowMore,
  isShowMore,
  sortedBy,
}) => {
  const [showSort, setShowSort] = useState(false);

  const showSortSelection = () => setShowSort(!showSort);

  const onSortStars = () => {
    setShowSort(!showSort);
    sortByStars();
  };

  const onSortForks = () => {
    setShowSort(!showSort);
    sortByForks();
  };

  const onSortSize = () => {
    setShowSort(!showSort);
    sortBySize();
  };

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
              <button
                className={`${
                  !showSort ? 'slc-btn' : 'slc-btn slc-btn-toggle'
                }`}
                onClick={showSortSelection}
              >
                <span>{sortedBy}</span> <ChevronD showSort={showSort} />
              </button>
              <ul
                className={`${
                  !showSort ? 'sort-menu' : 'sort-menu sort-toggle'
                }`}
              >
                <li className="sort-list">
                  <button className="sort-link" onClick={onSortStars}>
                    Stars
                  </button>
                </li>
                <li className="sort-list">
                  <button className="sort-link" onClick={onSortForks}>
                    Forks
                  </button>
                </li>
                <li className="sort-list">
                  <button className="sort-link" onClick={onSortSize}>
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
          >
            {selectedRepos &&
              selectedRepos.map(({ id, ...otherProps }) => {
                return <ReposCard key={id} {...otherProps} />;
              })}
          </FlipMove>

          {selectedRepos && (
            <button className="more-btn" onClick={onShowMore}>
              {isShowMore ? 'Show Less' : 'Show More'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserRepos;
