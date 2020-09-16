export const initialState = {
  searchInput: '',
  searchResults: [],
  noSearchResults: false,
  userDetail: {},
  userRepos: [],
  selectedRepos: [],
  isLoading: false,
  isShowMore: false,
  sortedBy: 'stars',
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
      draft.noSearchResults = false;
      return;
    }

    case 'no-search-results': {
      draft.noSearchResults = true;
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
      draft.sortedBy = action.sortedBy;
      return;
    }

    case 'show-more-repos': {
      draft.isShowMore = action.isShowMore;
      return;
    }

    case 'set-selected-repos': {
      draft.selectedRepos = action.selectedRepos;
      return;
    }

    case 'user-info-empty': {
      draft.userDetail = {};
      draft.userRepos = [];
      draft.selectedRepos = [];
      draft.isLoading = false;
      draft.isShowMore = false;
      draft.sortedBy = 'stars';

      return;
    }

    case 'search-result-empty': {
      draft.searchResults = [];
      draft.isLoading = false;
      draft.noSearchResults = false;
      return;
    }

    default: {
      return draft;
    }
  }
};

export default GithubAction;
