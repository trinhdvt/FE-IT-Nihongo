import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const ListMessage = createSlice({
    name: 'ListMessage',
    initialState: initialState,
    reducers: {
        addMessage: (state, action) => {
            const newList = state;
            newList.push(action.payload)
        }
    }
});

const { reducer, actions } = ListMessage;
export const { addMessage } = actions;
export default reducer;