import { logToConsole } from '@/helpers/function';
import {  IUserLogin } from '@/interfaces/user';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

 interface AuthUser{
    isLogged: boolean,
}

const initialState: AuthUser = {
    isLogged: false 
};

export const userRegister = createSlice({
    name: 'Register',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<boolean>) => {
            state.isLogged = action.payload
        },


        logout: (state, action: PayloadAction<boolean>) => {
              state.isLogged = action.payload
        }
    }
});

export const { login, logout } = userRegister.actions;
export default userRegister.reducer;