import React from "react";
import { useState } from "react";
import Header from "../../components/Header";
import MenuLateral from "../../components/MenuLateral";
import api from "../../services/api";

import "./styles.css";

function AgendaProfissionalPage(){
    const [agendaProfissionais, setAgendaProfissionais] = useState([])
    const [profissionalId, setProfissionalId] = useState([])

    async function getAgenda(){
        const response = await api.get(`agenda/profissional/${profissionalId}`);
        console.log(response.data)
    }

    return (
        <>
            <Header/>
            <main>
                <MenuLateral/>

                <div className="agenda-profissional main-container">
                    <h1> Agenda do dia </h1>
                    
                    <h2>Gerencie seus atendimentos!</h2>

                    <div className="agenda-profissional table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Selecionar</th>
                                    <th>Cliente</th>
                                    <th>Data Agendamento</th>
                                    <th>Hora Agendamento</th>
                                    <th>Serviço</th>
                                    <th>Valor</th>
                                    <th>Comissão</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <form action="">
                                            <input 
                                                type="checkbox" 
                                                name=""
                                            />
                                        </form>
                                    </td>
                                    <td>Maria José</td>
                                    <td>12/05/2021</td>
                                    <td>09:00</td>
                                    <td>Escova Curto</td>
                                    <td> 30,00</td>
                                    <td> 30%</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input 
                                            type="checkbox" 
                                            name=""
                                            />
                                    </td>
                                    <td>Ana Lidia</td>
                                    <td>12/05/2021</td>
                                    <td>09:40</td>
                                    <td>Corte Feminino</td>
                                    <td> 20,00</td>
                                    <td> 50%</td>
                                </tr>                                
                            </tbody>
                        </table>
                    </div>

                    <div className="buttons-export">
                        <label htmlFor="">
                            <button className="buttons" type="submit">Iniciar</button>
                            
                        </label>

                        <label htmlFor="">
                            <button className="buttons" type="submit">Encerrar</button>
                            
                        </label>
                    </div>
                </div>
            </main>
        </>
    )
}

export default AgendaProfissionalPage