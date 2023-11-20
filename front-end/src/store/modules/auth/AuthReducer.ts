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
            const token = localStorage.getItem('token');
            
            if(token) {
                newState.isLoggedin = true;
                return newState;
            }

            newState.isLoggedin = true;
            return newState;
        },

        logout: (state) => {
            const newState = {...state};
            newState.isLoggedin = false;
            localStorage.removeItem('token');
            localStorage.removeItem('logged');
            localStorage.removeItem('user');
            return newState;
        }
    }
});

export const { login, logout } = userRegister.actions;
export default userRegister.reducer;