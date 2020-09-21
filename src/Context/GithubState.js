/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { createContext } from 'react';
import { useImmerReducer } from 'use-immer';
import GithubAction, { initialState } from './GithubAction';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { useEffect } from 'react';

// Context
export const GithubContext = createContext();

const GithubProvider = (props) => {
  const [state, dispatch] = useImmerReducer(GithubAction, initialState);
  const {
    searchInput,
    searchResults,
    noSearchResults,
    userDetail,
    userRepos,
    isLoading,
    selectedRepos,
    isShowMore,
    sortedBy,
  } = state;

  // For search input
  const handleInput = (e) => {
    dispatch({ type: 'handle-input', value: e.target.value });
  };

  // for preventing the default of 32 keyCode
  const onHandleKey = (e) => {
    if (e.target.value.length <= 0 && (e.which === 32 || e.keyCode === 32)) {
      e.preventDefault();
    }
  };

  // onSubmitSearch
  // set also a query to a router by search inputs value
  const onSubmitSearch = (e) => {
    e.preventDefault();

    if (searchInput.length > 0) {
      props.history.push(`/search?q=${searchInput}`);
      dispatch({ type: 'handle-input', value: '' });
    }
  };

  // for Search Github User
  const onSearchUsers = async (username) => {
    dispatch({ type: 'start-spinner' });
    const users = await axios(
      `https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_GIT_ID}&client_secret=${process.env.REACT_APP_GIT_SEC}`
    );
    const data = await users.data;

    const minimumData = data.items.filter((item, index) => {
      if (index <= 11) return item;
    });

    if (minimumData.length > 0) {
      dispatch({ type: 'search-user', searchResults: minimumData });
    } else {
      dispatch({ type: 'no-search-results' });
    }

    return data;
  };

  // Fetch Github user information
  const getUserDetail = async (username) => {
    dispatch({ type: 'start-spinner' });
    const userDetail = await axios(`https://api.github.com/users/${username}`);
    const detailData = await userDetail.data;

    dispatch({ type: 'set-user-detail', detail: detailData });
  };

  // Fetch Github user repo
  // sort by stars: DEFAULT

  const getUserRepo = async (username) => {
    const userRepo = await axios(
      `https://api.github.com/users/${username}/repos?per_page=12&sort=updated`
    );
    const repoData = await userRepo.data;

    dispatch({ type: 'set-user-repos', repos: repoData, sortedBy: 'stars' });
    dispatch({
      type: 'set-selected-repos',
      selectedRepos: repoData.slice(0, 8),
    });
  };

  // show more repos: ture || false
  const onShowMore = () => {
    dispatch({ type: 'show-more-repos', isShowMore: !isShowMore });
  };

  // SORT BY: stars, forks, sizes
  const sortByStars = () => {
    const sortData = userRepos
      .slice()
      .sort((a, b) => b.stargazers_count - a.stargazers_count);

    dispatch({ type: 'set-user-repos', repos: sortData, sortedBy: 'stars' });

    return sortData;
  };

  const sortByForks = () => {
    const sortData = userRepos.slice().sort((a, b) => b.forks - a.forks);

    dispatch({ type: 'set-user-repos', repos: sortData, sortedBy: 'forks' });

    return sortData;
  };

  const sortBySize = () => {
    const sortData = userRepos.slice().sort((a, b) => b.size - a.size);

    dispatch({ type: 'set-user-repos', repos: sortData, sortedBy: 'size' });

    return sortData;
  };

  //

  useEffect(() => {
    if (isShowMore) {
      dispatch({
        type: 'set-selected-repos',
        selectedRepos: userRepos.slice(0, userRepos.length),
      });
    } else {
      dispatch({
        type: 'set-selected-repos',
        selectedRepos: userRepos.slice(0, 8),
      });
    }
  }, [sortedBy, isShowMore]);

  return (
    <GithubContext.Provider
      value={{
        searchInput,
        searchResults,
        noSearchResults,
        userDetail,
        userRepos,
        isLoading,
        selectedRepos,
        isShowMore,
        sortedBy,
        onShowMore,
        onHandleKey,
        dispatch,
        handleInput,
        onSubmitSearch,
        onSearchUsers,
        getUserDetail,
        getUserRepo,
        sortByStars,
        sortByForks,
        sortBySize,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default withRouter(GithubProvider);
