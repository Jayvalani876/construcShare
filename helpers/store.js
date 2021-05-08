import {combineReducers, createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import authReducer from 'src/store/reducers/auth';

const rootReducer = combineReducers({
    auth: authReducer
});

export const reduxStore = createStore(
    rootReducer,
    applyMiddleware(ReduxThunk)
);