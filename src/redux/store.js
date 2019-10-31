import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './root-reducer';

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));