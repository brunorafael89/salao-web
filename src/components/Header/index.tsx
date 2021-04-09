import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { MdExitToApp } from "react-icons/md";
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
                       <span className="material-icons"><FiPhone/></span> <p> (21)2404-0695 </p>
                       <span className="material-icons"><FiMail/></span> <p> E-mail: beauty_salao@gmail.com </p>
                    </div>

                    <div className="hamburguer">
                        <span className="material-icons">menu</span>
                    </div>

                    <nav>
                        <ul>
                            <li><span className="material-icons"><MdExitToApp/></span><a href="index.html">Sair</a></li>
                            <li><span className="material-icons"><AiOutlineHome/></span><a href="principal.html">Página Principal</a></li>
                            <li><span className="material-icons"><RiMoneyDollarBoxLine/></span><a href="tabelaPreco.html">Tabela de Preços</a></li>
                            <li><span className="material-icons"><AiOutlineShoppingCart/></span><a href="#contact">Carrinho</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;