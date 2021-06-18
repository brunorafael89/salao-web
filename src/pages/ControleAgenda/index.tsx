import React, { FormEvent, useState } from "react";
import Header from "../../components/Header";
import MenuLateral from "../../components/MenuLateral";

// import {MdCheckCircle, MdCancel} from "react-icons/md";
import {AiFillClockCircle} from "react-icons/ai";

import "./styles.css";
import format from "date-fns/format";
import api from "../../services/api";

function ControleAgendaPage(){
    const [agendamentos, setAgendamentos] = useState([]);
    const [servicos, setServicos] = useState([]);
    const [clientes, setClientes] = useState([]);
    const [profissionais, setProfissionais] = useState([]);
    const [data, setData] = useState(new Date());

    async function verAgenda(e:FormEvent) {
        e.preventDefault()

        const response = await api.get(`agendamento/getAgendamentoData/${format(new Date(data), "yyyy-MM-dd")}`)
        setAgendamentos(response.data)
    }

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
                            
                            <form onSubmit={verAgenda}>
                                <label htmlFor="">
                                    <span>Dia:</span>
                                    <input 
                                        type="date" 
                                        name="data"
                                        value={format(new Date(data), "yyyy-MM-dd")}
                                        onChange={(e) => setData(new Date(e.target.value))} 
                                    />
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
                            {agendamentos.map((agendamento: any) => (
                                <>
                                    <tr>
                                        <td>
                                            <form action="">
                                                <input type="checkbox" />
                                            </form>
                                        </td>
                                        <td>{agendamento.nomeCliente}</td>
                                        <td>{format(new Date(agendamento.data_atendimento), "dd/MM/yyyy")}</td>
                                        <td>{agendamento.horario_agendamento}</td>
                                        <td>{agendamento.nomeServico}</td>
                                        <td>{agendamento.nomeProfissional}</td>
                                        <td>Cartão de Crédito</td>
                                        <td><span className="material-icons andamento"><AiFillClockCircle /></span></td>
                                        <td>R${agendamento.valor},00</td>                                        
                                    </tr>
                                </>
                            ))}
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