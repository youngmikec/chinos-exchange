import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../common";

type ProfileState = {
    value: User | null,
}

const initialState: ProfileState = {
    value: null
}

export const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers: {
        ADD_USER_PROFILE: (state, action: PayloadAction<User>) => {
            state.value = action.payload
            console.log('state', state.value);
        },
        REMOVE_USER_PROFILE: (state) => {
            state.value = null;
        } 
    }
});

export const { ADD_USER_PROFILE, REMOVE_USER_PROFILE } = userProfileSlice.actions;
export default userProfileSlice.reducer;