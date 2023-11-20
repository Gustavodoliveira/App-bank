import React, { useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import './home.css';
import logo from '../../assets/home  21 10.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Home = () => {
    const navigate = useNavigate();
    const Authentication = useSelector((state: RootState) => state.isLoggedin);

    useEffect(() => {
        if (Authentication) {
            navigate('/appHome');
        }
    });

    return (
        <>
            <section className="presentation">
                <div className="text-presentation">
                    <h2>Create your account with our bank</h2>

                    <p>
                        Bom dia a todos! Hoje, estamos empolgados em apresentar
                        o novo aplicativo bancário do App-Bank. Este aplicativo
                        foi projetado para tornar sua vida financeira mais
                        simples, segura e conveniente.
                    </p>
                    <p>
                        Nosso aplicativo bancário é uma extensão de sua agência
                        bancária, acessível 24 horas por dia, 7 dias por semana.
                        Permite realizar uma ampla gama de operações bancárias
                        no conforto de sua casa ou onde quer que você esteja.
                    </p>
                    <Link to="/register">
                        <button>Create account</button>
                    </Link>
                </div>
                <div>
                    <img src={logo} alt="logo" width={300} height={300} />
                </div>
            </section>
            <section className="presentation-cards">
                <h2>Nossos melhores recusros voltado para voçê</h2>
                <div className="presentation-cards-container">
                    <div className="card-container card-investment ">
                        <div className="card-title">
                            <h3>Investimentos</h3>
                        </div>
                        <div className="card-content">
                            <p>
                                Em nosso banco voçe tem suporte em seus
                                investimentos por nosso time de consultores
                            </p>
                            <ul>
                                <li>
                                    seu dinheiro rendendo a 105% de cdi ao mês
                                </li>
                                <li>alertas de transações</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card-container card-security">
                        <div className="card-title">
                            <h3>Segurança</h3>
                        </div>
                        <div className="card-content">
                            <p>Priorizamos a segurança de suas transações</p>
                            <ul>
                                <li>Criptografia de ponta a ponta</li>
                                <li>Notificações de atividades suspeitas</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card-container card-suporte">
                        <div className="card-title">
                            <h3> Suporte ao Cliente</h3>
                        </div>
                        <div className="card-content">
                            <p>Estamos aqui para ajudar.</p>
                            <ul>
                                <li>Chat ao vivo</li>
                                <li>E-mail</li>
                                <li>Telefone</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="assessment-container">
                <h2>Avaliações sobre o app</h2>
                <form className="assessment-form-controller">
                    <div className="form-check-user">
                        <label htmlFor="name">Name: </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Digite seu nome"
                        />
                        <label htmlFor="password">Passowrd: </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Digite sua senha"
                        />
                    </div>
                    <div>
                        <label htmlFor="comment">Comment :</label>
                        <textarea
                            cols={10}
                            rows={5}
                            className="text-area-controller"
                            name="comment"
                            placeholder="Escreva seu comentario"
                        ></textarea>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </section>
        </>
    );
};

export default Home;
