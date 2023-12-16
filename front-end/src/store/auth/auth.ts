import { logToConsole } from '@/helpers/function';
import { createSlice } from '@reduxjs/toolkit';

 interface AuthUser{
    isLogged: boolean,
    token: string
}

const initialState: AuthUser = {
    isLogged: false || true,
    token: '',
};

export const userRegister = createSlice({
    name: 'Register',
    initialState,
    reducers: {
        login: (state) => {
            const newState = {...state};   
            const token = localStorage.getItem('token');
            
            if(token) {
                newState.isLogged = true;
                logToConsole(newState.isLogged)
                return newState;
                
            }

            newState.isLogged = true;
            localStorage.setItem('state', `${newState.isLogged}`)
            return newState;
        },

        logout: (state) => {
            const newState = {...state};
            newState.isLogged = false;
            localStorage.removeItem('token');
            localStorage.removeItem('logged');
            localStorage.removeItem('user');
            return newState;
        }
    }
});

export const { login, logout } = userRegister.actions;
export default userRegister.reducer;