import { createStore, combineReducers } from 'redux';
import app from './app';
import main from './main';

// keep
const rootReducer = combineReducers({ app, main });
const store = createStore(rootReducer);

export default store;

export type RootState = ReturnType<typeof rootReducer>;
