import { logToConsole } from '@/helpers/function';
import {  IUserLogin } from '@/interfaces/user';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

 interface AuthUser{
    isLogged: boolean,
    balance: boolean,
    user: string,
    token: string
}

const initialState: AuthUser = {
    isLogged: false ,
    balance: false,
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

        setBalance: (state, action: PayloadAction<boolean>) => {
          state.balance = action.payload
        },

        logout: (state, action: PayloadAction<boolean>) => {
              state.isLogged = action.payload
        }
    }
});

export const { login, logout, setUserState, setBalance } = userRegister.actions;
export default userRegister.reducer;