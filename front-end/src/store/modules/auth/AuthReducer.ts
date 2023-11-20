import { createSlice } from '@reduxjs/toolkit';
//import type { PayloadAction } from '@reduxjs/toolkit';

export interface AuthUser{
    isLoggedin: boolean,
}

export const initialState: AuthUser = {
    isLoggedin: false || true,
};

export const userRegister = createSlice({
    name: 'Register',
    initialState,
    reducers: {
        login: (state) => {
            const newState = {...state};   
            newState.isLoggedin = true;
            return newState;
        }
    }
});

export const { login } = userRegister.actions;
export default userRegister.reducer;