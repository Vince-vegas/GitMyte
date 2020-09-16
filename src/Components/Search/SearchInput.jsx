import React from 'react';
import { GithubContext } from '../../Context/GithubState';

const SearchInput = () => {
  const githubContext = React.useContext(GithubContext);

  const {
    searchInput,
    onHandleKey,
    handleInput,
    onSubmitSearch,
  } = githubContext;

  return (
    <div className="hm-search">
      <form onSubmit={onSubmitSearch}>
        <input
          className="search-input"
          type="text"
          placeholder="eg. cassidoo"
          value={searchInput}
          onChange={handleInput}
          onKeyPress={onHandleKey}
        />
      </form>
    </div>
  );
};

export default SearchInput;
