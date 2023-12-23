import { logToConsole } from '@/helpers/function';
import {  IUserLogin } from '@/interfaces/user';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

 interface AuthUser{
    isLogged: boolean,
    user: string,
    token: string
}

const initialState: AuthUser = {
    isLogged: false ,
    user: '',
    token: '',
};

export const userRegister = createSlice({
    name: 'Register',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<boolean>) => {
            state.isLogged = action.payload
        },

        setUserState: (state, action: PayloadAction<string>) => {
          state.user = action.payload
        },

        logout: (state, action: PayloadAction<boolean>) => {
              state.isLogged = action.payload
        }
    }
});

export const { login, logout, setUserState } = userRegister.actions;
export default userRegister.reducer;