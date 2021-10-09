import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    info: {
        _id: "",
        firstName: "Khôi",
        lastName: "Trần",
        role: 0
    },
    accessToken: "",
    refreshToken: ""

}

const login = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        onLogout: () => {
            return {
                info: {
                    _id: "",
                    firstName: "",
                    lastName: ""
                },
                accessToken: "",
                refreshToken: ""
            }
        },
        onLogin: (state, action) => {
            console.log(action.payload)
            // return action.payload;
        }
    }
});

const { reducer, actions } = login;
export const { onLogout, onLogin } = actions;
export default reducer;