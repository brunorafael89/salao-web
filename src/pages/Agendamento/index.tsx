import React, { FormEvent, useEffect, useState } from "react";
import Header from "../../components/Header"
import MenuLateral from "../../components/MenuLateral"
import Calendar from 'react-calendar'
import { toast } from "react-toastify";
import api from "../../services/api";
// import {MdCheckCircle} from "react-icons/md";
// import {MdCancel} from "react-icons/md";
import {AiFillClockCircle} from "react-icons/ai";
import format from "date-fns/format";
import { addMinutes, isBefore, subMinutes } from "date-fns";

import "./styles.css";
// import { da } from "date-fns/locale";

function AgendamentoPage() {

    const [agendamentos, setAgendamentos] = useState([]);
    const [servicos, setServicos] = useState([]);
    const [clientes, setClientes] = useState([]);
    const [IdServicos, setIdServicos] = useState("");
    const [idFormapagamento, setIdFormapagamento] = useState("");
    // const [idFuncionario, setIdFuncionario] = useState("");
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
        setIdServicos(servico.servicos_id)
    }

    async function agendar(e: FormEvent){
        e.preventDefault();
        try{
            await api.post('agendamento', {
                // funcionario_id: idFuncionario,
                profissional_id: idProfissional,
                cliente_id: idCliente,
                data_atendimento: data_atendimento,
                data_agendamento: data_agendamento,
                total: total,
                horario_agendamento: format(new Date(), "yyyy-MM-dd") + " " + horario_agendamento + ":00 America/Sao_Paulo",
                servico_id: IdServicos,
                forma_pagamento_id: idFormapagamento

            });
            limpar();
            getServicos();
            getAgendamentos() 

            toast.success("Agendamento adicionado com sucesso!");

        } catch (err) {
            toast.error("Erro ao gerar agendamento!");
        }
    }

    function limpar(){
        setDataAgendamento(new Date())
        setIdServicos('')
        setIdProfissional('')
        setIdFormapagamento('')
        setHorarios([])
        setTotal('')
        setHorarioAgendamento('')
    }

    function setData(data: any){
        setDataAgendamento(data);
    }
    

    return (
        <>
            <Header />

            <main>
                <MenuLateral />
                <div className="main-container">
                    <div className="container-conteudo">
                        <span className="titulo">Agende seu serviço aqui!</span>

                        <Calendar 
                            onChange={(data) => setData(data)} 
                            minDate={new Date()}
                            
                        />

                        <div className="agendamento-form">
                            <form className="form" onSubmit={agendar}>
                                <label htmlFor="">
                                    <span>Em que Data?</span>
                                    <input type="text" disabled value={format(data_agendamento, "dd/MM/yyy")}/>
                                </label>
                                
                                <label htmlFor="">
                                    <span>Qual Serviço?</span>
                                    <select name="servico" id=""  onChange={(e) => getHorarios(e.target.value)}>
                                        <option value="">Selecione o Serviço</option>
                                        {servicos.map((servico: any) => (
                                            <option value={JSON.stringify(servico)}>{servico.nome} (R${servico.valor},00)</option>
                                        ))}
                                    </select>
                                </label>

                                <label htmlFor="">
                                    <span>Valor do serviço</span>
                                    {servicos.map((servico: any)=>(
                                        <input type="text" disabled value={(servico.valor)}/>
                                    ))}
                                </label>
                                
                                <label htmlFor="">
                                    <span>Qual Profissional?</span>
                                    <select name="profissional" id="" value={idProfissional} onChange={(e) => setIdProfissional(e.target.value)}>
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
                                    <select name="pagamento" id="" /*value={idFormapagamento}*/ onChange={(e) => setIdFormapagamento(e.target.value)}>
                                        <option value="">Selecione o pagamento</option>
                                        {formaPagamentos.map((formaPagamento: any) => (
                                            <option value={formaPagamento.forma_pagamento_id}>{formaPagamento.forma_pagamento}</option>
                                        ))}
                                    </select>
                                </label>

                                <button type='submit'> Adicionar ao carrinho </button>
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
                                        <td>{format(new Date(agendamento.data_agendamento), "dd/MM/yyyy")}</td>
                                        <td>{agendamento.horario_agendamento}</td>
                                        <td>
                                            {clientes.map((cliente: any) => (
                                                agendamento.cliente_id === cliente.cliente_id ? cliente.nome : ""
                                            ))}
                                        </td>
                                        <td>
                                            {agendamento.nome}                                        
                                        </td>
                                        <td>
                                            {servicos.map((servico: any) => (
                                                        agendamento.servicos_id === servico.servicos_id ? servico.nome : ""
                                                    ))}
                                            </td>
                                        {/* <td><span className="material-icons concluido"><MdCheckCircle/></span></td>
                                        Pagamento autorizado */}
                                        <td><span className="material-icons andamento"><AiFillClockCircle/></span></td>
                                        {/* <td><span className="material-icons cancelado"><MdCancel/></span></td> */}

                                        {/* <div className="form">
                                                <div className='material excluir'>
                                                    <button name='acao' value='excluir' onClick={() => excluir(profiFuncao.profissional_id, profiFuncao.funcao_id)}>
                                                        <span className="material-icons"><MdDeleteForever />cancelar agendamento</span>
                                                    </button>
                                                </div>
                                            </div>
                                        */}
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