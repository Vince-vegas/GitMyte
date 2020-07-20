import React from 'react';
import UserDetail from '../Components/User/User-Detail/UserDetail';
import UserRepos from '../Components/User/User-Repos/UserRepos';

const UserPage = () => {
  return (
    <React.Fragment>
      <UserDetail />
      <UserRepos />
    </React.Fragment>
  );
};

export default UserPage;
