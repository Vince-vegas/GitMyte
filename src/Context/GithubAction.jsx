export const initialState = {
  searchInput: '',
  searchResults: [],
  userDetail: {},
  userRepos: [],
  isLoading: false,
};

const GithubAction = (draft, action) => {
  switch (action.type) {
    case 'start-spinner': {
      draft.isLoading = true;
      return;
    }

    case 'handle-input': {
      draft.searchInput = action.value;
      return;
    }

    case 'search-user': {
      draft.searchResults = action.searchResults;
      draft.isLoading = false;
      return;
    }

    case 'set-user-detail': {
      draft.userDetail = action.detail;
      draft.isLoading = false;
      return;
    }

    case 'set-user-repos': {
      draft.userRepos = action.repos;
      return;
    }

    case 'user-info-empty': {
      draft.userDetail = {};
      draft.userRepos = [];
      draft.isLoading = false;
      return;
    }

    case 'search-result-empty': {
      draft.searchResults = [];
      draft.isLoading = false;
      return;
    }

    default: {
      return draft;
    }
  }
};

export default GithubAction;
