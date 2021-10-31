import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const EditProfile = createSlice({
    name: 'EditProfile',
    initialState: initialState,
    reducers: {
        onEditProfile: () => {
           return true;
        },
        closeEditProfile: () => {
            return false;
         },
    }
});

const { reducer, actions } = EditProfile;
export const { onEditProfile,closeEditProfile } = actions;
export default reducer;