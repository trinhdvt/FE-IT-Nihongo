import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const ListRoom = createSlice({
    name: 'EditProfile',
    initialState: initialState,
    reducers: {
        fetchListRoom: (state, action) => {
           return action.payload;
        },
    }
});

const { reducer, actions } = ListRoom;
export const { fetchListRoom } = actions;
export default reducer;