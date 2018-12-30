import { combineReducers } from 'redux';
import { reducer as streamFormReducer } from 'redux-form';
import { authReducer } from './authReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    streamForm: streamFormReducer
});

export default rootReducer;