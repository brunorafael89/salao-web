import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { MdExitToApp } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/images/logo.png";
import coloracao from "../../assets/images/coloração1.jpg";

import "./styles.css";
import { FaTrashAlt } from "react-icons/fa";

function Header(){
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

                    <div className="hamburguer">
                        <span className="material-icons"><GiHamburgerMenu/></span>
                    </div>

                    <nav>
                        <ul>
                            <li><span className="material-icons"><MdExitToApp/></span><a href="/">Sair</a></li>
                            <li><span className="material-icons"><AiOutlineHome/></span><a href="home">Página Principal</a></li>
                            <li><span className="material-icons"><RiMoneyDollarBoxLine/></span><a href="TabelaPreco">Tabela de Preços</a></li>
                            <li><span className="material-icons"><AiOutlineShoppingCart/></span><a href="#contact">Carrinho</a></li>
                        </ul>
                    </nav>
                    </div>
            </header>

            <div className="cart">                
                <div className="cart-items">
                    <div className="cart-img">
                        <img src={coloracao} alt="coloração" />
                    </div>

                    <div className="cart-service">
                        <span className="item-service">Cabelo Longo</span>
                        <span className="item-data">19/05/2021</span>
                        <span className="item-hora">15:30</span>
                    </div>

                    <div className="cart-value">
                        <span className="item-valor">R$ 250,00</span>
                    </div>

                    <div className="cart-excluir">
                        <button type="submit"><FaTrashAlt/></button>
                    </div>
                </div>

                <div className="cart-items">
                    <div className="cart-img">
                        <img src={coloracao} alt="coloração" />
                    </div>

                    <div className="cart-service">
                        <span className="item-service">Cabelo Longo</span>
                        <span className="item-data">19/05/2021</span>
                        <span className="item-hora">15:30</span>
                    </div>

                    <div className="cart-value">
                        <span className="item-valor">R$ 250,00</span>
                    </div>

                    <div className="cart-excluir">
                        <button type="submit"><FaTrashAlt/></button>
                    </div>
                </div>

                <div className="cart-finalizar">
                    <button>Finalizar compra</button>
                </div>
            </div>
        </>
    )
}

export default Header;