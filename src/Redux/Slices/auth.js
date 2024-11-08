import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    liLoggedIn : localStorage.getItem('isLoggedIn')|| false,
    role : localStorage.getItem('role') || " ",
    data : localStorage.getItem('data') || {}
}
const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducer: {},
})

//export const {} = authSlice.actions;
export default authSlice.reducer