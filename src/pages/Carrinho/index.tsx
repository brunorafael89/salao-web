import React, { useState } from "react";
import Header from "../../components/Header/";
import MenuLateral from "../../components/MenuLateral/";

import coloracao from "../../assets/images/coloração1.jpg";
import { FaTrashAlt } from "react-icons/fa";

import "./styles.css";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";
import format from "date-fns/format";
import { toast } from "react-toastify";
import api from "../../services/api";
import ContainerMensagem from "../../components/ContainerMensagem";

function CartPage(){
    const location = useLocation<any[]>();
    const history = useHistory();
    const [agendamentos, setAgendamentos] = useState<any[]>([]);
    const [total, setTotal] = useState<Number>(0);
    const [formaPagamentos, setFormaPagamento] = useState([]);
    const [idFormapagamento, setIdFormapagamento] = useState("");

    useEffect(() => {
        getFormaPagamento();

        // console.log(location.state)
        setAgendamentos(location.state);

        calcularTotal(location.state);

    }, []);

    function calcularTotal(agendamentos: any[]){
        let total = 0;
        agendamentos.map(agendamento => {
            total += agendamento.valor;
        });
        setTotal(total);
    }
    
    async function getFormaPagamento(){
        try {
            const response = await api.get("formaPagamento"); 
            setFormaPagamento(response.data)
        } catch(err) {
            toast.error("Erro ao consultar as formas de pagamentos");
        }
    }

    async function finalizar(){
        if(!idFormapagamento){
            toast.warning("Escolha uma forma de pagamento");
            return;
        }

        api.post("pagamento",{
            forma_pagamento_id: idFormapagamento,
            atendimentos: agendamentos
        })

        history.replace("ControleAgenda");
    }

    function excluir(agendamento_id: Number){
        const agendamentosFiltrados = agendamentos.filter(agendamento => {
            return agendamento.agendamento_id !== agendamento_id;
        });
        setAgendamentos(agendamentosFiltrados);
        calcularTotal(agendamentosFiltrados);
    }

    return (
        <>
            <Header/>

            <main>
                <MenuLateral/>

                {!agendamentos.length ? 
                (
                    <ContainerMensagem mensagem="Nenhum agendamento"/>
                ) : 
                (                                
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
                                    {agendamentos.map(agendamento => (
                                        <tr className="cart-items" key={agendamento.agendamento_id}>
                                            <td>
                                                <div className="cart-img">
                                                    <img src={coloracao} alt="coloração" />
                                                </div>
                                                <div className="cart-service">
                                                    <span className="item-service">{agendamento.nomeServico}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="cart-service">
                                                    <span className="item-data">{format(agendamento.data_atendimento ? new Date(agendamento.data_atendimento) : new Date(), "dd/MM/yyyy")}</span>
                                                    <span className="item-hora">{agendamento.horario_agendamento}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="cart-value">
                                                    <span className="item-valor">R$ {agendamento.valor},00</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="cart-excluir" onClick={() => excluir(agendamento.agendamento_id)}>
                                                    <button type="button"><FaTrashAlt/></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}                                
                                </tbody>
                            </table>

                            <section className="cart-information">
                                <label className="payment-method">
                                    <span>Qual Pagamento?</span>
                                    <select name="pagamento" id="" /*value={idFormapagamento}*/ onChange={(e) => setIdFormapagamento(e.target.value)}>
                                        <option value="">Selecione o pagamento</option>
                                        {formaPagamentos.map((formaPagamento: any) => (
                                            <option value={formaPagamento.forma_pagamento_id}>{formaPagamento.forma_pagamento}</option>
                                        ))}
                                    </select>
                                </label>

                                <div>
                                    <label htmlFor="">
                                        <span>Subtotal</span> <span>R$ {total},00</span>
                                    </label>
                                    <label htmlFor="">
                                        <span>Valor Final</span> <span>R$ {total},00</span>
                                    </label>
                                </div>
                            </section>

                            <div className="cart-buttons">
                                <button type="button" onClick={() => history.push("ControleAgenda")}>Adicionar mais serviços</button>
                                <button type="button" onClick={finalizar}>Finalizar Atendimento</button>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </>
    )
}

export default CartPage