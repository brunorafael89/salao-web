import React from "react";
import Header from "../../components/Header/";
import MenuLateral from "../../components/MenuLateral/";

import coloracao from "../../assets/images/coloração1.jpg";
import { FaTrashAlt } from "react-icons/fa";

import "./styles.css";

function CartPage(){
    return (
        <>
            <Header/>

            <main>
                <MenuLateral/>
                
                <div className="cart main-container">
                    <h1>Carrinho de Agendamento</h1>
                
                    <div className="cart-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Descrição</th>
                                    <th>Data/Hora</th>
                                    <th>Valor</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="cart-items">
                                    <td>
                                        <div className="cart-img">
                                            <img src={coloracao} alt="coloração" />
                                        </div>
                                        <div className="cart-service">
                                            <span className="item-service">Cabelo Longo</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="cart-service">
                                            <span className="item-data">19/05/2021</span>
                                            <span className="item-hora">15:30</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="cart-value">
                                            <span className="item-valor">R$ 250,00</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="cart-excluir">
                                            <button type="submit"><FaTrashAlt/></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="cart-items">
                                    <td>
                                        <div className="cart-img">
                                            <img src={coloracao} alt="coloração" />
                                        </div>
                                        <div className="cart-service">
                                            <span className="item-service">Cabelo Longo</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="cart-service">
                                            <span className="item-data">19/05/2021</span>
                                            <span className="item-hora">15:30</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="cart-value">
                                            <span className="item-valor">R$ 250,00</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="cart-excluir">
                                            <button type="submit"><FaTrashAlt/></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="cart-items">
                                    <td>
                                        <div className="cart-img">
                                            <img src={coloracao} alt="coloração" />
                                        </div>
                                        <div className="cart-service">
                                            <span className="item-service">Cabelo Longo</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="cart-service">
                                            <span className="item-data">19/05/2021</span>
                                            <span className="item-hora">15:30</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="cart-value">
                                            <span className="item-valor">R$ 250,00</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="cart-excluir">
                                            <button type="submit"><FaTrashAlt/></button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <section className="cart-information">
                            <div>
                                <label htmlFor="">
                                    <span>Subtotal</span> <span>R$500,00</span>
                                </label>
                                <label htmlFor="">
                                    <span>Valor Final</span> <span>R$500,00</span>
                                </label>
                            </div>
                        </section>

                        <div className="cart-buttons">
                            <button type="button">Agendar mais serviços</button>
                            <button type="submit">Finalizar Agendamento</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default CartPage