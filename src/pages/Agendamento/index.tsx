import React, { FormEvent, useEffect, useState } from "react";
import Header from "../../components/Header"
import MenuLateral from "../../components/MenuLateral"
import Calendar from 'react-calendar'
import { toast } from "react-toastify";
import api from "../../services/api";
import {MdCheckCircle} from "react-icons/md";
// import {MdCancel} from "react-icons/md";
// import {AiFillClockCircle} from "react-icons/ai";
import format from "date-fns/format";
import { addMinutes, isBefore, subMinutes } from "date-fns";

import "./styles.css";
import format from "date-fns/format";

function AgendamentoPage() {

    const [agendamentos, setAgendamentos] = useState([]);
    const [servicos, setServicos] = useState([]);
<<<<<<< Updated upstream
    const [clientes, setClientes] = useState([]);
=======
    const [IdServicos, setIdServicos] = useState("");
    const [idFormapagamento, setIdFormapagamento] = useState("");
>>>>>>> Stashed changes
    const [profissionais, setProfissionais] = useState([]);
    const [formaPagamentos, setFormaPagamento] = useState([]);
    const [horarios, setHorarios] = useState<string[]>([]);
    const [idProfissional, setIdProfissional] = useState('');
    const [idCliente, setIdCliente] = useState(1);
    const [data_atendimento, setDataAtendimento] = useState(new Date());
    const [data_agendamento, setDataAgendamento] = useState(new Date());
    const [total, setTotal] = useState('');
    const [horario_agendamento, setHorarioAgendamento] = useState('');


    useEffect(() => {
        getAgendamentos() 
        // getProfissionais()
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

    async function getProfissionais(idFuncao:Number){
        try {
            const response = await api.get(`profissionalFuncao/porFuncao/${idFuncao}`); 
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

    function getHorarios(servico:any){
        servico = JSON.parse(servico)
        const dataInicial = new Date()
        dataInicial.setHours(9, 0, 0);

        let dataSomada = dataInicial;
        
        const dataFinal = new Date()
        dataFinal.setHours(18, 0, 0)
       
        const horarios = [];
        
        const tempo:any[] = servico.tempo_servico.split(':')
        const hora = Number(tempo[0]) * 60;
        const minuto = Number(tempo[1]);
        const novaHora = hora + minuto;

        let horaFormatada = format(dataSomada, "HH:mm");
        horarios.push(horaFormatada);

        const dataLimiteAgendamento = subMinutes(dataFinal, novaHora);
    
        while(isBefore(dataSomada, dataLimiteAgendamento)){
    
            dataSomada = addMinutes(dataSomada, novaHora);
            
            let horaFormatada = format(dataSomada, "HH:mm");
    
            horarios.push(horaFormatada);
        }
    
        setHorarios(horarios);
        getProfissionais(servico.funcao_id)
        setTotal(servico.valor)
    }

    async function agendar(e: FormEvent){
        e.preventDefault();
        try{
            api.post('agendamento', {
                //funcionario_id:
                profissional_id: idProfissional,
                cliente_id: idCliente,
                data_atendimento: data_atendimento,
                data_agendamento: data_agendamento,
                total: total,
                horario_agendamento: format(new Date(), "yyyy-MM-dd") + " " + horario_agendamento + ":00 America/Sao_Paulo",
                //'2021-05-25 10:00:00 America/Sao_Paulo'
                //servico_id: IdServicos,
                //Forma_pagamento_id: idFormapagamento
            });
            // limpar();
            getServicos();
            getAgendamentos() 

            toast.success("Agendamento adicionado com sucesso!");

        } catch (err) {
            toast.error("Erro ao gerar agendamento!");
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
                            <form className="form" onSubmit={agendar}>
                                <label htmlFor="">
                                    <span>Em que Data?</span>
                                    <input type="date" placeholder="Escolha uma data" />
                                </label>
                                
                                <label htmlFor="">
                                    <span>Qual Serviço?</span>
                                    <select name="servico" id="" onChange={(e) => getHorarios(e.target.value)}>
                                        <option value="">Selecione o Serviço</option>
                                        {servicos.map((servico: any) => (
                                            <option value={JSON.stringify(servico)}>{servico.nome}</option>
                                        ))}
                                    </select>
                                </label>
                                
                                <label htmlFor="">
                                    <span>Qual Profissional?</span>
                                    <select name="profissional" id="" onChange={(e) => setIdProfissional(e.target.value)}>
                                        <option value="">Selecione o profissional</option>
                                        {profissionais.map((profissional: any) => (
                                            <option value={profissional.profissional_id}>{profissional.nome}</option>
                                        ))}
                                    </select>
                                </label>

                                <label htmlFor="">
                                    <span>Qual Horário?</span>
                                    <select name="horario" id="" onChange={(e) => setHorarioAgendamento(e.target.value)}>
                                        <option value="">Selecione o horário</option>
                                        {horarios.map((horario: any) => (
                                            <option value={horario}>{horario}</option>
                                        ))}
                                    </select>         
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

                                <button type='submit'> Agendar </button>
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