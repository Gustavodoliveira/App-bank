import { useState } from 'react';
import api from '../../helper/api';
import { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { login } from '../../store/modules/auth/AuthReducer';

import './register.css';

export interface User {
    image: any;
    name: string;
    email: string;
    address: string;
    age: string;
    cpf: string;
    phone: string;
    idade: string;
    password: string;
    confirmPassword: string;
}

const Register = () => {
    const Authentication = useSelector(
        (state: RootState) => state.Register.isLoggedin,
    );
    const dispatch = useDispatch();

    const [preview, setPreview] = useState<File>();
    const [user, setUser] = useState<User>({
        image: '',
        name: '',
        email: '',
        address: '',
        age: '',
        cpf: '',
        phone: '',
        idade: '',
        password: '',
        confirmPassword: '',
    });

    function onSubmit(e: React.FormEvent): void {
        e.preventDefault();
    }

    async function postUser(): Promise<void> {
        await api
            .post('/user/register', user, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((resp: AxiosResponse) => {
                const message: any = resp.data;
                toast.success(`${message.message}`);
                const logged = dispatch(login());
                const { user, token } = resp.data;
                localStorage.setItem('token', JSON.stringify(token));
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('logged', JSON.stringify(Authentication));
            })
            .catch((err: AxiosError) => {
                const message: any = err.response?.data;
                toast.error(`
                    ${message.message}
               `);
            });
    }

    return (
        <>
            <h2>Crie sua conta em nosso App-bank</h2>

            {(user.image || preview) && (
                <div className="image-container">
                    <img
                        className="image-perfil"
                        src={
                            preview
                                ? URL.createObjectURL(preview)
                                : `http://localhost:5000/public/${user.image}`
                        }
                        alt="user image"
                    />
                </div>
            )}

            <form action="" className="form-control" onSubmit={onSubmit}>
                <label htmlFor="image">Image: </label>
                <input
                    type="file"
                    name="image"
                    id=""
                    onChange={(e) => {
                        if (!e.target.files) return;
                        setUser({
                            ...user,
                            image: e.target.files[0],
                        });
                        const img = e.target.files[0];
                        setPreview(img);
                    }}
                />
                <div>
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        name="name"
                        id=""
                        placeholder="Digite seu nome"
                        onChange={(e) =>
                            setUser({ ...user, name: e.target.value })
                        }
                    />
                </div>
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
                    <label htmlFor="address">Endereço: </label>
                    <input
                        type="text"
                        name="address"
                        id=""
                        placeholder="Digite seu endereço"
                        onChange={(e) =>
                            setUser({
                                ...user,
                                address: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <label htmlFor="cpf">Cpf: </label>
                    <input
                        type="text"
                        name="cpf"
                        id=""
                        placeholder="Digite seu Cpf"
                        onChange={(e) =>
                            setUser({ ...user, cpf: e.target.value })
                        }
                    />
                </div>
                <div>
                    <label htmlFor="address">Telefone: </label>
                    <input
                        type="text"
                        name="phone"
                        id=""
                        placeholder="Digite seu Telefone"
                        onChange={(e) =>
                            setUser({
                                ...user,
                                phone: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <label htmlFor="age">Idade: </label>
                    <input
                        type="text"
                        name="age"
                        id=""
                        placeholder="Digite sua idade"
                        onChange={(e) =>
                            setUser({ ...user, age: e.target.value })
                        }
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input
                        type="password"
                        name="password"
                        id=""
                        placeholder="Digite sua senha"
                        onChange={(e) =>
                            setUser({
                                ...user,
                                password: e.target.value,
                            })
                        }
                        value={user.password || ''}
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Senha: </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id=""
                        placeholder="Confirma sua senha "
                        onChange={(e) =>
                            setUser({
                                ...user,
                                confirmPassword: e.target.value,
                            })
                        }
                        value={user.confirmPassword || ''}
                    />
                </div>
                <button type="submit" onClick={postUser}>
                    Enviar
                </button>
            </form>
        </>
    );
};

export default Register;
