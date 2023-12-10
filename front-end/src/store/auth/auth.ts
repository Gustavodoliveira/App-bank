import { createSlice } from '@reduxjs/toolkit';

 interface AuthUser{
    isLogged: boolean,
}

const initialState: AuthUser = {
    isLogged: false || true,
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
                return newState;
            }

            newState.isLogged = true;
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