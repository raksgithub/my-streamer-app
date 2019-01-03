import { TYPES } from './types';
import streams from '../apis/streams';
export const signIn = (userId) => ({
    type: TYPES.SIGN_IN,
    userId
});

export const signOut = (userId) => ({
    type: TYPES.SIGN_OUT,
    userId
});

// CREATE => POST /streams
export const createStream = formValues => async dispatch => {
    let response = await streams.post('/streams', formValues);
    dispatch({ type: TYPES.CREATE_STREAM, stream: response.data });
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
    let response = await streams.put(`/streams/${id}`, formValues);
    dispatch({ type: TYPES.UPDATE_STREAM, stream: response.data });
} 

// UPDATE => PUT /streams/:id
export const deleteStream = id => async dispatch => {
    await streams.delete(`/streams/${id}`);
    dispatch({ type: TYPES.UPDATE_STREAM, id });
}



