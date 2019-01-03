import { combineReducers } from 'redux';
import { reducer as streamFormReducer } from 'redux-form';
import { authReducer } from './authReducer';
import { streamsReducer } from './streamsReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    form: streamFormReducer,
    streams: streamsReducer
});

export default rootReducer;