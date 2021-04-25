import React from "react";
// import Header from "../../components/Header/";
import { MdPermContactCalendar } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { MdAttachMoney } from "react-icons/md";
import { MdExitToApp } from "react-icons/md";
import tratamento from "../../assets/images/tratamento.jpg";
import unhas from "../../assets/images/unhas.jpg";
import escova from "../../assets/images/escova.jpg";
import corte from "../../assets/images/corte.jpg";
import coloração2 from "../../assets/images/coloração2.jpg";
import depilacao from "../../assets/images/depilacao.jpg";
import pes from "../../assets/images/pes.jpg";
import logo from "../../assets/images/logo.png";
import map from "../../assets/images/map.svg";
import { GiHamburgerMenu } from "react-icons/gi";


import "./styles.css";
// import "../../assets/js/principal";

function PrincipalPage(){
    return (
        <>
            <header className="header-principal">
                <div className="contacts">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>

                    <div className="direct-contacts">
                        <span className="material-icons"><FiPhone/></span> <p> (21)2404-0695 </p>
                        <span className="material-icons"><FiMail/></span> <p> E-mail: beauty_salao@gmail.com </p>
                    </div>

                    <div className="hamburguer">
                        <span className="material-icons"><GiHamburgerMenu/></span>
                    </div>

                    <nav>
                        <ul>
                            <li><span className="material-icons"><MdExitToApp/></span><a href="login">Login/Cadastro</a></li>
                            <li><span className="material-icons"><AiOutlineStar/></span><a href="#services">Serviços</a></li>
                            <li><span className="material-icons"><MdAttachMoney/></span><a href="TabelaPreco">Tabela de Preços</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="background">
                    <img alt="Foto de um salão de beleza"/>

                    <div className="cta-btn"></div>
                </div>
            </header>
            <main>
                <section className="page" id="services">
                    <h1>Nossos Serviços</h1>

                    <section className="services-list">
                        <article>
                            <div className="pics">
                                <img src= {tratamento} alt="tratamento de cabelo feminino" />
                            </div>

                            <div className="service-title">
                                <p className="description-title">Tratamentos</p>
                            </div>

                            <div className="service-description">
                                <p className="service-description-p">Seus cabelos andam frágeis, quebradiços, elásticos e com muitas pontas duplas?</p>
                                <p className="service-description-p">É hora de marcar a sua Reconstrução Capilar </p>
                                <p className="service-description-p">Responsável por devolver a massa capilar, a reconstrução reestabelece a estrutura do fio, dando mais saúde e vitalidade. 😁 Agende a sua! 😉 #ReconstruçãoCapilar #Cabelos #cabeloperfeito #cabeleireiro</p>
                            </div>
                        </article>
        
                        <article>
                            <div className="pics">
                                <img src={escova} alt="escova emcabelo feminino" />
                            </div>

                            <div className="service-title">
                                <p className="description-title">Escova</p>
                            </div>

                            <div className="service-description">
                                <p className="service-description-p">A vida é muito mais fácil com uma bela escova nos cabelos.</p>
                            </div>
                        </article>

                        <article>
                            <div className="pics">
                                <img src={unhas} alt="unha sendo feita" />
                            </div>

                            <div className="service-title">
                                <p className="description-title">Unhas</p>
                            </div>

                            <div className="service-description">
                                <p className="service-description-p">Uma mulher com as unhas feitas não quer guerra com ninguém.</p>
                            </div>
                        </article>

                        <article>
                            <div className="pics">
                                <img src={corte} alt="corte de cabelo feminino com tesoura" />
                            </div>

                            <div className="service-title">
                                <p className="description-title">Corte</p>
                            </div>

                            <div className="service-description">
                                <p className="service-description-p">"Felicidade é quando elogiam o seu novo corte de cabelo.</p>
                            </div>
                        </article>

                        <article>
                            <div className="pics">
                                <img src={coloração2} alt="cabelo em processo de tintura" />
                            </div>

                            <div className="service-title">
                                <p className="description-title">Tintura</p>
                            </div>

                            <div className="service-description">
                                <p className="service-description-p">A vida fica mais divertida quando vc pode usar todas as cores.</p>
                            </div>
                        </article>

                        <article>
                            <div className="pics">
                                <img src={depilacao} alt="depilação" />
                            </div>

                            <div className="service-title">
                                <p className="description-title">Depilação</p>
                            </div>

                            <div className="service-description">
                                <p className="service-description-p">Sem pelos, sem preocupação!</p>
                            </div>
                        </article>

                        <article>
                            <div className="pics">
                                <img src={pes} alt="cabelo 15 anos" />
                            </div>

                            <div className="service-title">
                                <p className="description-title">Spa dos pés</p>
                            </div>

                            <div className="service-description">
                                <p className="service-description-p">Porque eles merecem e você também.</p>
                            </div>
                        </article>
                    </section>
                </section>
                
                <section className="page social-media">
                    <p>Siga nossas Redes Sociais</p>
                    <span className="social-media-icons">
                        <a href="http://www.facebook.com.br" target="_blank" rel="noreferrer"><img src="https://www.flaticon.com/svg/static/icons/svg/174/174848.svg" alt="Facebook ícone" title="Facebook grátis ícone" /></a>
                        <a href="http://www.instagram.com.br" target="_blank" rel="noreferrer"><img src="https://www.flaticon.com/svg/static/icons/svg/174/174855.svg" alt="Instagram ícone" /></a>
                        <a href="http://www.whatsapp.com.br" target="_blank" rel="noreferrer"><img src="https://www.flaticon.com/svg/static/icons/svg/733/733585.svg" alt="Whatsapp ícone" /></a>
                    </span>
                </section>

                <section className="page" id="site-map">
                    <div className="site-map-logo">
                        <div className="header-menu-logo">
                            <img src={logo} alt="nossa logo" />
                        </div>
                        <p>Nosso objetivo é fazer as nossas clientes se sentirem ainda mais belas.</p>
                        <p>Acreditamos que a auto estima é o elemento essencial na busca pelo equilíbrio emocional.</p>
                    </div>
                    
                    <div className="site-map-btn">
                        <div className="site-map-btn-align">
                            <h1>Mapa do site</h1>
                            <ul>
                                <li><a href="#services">Serviços</a></li>
                                <li><a href="tabelaPreco">Tabela de preços</a></li>
                                <li><a href="agendamento">Agendamento</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="site-map-address">
                        <h1>Nosso endereço</h1>
                        
                        <span><img src={map} alt="icone do google maps" /></span>
                        <div className="site-map-address-description">
                            <p>Rua Maravilha, 326 - Bangu - Rio de Janeiro</p>
                            <p>Horário de atendimento:</p>
                            <p>De terça a sabado de 09:00 às 20:00</p>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <p>Made by B²CS&copy;</p>
            </footer>
        </>
    ) 
}

export default PrincipalPage