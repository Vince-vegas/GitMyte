/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import SearchCard from '../Components/Card/SearchCard';
import { GithubContext } from '../Context/GithubState';
import '../Styles/searchresults.scss';
import Spinner from '../Components/Spinner/Spinner';

const SearchedPage = (props) => {
  const githubContext = useContext(GithubContext);
  const { searchResults, onSearchUsers, dispatch, isLoading } = githubContext;

  useEffect(() => {
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
        <h1>Search Results</h1>
        <div className="row">
          {isLoading && <Spinner />}
          {searchResults &&
            searchResults.map((item) => {
              return <SearchCard key={item.login} users={item} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default SearchedPage;
