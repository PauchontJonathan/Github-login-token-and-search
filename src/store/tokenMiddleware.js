import axios from 'axios';
import { ACTUAL_TOKEN, logUser } from './reducer';

const tokenMiddleware = (store) => (next) => (action) => {
  console.log('midd');
  switch (action.type) {
    case ACTUAL_TOKEN:
      axios.get('https://api.github.com/user', {
        headers: {
          Authorization: `token ${store.getState().input}`,
        },
      })
        .then((response) => {
          console.log(response);

          store.dispatch(logUser(
            response.data.name,
            response.data.avatar_url,
          ));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
      next(action);
  }
};

export default tokenMiddleware;
