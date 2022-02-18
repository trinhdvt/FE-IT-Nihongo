import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const ListTransfer = createSlice({
    name: 'EditProfile',
    initialState: initialState,
    reducers: {
        fetchListTransfer: (state, action) => {
           return action.payload;
        },
    }
});

const { reducer, actions } = ListTransfer;
export const { fetchListTransfer } = actions;
export default reducer;