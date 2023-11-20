import { createSlice } from '@reduxjs/toolkit';
//import type { PayloadAction } from '@reduxjs/toolkit';

export interface AuthUser{
    isLoggedin: boolean,
}

export const initialState: AuthUser = {
    isLoggedin: false,
};

export const userRegister = createSlice({
    name: 'Register',
    initialState,
    reducers: {
        login: (state) => {
            const newState = {...state};
            const token = localStorage.getItem('token');
            console.log(token);
            
            
            if(token === null) return;
            if(token) {
                newState.isLoggedin = true;
            }
            newState.isLoggedin = true;
        }
    }
});

export const { login } = userRegister.actions;
export default userRegister.reducer;