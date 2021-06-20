import React from "react";
import { AiOutlineShoppingCart, AiOutlineHome } from "react-icons/ai";
import { FiPhone, FiMail } from "react-icons/fi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { MdExitToApp } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/images/logo.png";
import { logout } from "../../services/auth";
import MenuLateral from "../MenuLateral";

import "./styles.css";

function Header(){
    function openClassOption(){
        document.querySelector('nav')?.classList.toggle('show')
    }

    return (
        <>
            <header>
                <div className="contacts">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>

                    <div className="direct-contacts">
                        <span className="material-icons"><FiPhone/></span> <p> (21)2404-0695 </p>
                        <span className="material-icons"><FiMail/></span> <p> E-mail: beauty_salao@gmail.com </p>
                    </div>

                    <div className="hamburguer" onClick={openClassOption}>
                        <span className="material-icons"><GiHamburgerMenu/></span>
                    </div>

                    <nav>
                        <ul>
                            <li><span className="material-icons"><MdExitToApp/></span><a href="/" onClick={logout}>Sair</a></li>
                            <li><span className="material-icons"><AiOutlineHome/></span><a href="home">Página Principal</a></li>
                            <li><span className="material-icons"><RiMoneyDollarBoxLine/></span><a href="TabelaPreco">Tabela de Preços</a></li>
                            {/* <li><span className="material-icons"><AiOutlineShoppingCart/></span><a href="Carrinho">Carrinho</a></li> */}
                            <li><MenuLateral/></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;