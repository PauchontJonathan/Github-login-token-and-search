const initialState = {
  input: '',
  token: '',
  logged: false,
  searchInput: '',
  loading: false,
  repoResults: null,
  displayResults: false,
};

const CHANGE_INPUT = 'CHANGE_INPUT';
export const ACTUAL_TOKEN = 'ACTUAL_TOKEN';
const LOG_USER = 'LOG_USER';
const USER_LOGOUT = 'USER_LOGOUT';
const CHANGE_INPUT_SEARCH = 'CHANGE_INPUT_SEARCH';
export const SEARCH_RESULTS = 'SEARCH_RESULTS';
const HANDLE_RESULTS = 'HANDLE_RESULTS';
const STOP_LOADING = 'STOP_LOADING';

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.inputValue,
      };
    case LOG_USER:
      return {
        ...state,
        username: action.username,
        avatar: action.avatar,
        logged: true,
      };
    case USER_LOGOUT:
      return {
        ...state,
        logged: false,
        displayResults: false,
      };
    case CHANGE_INPUT_SEARCH:
      return {
        ...state,
        searchInput: action.inputSearch,
      };
    case HANDLE_RESULTS:
      return {
        ...state,
        repoResults: action.repoResults,
        loading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        loading: false,
        displayResults: true,
      };
    default:
      return state;
  }
};

export const changeInputValue = (inputValue) => ({
  type: CHANGE_INPUT,
  inputValue,
});

export const handleToken = (actualToken) => ({
  type: ACTUAL_TOKEN,
  actualToken,
});

export const logUser = (username, avatar) => ({
  type: LOG_USER,
  username,
  avatar,
});

export const logout = () => ({
  type: USER_LOGOUT,
});

export const changeInputSearchValue = (inputSearch) => ({
  type: CHANGE_INPUT_SEARCH,
  inputSearch,
});

export const handleSearchSubmit = () => ({
  type: SEARCH_RESULTS,
});

export const handleResults = (repoResults) => ({
  type: HANDLE_RESULTS,
  repoResults,
});

export const stopLoading = () => ({
  type: STOP_LOADING,
});

export default reducer;
