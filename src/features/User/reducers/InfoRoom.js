import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const InfoRoom = createSlice({
    name: 'EditProfile',
    initialState: initialState,
    reducers: {
        onChangeInfoRoom: (state, action) => {
            console.log(action.payload)
           return action.payload;
        },
    }
});

const { reducer, actions } = InfoRoom;
export const { onChangeInfoRoom } = actions;
export default reducer;