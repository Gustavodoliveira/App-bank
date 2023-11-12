import React from 'react';
import './register.css';

const Register = () => {
    return (
        <>
            <h2>Crie sua conta em nosso App-bank</h2>

            <form action="" className="form-control">
                <input type="file" name="image" id="" />
                <div>
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        name="name"
                        id=""
                        placeholder="Digite seu nome"
                    />
                </div>
                <div>
                    <label htmlFor="email">E-mail: </label>
                    <input
                        type="e-mail"
                        name="email"
                        id=""
                        placeholder="Digite seu E-mail"
                    />
                </div>
                <div>
                    <label htmlFor="address">Endereço: </label>
                    <input
                        type="text"
                        name="address"
                        id=""
                        placeholder="Digite seu endereço"
                    />
                </div>
                <div>
                    <label htmlFor="age">Idade: </label>
                    <input
                        type="number"
                        name="age"
                        id=""
                        placeholder="Digite sua idade"
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input
                        type="password"
                        name="password"
                        id=""
                        placeholder="Digite sua senha"
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Senha: </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id=""
                        placeholder="Confirma sua senha "
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </>
    );
};

export default Register;
