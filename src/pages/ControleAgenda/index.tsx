import React, { FormEvent, useEffect, useState } from "react";
import Header from "../../components/Header";
import MenuLateral from "../../components/MenuLateral";
import { toast } from "react-toastify";
// import {MdCheckCircle, MdCancel} from "react-icons/md";
import {MdDeleteForever} from "react-icons/md";
import {AiFillClockCircle} from "react-icons/ai";

import "./styles.css";
import format from "date-fns/format";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

function ControleAgendaPage(){
    const history = useHistory();
    const [agendamentos, setAgendamentos] = useState([]);
    const [servicos, setServicos] = useState([]);
    const [clientes, setClientes] = useState([]);
    const [idCliente, setIdCliente] = useState([]);
    const [profissionais, setProfissionais] = useState([]);
    const [data, setData] = useState(new Date());

    async function verAgenda(e:FormEvent) {
        e.preventDefault()

        const response = await api.get(`agendamento/getAgendamentoData/${format(new Date(data), "yyyy-MM-dd")}`)
        setAgendamentos(response.data)
    }

    function selecionarAtendimentos(){
        const agendamentosSelecionados = agendamentos.filter((agendamento: any) => {
            if (agendamento.selecionado) return agendamento; 
        });

        if(!agendamentosSelecionados.length) {
            toast.warning("Selecione pelo menos um atendimento");
            return;
        }

        let clienteId: any;
        let agendamentosClientesDiferentes = false;

        agendamentosSelecionados.map((agendamento: any) => {
            if(!clienteId) {
                clienteId = agendamento.cliente_id;
            } else if(clienteId != agendamento.cliente_id) {
                agendamentosClientesDiferentes = true;
            }
        });

        if(agendamentosClientesDiferentes){
            toast.warning("Só pode selecionar agendamentos do mesmo cliente");
            return;
        }

        history.push({ 
            pathname: '/Carrinho',
            state: agendamentosSelecionados
        })
    }

    async function cancelarAgendamento(idAgendamento: Number){
        await api.delete(`agendamento/${idAgendamento}`)
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
                                    <th>Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                            {agendamentos.map((agendamento: any) => (                                
                                <tr key={agendamento.agendamento_id}>
                                    <td>
                                        {!agendamento.forma_pagamento_id && (
                                        <form action="">
                                            <input type="checkbox" value={agendamento.selecionado} onChange={() => agendamento.selecionado = !agendamento.selecionado}/>
                                        </form>
                                        )}
                                    </td>
                                    <td>{agendamento.nomeCliente}</td>
                                    <td>{format(new Date(agendamento.data_atendimento), "dd/MM/yyyy")}</td>
                                    <td>{agendamento.horario_agendamento}</td>
                                    <td>{agendamento.nomeServico}</td>
                                    <td>{agendamento.nomeProfissional}</td>
                                    <td>{agendamento.forma_pagamento}</td>
                                    <td><span className="material-icons andamento"><AiFillClockCircle /></span></td>
                                    <td>R${agendamento.valor},00</td>         
                                    <td>
                                        {!agendamento.inicio_atendimento && (
                                            <div className="form">
                                                <div className='material excluir'>                                                    
                                                    <button name='acao' id={agendamento.agendamento_id} onClick={()=>cancelarAgendamento(agendamento.agendamento_id)}>
                                                        <span className="material-icons"><MdDeleteForever /></span>
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </td>                               
                                </tr>                                
                            ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="buttons-checkout">
                        <button className="buttons" type="button" onClick={selecionarAtendimentos}>Selecionar Atendimentos</button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ControleAgendaPage