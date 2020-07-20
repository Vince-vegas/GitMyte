import React from 'react';
import ForkIcon from '../Icons/ForkIcon';
import StarIcon from '../Icons/StarIcon';
import ForkCountIcon from '../Icons/ForkCountIcon';
import Language from '../Languages/Language';

// User Repositories
// Has to be a class for FlipMove Standard Component

class ReposCard extends React.Component {
  render() {
    const {
      html_url,
      name,
      description,
      language,
      stargazers_count,
      forks_count,
      size,
    } = this.props;

    return (
      <li className="w-100 col-lg-3 col-md-4 col-sm-6">
        <a
          className="repos-card"
          href={html_url}
          rel="noopener noreferrer"
          target="_blank"
        >
          <h4 className="name">
            <ForkIcon /> {name}
          </h4>
          <p className="description">{description}</p>
          <div className="status">
            <Language language={language} />
            <span>
              <StarIcon /> {stargazers_count}
            </span>
            <span>
              <ForkCountIcon /> {forks_count}
            </span>
            <span>{size} KB</span>
          </div>
        </a>
      </li>
    );
  }
}

export default ReposCard;
