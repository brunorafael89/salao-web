import React from "react";

import logo from "../../assets/images/logo.png";

import "./styles.css";

function Header(){
    return (
        <header>
            <div className="menu-fixed">
                <div className="contacts">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>

                    <div className="direct-contacts">
                        <span className="material-icons">local_phone</span> <p> (21)2404-0695 </p>
                        <span className="material-icons">mail</span> <p> E-mail: beauty_salao@gmail.com </p>
                    </div>

                    <div className="hamburguer">
                        <span className="material-icons">menu</span>
                    </div>

                    <nav>
                        <ul>
                            <li><span className="material-icons">logout</span><a href="index.html">Sair</a></li>
                            <li><span className="material-icons">person_pin</span><a href="principal.html">Página Principal</a></li>
                            <li><span className="material-icons">attach_money</span><a href="tabelaPreco.html">Tabela de Preços</a></li>
                            <li><span className="material-icons">shopping_cart</span><a href="#contact">Carrinho</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;