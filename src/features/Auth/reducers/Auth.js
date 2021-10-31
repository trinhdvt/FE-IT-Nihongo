import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    info: {},
    token: ""
}

const login = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        onLogout: () => {
            return {
                info: {},
                token: ""
            }
        },
        onLogin: (state, action) => {
            return {
                ...state,
                info: { ...action.payload.info },
                token: action.payload.token
            };
        }
    }
});

const { reducer, actions } = login;
export const { onLogout, onLogin } = actions;
export default reducer;