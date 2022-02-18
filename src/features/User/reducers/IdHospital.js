import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const IdHospital = createSlice({
    name: 'EditProfile',
    initialState: initialState,
    reducers: {
        onChangeIdHospital: (state, action) => {
           return action.payload;
        },
    }
});

const { reducer, actions } = IdHospital;
export const { onChangeIdHospital } = actions;
export default reducer;