import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const ChangeWS = createSlice({
    name: 'EditProfile',
    initialState: initialState,
    reducers: {
        onChangeWS: (state, action) => {
           return action.payload;
        },
        clearWS: (state, action) => {
            return null;
         },
    }
});

const { reducer, actions } = ChangeWS;
export const { onChangeWS,clearWS } = actions;
export default reducer;