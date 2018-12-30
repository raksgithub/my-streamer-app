import { TYPES } from './types';
export const signIn = (userId) => ({
    type: TYPES.SIGN_IN,
    userId
});

export const signOut = (userId) => ({
    type: TYPES.SIGN_OUT,
    userId
});