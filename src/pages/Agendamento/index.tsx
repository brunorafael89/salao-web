import React, { useEffect, useState } from "react";
import Header from "../../components/Header"
import MenuLateral from "../../components/MenuLateral"
import Calendar from 'react-calendar'
import { toast } from "react-toastify";
import api from "../../services/api";
import {MdCheckCircle} from "react-icons/md";
// import {MdCancel} from "react-icons/md";
// import {AiFillClockCircle} from "react-icons/ai";

import "./styles.css";
import format from "date-fns/format";

function AgendamentoPage() {

    const [agendamentos, setAgendamentos] = useState([]);
    const [servicos, setServicos] = useState([]);
    const [clientes, setClientes] = useState([]);
    const [profissionais, setProfissionais] = useState([]);
    const [formaPagamentos, setFormaPagamento] = useState([]);

    useEffect(() => {
        getAgendamentos() 
        getProfissionais()
        getServicos()
        getClientes()
        getFormaPagamento()
    }, [])

    async function getAgendamentos(){
        try {
            const response = await api.get("agendamento"); 
            setAgendamentos(response.data)
        } catch(err) {
            toast.error("Erro ao consultar a agenda");
        }
    } 
    
    async function getServicos(){
        try {
            const response = await api.get("servicos"); 
            setServicos(response.data)
        } catch(err) {
            toast.error("Erro ao consultar os serviços");
        }
    }   

    async function getProfissionais(){
        try {
            const response = await api.get("profissional"); 
            setProfissionais(response.data)
        } catch(err) {
            toast.error("Erro ao consultar os profissionais");
        }
    }

    async function getClientes(){
        try {
            const response = await api.get("cliente"); 
            setClientes(response.data)
        } catch(err) {
            toast.error("Erro ao consultar os clientes");
        }
    }

    async function getFormaPagamento(){
        try {
            const response = await api.get("formaPagamento"); 
            setFormaPagamento(response.data)
        } catch(err) {
            toast.error("Erro ao consultar as formas de pagamentos");
        }
    }   

    return (
        <>
            <Header />

            <main>
                <MenuLateral />
                <div className="main-container">
                    <div className="container-conteudo">
                        <span className="titulo">Agende seu serviço aqui!</span>

                        <Calendar/>

                        <div className="agendamento-form">
                            <form className="form" method="post">
                                <label htmlFor="">
                                    <span>Em que Data?</span>
                                    <input type="date" placeholder="Escolha uma data" />
                                </label>
                                
                                <label htmlFor="">
                                    <span>Qual Serviço?</span>
                                    <select name="servico" id="">
                                        <option value="">Selecione o Serviço</option>
                                        {servicos.map((servico: any) => (
                                            <option value={servico.servicos_id}>{servico.nome}</option>
                                        ))}
                                    </select>
                                </label>
                                
                                <label htmlFor="">
                                    <span>Qual Profissional?</span>
                                    <select name="profissional" id="">
                                        <option value="">Selecione o profissional</option>
                                        {profissionais.map((profissional: any) => (
                                            <option value={profissional.profissional_id}>{profissional.nome}</option>
                                        ))}
                                    </select>
                                </label>

                                <label htmlFor="">
                                    <span>Qual Horário?</span>
                                    <input type="time" placeholder="horário"/>           
                                </label>

                                <label htmlFor="">
                                    <span>Qual Pagamento?</span>
                                    <select name="pagamento" id="">
                                        <option value="">Selecione o pagamento</option>
                                        {formaPagamentos.map((formaPagamento: any) => (
                                            <option value={formaPagamento.forma_pagamento_id}>{formaPagamento.forma_pagamento}</option>
                                        ))}
                                    </select>
                                </label>

                                <button> Agendar </button>
                            </form>                       
                        </div>
                    </div>

                    <div className="historico-agendamento">
                        <table>
                            <thead>
                                <tr>
                                    <th>Dia</th>
                                    <th>Hora</th>
                                    <th>Cliente</th>
                                    <th>Profissional</th>
                                    <th>Serviço</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {agendamentos.map((agendamento: any) => (
                                    <tr>
                                    <td>{format(new Date(agendamento.data_atendimento), "dd/MM/yyyy")}</td>
                                    <td>{agendamento.horario_agendamento}</td>
                                    <td>
                                        {clientes.map((cliente: any) => (
                                            agendamento.cliente_id === cliente.cliente_id ? cliente.nome : ""
                                        ))}
                                    </td>
                                    <td>
                                        {profissionais.map((profissional: any) => (
                                            agendamento.funcionario_id === profissional.profissional_id ? profissional.nome : ""
                                            ))}
                                    </td>
                                    <td>{}</td>
                                    <td><span className="material-icons concluido"><MdCheckCircle/></span></td>
                                    {/* <td><span className="material-icons andamento"><AiFillClockCircle/></span></td> */}
                                    {/* <td><span className="material-icons cancelado"><MdCancel/></span></td> */}
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    );
}

export default AgendamentoPage;