import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        senderId: 2,
        content: 'Hello. My name’s Kevin. What’s your name?'
    },
    {
        senderId: 1,
        content: 'Johnson'
    },
    {
        senderId: 2,
        content: 'Where are you from Johnson?'
    },
    {
        senderId: 1,
        content: 'I’m from Seattle. Where are you from?'
    },
    {
        senderId: 2,
        content: 'I’m from Madrid'
    },
    {
        senderId: 1,
        content: 'Are you American?'
    },
];

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