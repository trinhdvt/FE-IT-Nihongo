import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const Transfer = createSlice({
    name: 'EditProfile',
    initialState: initialState,
    reducers: {
        onChangeTransfer: (state, action) => {
           return action.payload;
        },
    }
});

const { reducer, actions } = Transfer;
export const { onChangeTransfer } = actions;
export default reducer;