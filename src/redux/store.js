import { createStore, applyMiddleware, combineReducers } from 'redux';
import jobReducer from './jobReducer';

const rootReducer = combineReducers({
  jobs: jobReducer
});

const store = createStore(rootReducer);

export default store;
