import React from 'react';
import { useState } from 'react';
import api from '../../helper/api';
import { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/modules/auth/AuthReducer';
import { useDispatch } from 'react-redux';

interface loginUser {
    email: string;
    password: string;
}
const Login = () => {
    const [user, setUser] = useState<loginUser>({
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function UserLogin() {
        await api
            .post('/user/login', user)
            .then((resp: AxiosResponse) => {
                const { message, token, user } = resp.data;
                localStorage.setItem('token', JSON.stringify(token));
                localStorage.setItem('user', JSON.stringify(user));
                toast.success(`${message}`);
                dispatch(login());
                navigate('/appHome');
            })
            .catch((err: AxiosError) => {
                const message: any = err.response?.data;
                toast.error(`${message.message}`);
            });
    }

    function onSubmit(e: React.FormEvent): void {
        e.preventDefault();
    }

    return (
        <>
            <h2>Login</h2>
            <form action="" className="form-control" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="email">E-mail: </label>
                    <input
                        type="e-mail"
                        name="email"
                        id=""
                        placeholder="Digite seu E-mail"
                        onChange={(e) =>
                            setUser({ ...user, email: e.target.value })
                        }
                    />
                </div>
                <div>
                    <label htmlFor="email">Password: </label>
                    <input
                        type="password"
                        name="password"
                        id=""
                        placeholder="Digite seu E-mail"
                        onChange={(e) =>
                            setUser({ ...user, password: e.target.value })
                        }
                    />
                </div>
                <button type="submit" onClick={UserLogin}>
                    Enviar
                </button>
            </form>
        </>
    );
};

export default Login;
