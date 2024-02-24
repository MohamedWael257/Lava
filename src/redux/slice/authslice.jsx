import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    auth: null,
    isloading: true
}

const authslice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setActiveUserHandler: (state, action) => {
            state.isloading = true;
            state.auth = action.payload;
        },
        removeActiveUserHandler: (state) => {
            state.isloading = false;
            state.auth = null;
        },
    },
})
export const authuser = state => state.auth.auth
export const isloading = state => state.auth.isloading
export const { setActiveUserHandler, removeActiveUserHandler } = authslice.actions
export default authslice
