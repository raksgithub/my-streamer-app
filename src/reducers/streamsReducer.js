import _ from 'lodash';
import { TYPES } from '../actions/types';

export const streamsReducer =  (state={}, action) => {
    switch(action.type) {
        case TYPES.FETCH_STREAMS:
            return {...state, ..._.mapKeys(action.streams, 'id')};
        case TYPES.FETCH_STREAM:
            return {...state, [action.stream.id]: action.stream};
        case TYPES.CREATE_STREAM:
            return {...state, [action.stream.id]: action.stream};
        case TYPES.UPDATE_STREAM:
            return {...state, [action.stream.id]: action.stream};
        case TYPES.DELETE_STREAM:
            return _.omit(state, action.id);
        default:
            return state;
    }
}