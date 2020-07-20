/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from 'react';
import Followers from '../../Card/RatedCard/Followers';
import Following from '../../Card/RatedCard/Following';
import Repos from '../../Card/RatedCard/Repos';
import '../../../Styles/userdetail.scss';
import WorkInfo from '../basic-info/WorkInfo';
import LocationInfo from '../basic-info/LocationInfo';
import JoinedInfo from '../basic-info/JoinedInfo';
import Spinner from '../../Spinner/Spinner';

// User Details && User Status

const UserDetail = ({ userDetails, isLoading }) => {
  const {
    name,
    avatar_url,
    created_at,
    following,
    followers,
    html_url,
    login,
    public_repos,
    company,
    location,
  } = userDetails;

  return (
    <div className="user-detail">
      {isLoading && <Spinner />}

      {/* Read this */}
      {/* User Information of their: */}

      {!isLoading && (
        <Fragment>
          {/* Photo */}
          <div className="user-image">
            <img src={avatar_url} alt={name} />
          </div>

          {/* Link to Github Account */}
          <h3 className="url-name">
            <a href={html_url} target="_blank" rel="noopener noreferrer">
              @{login}
            </a>
          </h3>

          {/* Name */}
          {name && <h2 className="name">{name}</h2>}

          {/* Location, Company Work, when they stared on Github  */}
          <div className="basic-info">
            {company && <WorkInfo company={company} />}
            {location && <LocationInfo location={location} />}
            {created_at && <JoinedInfo created_at={created_at} />}
          </div>

          {/* Status: public repo, followers, following */}
          <div className="user-rates">
            <Repos public_repos={public_repos} />
            <Followers followers={followers} />
            <Following following={following} />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default UserDetail;
