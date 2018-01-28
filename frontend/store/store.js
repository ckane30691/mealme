import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import RootReducer from '../reducers/root_reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  // must use 'require' (import only allowed at top of file)
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  )
);

// const preload = {
//   entities: {
//     hunger: {
//       1: {
//         id: 1,
//         phone: "7605962078",
//         locY: "1.233443545",
//         locX: "1.324345345"
//       },
//       2: {
//         id: 2,
//         phone: "7605962079",
//         locY: "1.233244354",
//         locX: "1.324345345"
//       },
//       3: {
//         id: 3,
//         phone: "7605962078",
//         locY: "1.233244354",
//         locX: "1.324345345"
//       },
//       4: {
//         id: 4,
//         phone: "7605962077",
//         locY: "1.233244354",
//         locX: "1.324345345"
//       },
//       5: {
//         id: 5,
//         phone: "7605962076",
//         locY: "1.233244354",
//         locX: "1.324345345"
//       },
//     }
//   }
// };

export default configureStore;
