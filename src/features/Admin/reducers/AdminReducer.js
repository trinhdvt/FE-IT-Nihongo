import { createSlice } from '@reduxjs/toolkit';

const AdminReducer = createSlice({
    name: 'AdminReducer',
    initialState: 1,
    reducers: {
        changeIdHospital: (state, action) => {
           return action.payload;
        }
    }
});

const { reducer, actions } = AdminReducer;
export const { changeIdHospital } = actions;
export default reducer;