import axios from 'axios';
import { SEARCH_RESULTS, handleResults, stopLoading } from './reducer';

const searchMiddleware = (store) => (next) => (action) => {
  console.log('midd2');
  switch (action.type) {
    case SEARCH_RESULTS:
      axios.get(`https://api.github.com/search/repositories?q=${store.getState().searchInput}`)
        .then((res) => {
          console.log(res);
          store.dispatch(handleResults(
            res.data.items,
          ));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(stopLoading());
        });
      break;
    default:
      next(action);
  }
};

export default searchMiddleware;
