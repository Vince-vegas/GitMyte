/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import UserDetail from '../Components/User/User-Detail/UserDetail';
import UserRepos from '../Components/User/User-Repos/UserRepos';
import { GithubContext } from '../Context/GithubState';

const UserPage = (props) => {
  const githubContext = useContext(GithubContext);
  const {
    userDetail,
    getUserDetail,
    dispatch,
    isLoading,
    userRepos,
    getUserRepo,
    showSelection,
    sortByStars,
    sortByForks,
    sortBySize,
  } = githubContext;

  useEffect(() => {
    const queryStr = new URLSearchParams(props.location.search);
    const getName = queryStr.get('name');

    // Get Github User Info
    getUserDetail(getName);
    // Get Github User's Repositories
    getUserRepo(getName);

    // Empty the State when component unmounted
    return () => {
      dispatch({ type: 'user-info-empty' });
    };
  }, []);

  return (
    <React.Fragment>
      <UserDetail userDetails={userDetail} isLoading={isLoading} />
      <UserRepos
        showSelection={showSelection}
        sortByForks={sortByForks}
        sortByStars={sortByStars}
        sortBySize={sortBySize}
        userRepos={userRepos}
      />
    </React.Fragment>
  );
};

export default UserPage;
