/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import SearchCard from '../Components/Card/SearchCard';
import { GithubContext } from '../Context/GithubState';
import '../Styles/searchresults.scss';
import Spinner from '../Components/Spinner/Spinner';
import NoSearches from '../Components/Search/NoSearches';

const SearchedPage = (props) => {
  const githubContext = useContext(GithubContext);
  const {
    searchResults,
    onSearchUsers,
    dispatch,
    isLoading,
    noSearchResults,
  } = githubContext;

  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);
    const queryStr = new URLSearchParams(props.location.search);
    const searchQuery = queryStr.get('q');

    onSearchUsers(searchQuery);

    return () => {
      dispatch({ type: 'search-result-empty' });
    };
  }, []);

  return (
    <div className="mn-users">
      <div className="container">
        {searchResults.length > 0 && <h1>Search Results</h1>}
        <div className="row">
          {isLoading && <Spinner />}
          {searchResults &&
            searchResults.map((item) => {
              return <SearchCard key={item.login} users={item} />;
            })}

          {noSearchResults && <NoSearches />}
        </div>
      </div>
    </div>
  );
};

export default SearchedPage;
