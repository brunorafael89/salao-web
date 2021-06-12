import React from "react";
import Header from "../../components/Header";
import MenuLateral from "../../components/MenuLateral";

// import {MdCheckCircle, MdCancel} from "react-icons/md";
import {AiFillClockCircle} from "react-icons/ai";

import "./styles.css";

function ControleAgendaPage(){
    return (
        <>
            <Header/>
            <main>
                <MenuLateral/>
                <div className="controle-agenda main-container">
                    <h1>Controle de atendimentos</h1>

                    <section className="info-select">
                        <div className="select-data">
                            <span className="spn-titulo">Selecione o dia</span>
                            
                            <form>
                                <label htmlFor="">
                                    <span>Dia:</span>
                                    <input type="date" />
                                </label>

                                <button className="buttons" type="submit">Ver Agenda</button>
                            </form>
                        </div>
                    </section>

                    <div className="controle-agenda table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Encerrar</th>
                                    <th>Cliente</th>
                                    <th>Dia</th>
                                    <th>hora</th>
                                    <th>Serviço</th>
                                    <th>Profissional</th>
                                    <th>Forma de Pagamento</th>
                                    <th>Status</th>
                                    <th>Valor</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <form action="">
                                            <input type="checkbox" 
                                            />
                                        </form>
                                    </td>
                                    <td>Hanny Baby</td>
                                    <td>10/06/2021</td>
                                    <td>09:00</td>
                                    <td>Escova</td>
                                    <td>Rogério Almeida</td>
                                    <td>Cartão de Crédito</td>
                                    <td><span className="material-icons andamento"><AiFillClockCircle/></span></td>
                                    <td>40,00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <form action="">
                                            <input type="checkbox" 
                                            />
                                        </form>
                                    </td>
                                    <td>Marluce Veiga</td>
                                    <td>10/06/2021</td>
                                    <td>09:40</td>
                                    <td>Escova</td>
                                    <td>Rogério Almeida</td>
                                    <td>Cartão de Débito</td>
                                    <td><span className="material-icons andamento"><AiFillClockCircle/></span></td>
                                    <td>40,00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="buttons-checkout">
                        <button className="buttons" type="submit">Finalizar Atendimento</button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ControleAgendaPage