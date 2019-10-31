import { combineReducers } from 'redux';

import robotsReducer from './robots/robots.reducer';

const rootReducer = combineReducers({
    robots: robotsReducer
});

export default rootReducer;