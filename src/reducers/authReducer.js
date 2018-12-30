import { TYPES } from '../actions/types'
const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
}

export const authReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case TYPES.SIGN_IN:
            // state mutation using Object.assign
            return Object.assign({}, state, {isSignedIn: true, userId: action.userId});
        case TYPES.SIGN_OUT:
            // state mutation using spreaderator
            return { ...state, isSignedIn: false, userId: action.userId }
        default:
            return state;
    }
};