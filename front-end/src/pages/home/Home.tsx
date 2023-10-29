import React from 'react';

import './home.css';
import logo from '../../assets/home  21 10.svg';
import { Link } from 'react-router-dom';

const Home = () => {
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
                <div className="card-container">
                    <h3>Investimentos</h3>
                    <p>
                        Em nosso banco voçe tem suporte em seus investimentos
                        por nosso time de consultores
                    </p>
                    <ul>
                        <li>seu dinheiro rendendo a 105% de cdi ao mês</li>
                        <li>alertas de transações</li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Home;
