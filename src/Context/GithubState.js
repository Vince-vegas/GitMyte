/* eslint-disable array-callback-return */
import React, { createContext } from 'react';
import { useImmerReducer } from 'use-immer';
import GithubAction, { initialState } from './GithubAction';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

// Context
export const GithubContext = createContext();

const GithubProvider = (props) => {
  const [state, dispatch] = useImmerReducer(GithubAction, initialState);
  const {
    searchInput,
    searchResults,
    userDetail,
    userRepos,
    isLoading,
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

    dispatch({ type: 'search-user', searchResults: minimumData });

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
  const getUserRepo = async (username) => {
    const userRepo = await axios(
      `https://api.github.com/users/${username}/repos?per_page=8&sort=updated`
    );
    const repoData = await userRepo.data;

    // to sort by stars: DEFAULT
    // const sortData = repoData
    //   .slice()
    //   .sort((a, b) => b.stargazers_count - a.stargazers_count);

    dispatch({ type: 'set-user-repos', repos: repoData });
  };

  // For sorting Repos
  const showSelection = (e) => {
    e.target.classList.toggle('slc-btn-toggle');
    e.target.lastElementChild.classList.toggle('rotate-up');
    e.target.parentElement.lastElementChild.classList.toggle('sort-toggle');
  };

  // hide the Sorted Selection menu
  const hideSelection = (e) => {
    const text = e.target.innerText;

    const { previousSibling } = e.target.offsetParent;

    previousSibling.firstElementChild.innerText = text;
    previousSibling.classList.remove('slc-btn-toggle');
    previousSibling.lastElementChild.classList.remove('rotate-up');
    e.target.offsetParent.classList.remove('sort-toggle');
  };
  // ==================

  // SORT BY: stars, forks, sizes
  const sortByStars = (e) => {
    hideSelection(e);

    const sortData = userRepos
      .slice()
      .sort((a, b) => b.stargazers_count - a.stargazers_count);

    dispatch({ type: 'set-user-repos', repos: sortData });
    return sortData;
  };

  const sortByForks = (e) => {
    hideSelection(e);
    const sortData = userRepos.slice().sort((a, b) => b.forks - a.forks);
    dispatch({ type: 'set-user-repos', repos: sortData });
    return sortData;
  };

  const sortBySize = (e) => {
    hideSelection(e);
    const sortData = userRepos.slice().sort((a, b) => b.size - a.size);
    dispatch({ type: 'set-user-repos', repos: sortData });
    return sortData;
  };

  return (
    <GithubContext.Provider
      value={{
        searchInput,
        searchResults,
        userDetail,
        userRepos,
        isLoading,
        onHandleKey,
        dispatch,
        handleInput,
        onSubmitSearch,
        onSearchUsers,
        getUserDetail,
        getUserRepo,
        showSelection,
        hideSelection,
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
