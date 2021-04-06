import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import "./styles.css";

function AgendamentoPage() {

    const [agendamentos, setAgendamentos] = useState([]);
    const [servicos, setServicos] = useState([]);
    const [profissionais, setProfissionais] = useState([]);

    useEffect(() => {
        getAgendamentos() 
        getProfissionais()
        getServicos()
    }, [])

    async function getAgendamentos(){
        try {
            const response = await api.get("agendamento"); 
            setAgendamentos(response.data)
        } catch(err) {
            toast.error("Erro ao consultar formas de pagamentos");
        }
    } 
    
    async function getServicos(){
        try {
            const response = await api.get("servicos"); 
            setServicos(response.data)
        } catch(err) {
            toast.error("Erro ao consultar formas de pagamentos");
        }
    }   

    async function getProfissionais(){
        try {
            const response = await api.get("profissional"); 
            setProfissionais(response.data)
        } catch(err) {
            toast.error("Erro ao consultar formas de pagamentos");
        }
    }   

    return (
        <div className="main-container bottom">
                <div className="container-conteudo">
                    <span>Agende seu serviço aqui!</span>

                    {/* <calendario id="calendario1"></calendario> */}

                    <div className="agendamento-form">
                        <form className="form" method="post">
                            <label htmlFor="">Data agendamento
                                <input type="date" placeholder="Escolha uma data" />
                            </label>
                            
                            <label htmlFor="">Escolha o Serviço
                                <select name="servico" id="">
                                <option value="">Selecione o Serviço</option>
                                {servicos.map((servico: any) => (
                                    <option value={servico.servicos_id}>{servico.nome}</option>
                                ))}
                                </select>
                            </label>
                            
                            <label htmlFor="">Escolha o Profissional
                                <select name="profissional" id="">
                                <option value="">Selecione o profissional</option>
                                {profissionais.map((profissional: any) => (
                                    <option value={profissional.profissional_id}>{profissional.nome}</option>
                                ))}
                                </select>                                  
                            </label>

                            <label htmlFor=""> Horário
                                <input type="time" placeholder="horário"/>           
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
                                <th>hora</th>
                                <th>Serviço</th>
                                <th>Profissional</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        {agendamentos.map((agendamento: any) => (
                            <tr>
                            <td>{agendamento.data_atendimento}</td>
                            <td>{agendamento.inicio_atendimento}</td>
                            <td>{agendamento.data_atendimento}</td>
                            <td>{agendamento.funcionario_id}</td>
                            <td><span className="material-icons concluido">check_circle</span></td>
                        </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
    )
}

export default AgendamentoPage;