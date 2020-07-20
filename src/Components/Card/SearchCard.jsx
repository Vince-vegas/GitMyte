import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchCard = ({ users }) => {
  const { avatar_url, login } = users;
  return (
    <div className="w-50 col-md-3 col-sm-4 search-item">
      <div className="search-card">
        <div className="search-img">
          <img src={avatar_url} alt={login} />
        </div>

        <h4>{login}</h4>
        <Link className="visit-btn" to={`user?name=${login}`}>
          Visit Profile
        </Link>
      </div>
    </div>
  );
};

SearchCard.users = {
  avatar_url: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
};

export default SearchCard;
