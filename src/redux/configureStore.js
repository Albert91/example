import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

function configureStore() {
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
  );
}

const store = configureStore();

export default store;
