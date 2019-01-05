import { TYPES } from './types';
import streams from '../apis/streams';
import history from '../history';
export const signIn = (userId) => ({
    type: TYPES.SIGN_IN,
    userId
});

export const signOut = (userId) => ({
    type: TYPES.SIGN_OUT,
    userId
});

// CREATE => POST /streams
export const createStream = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    let response = await streams.post('/streams', {...formValues, userId});
    dispatch({ type: TYPES.CREATE_STREAM, stream: response.data });
    history.push('/');
}

// READ => GET /streams
export const fetchStreams = () => async dispatch => {
    let response = await streams.get('/streams');
    dispatch({ type: TYPES.FETCH_STREAMS, streams: response.data });
}

// READ => GET /streams/:id
export const fetchStream = id => async dispatch => {
    let response = await streams.get(`/streams/${id}`);
    dispatch({ type: TYPES.FETCH_STREAM, stream: response.data });
}

// UPDATE => PUT /streams/:id
export const updateStream = (id, formValues) => async dispatch => {
    let response = await streams.patch(`/streams/${id}`, formValues);
    dispatch({ type: TYPES.UPDATE_STREAM, stream: response.data });
    history.push('/');
} 

// UPDATE => PUT /streams/:id
export const deleteStream = id => async dispatch => {
    await streams.delete(`/streams/${id}`);
    dispatch({ type: TYPES.DELETE_STREAM, id });
    history.push('/');
}



