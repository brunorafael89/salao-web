import format from "date-fns/format";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import MenuLateral from "../../components/MenuLateral";
import api from "../../services/api";
import { getUser } from "../../services/auth";

import "./styles.css";

function AgendaProfissionalPage(){
    const user = getUser();
    const [servicos, setServicos] = useState([]);
    const [clientes, setClientes] = useState([]);
    const [agendaProfissionais, setAgendaProfissionais] = useState([])
    const [data, setData] = useState(new Date())

    async function getAgenda(){
        const response = await api.get(`agendamento/getAgendamentoProfissional/${user.profissionalId}/${format(data, "yyyy-MM-dd")}`);
        setAgendaProfissionais(response.data)
    }

    useEffect(() => {
        getAgenda()
    }, [])

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
                                {agendaProfissionais.map((agendamento: any) => (
                                    <tr>
                                        <td>
                                            <form action="">
                                                <input 
                                                    type="checkbox" 
                                                    name=""
                                                />
                                            </form>
                                        </td>
                                        <td>
                                           {agendamento.nomeCliente}
                                        </td>
                                        <td>{format(new Date(agendamento?.data_atendimento), "dd/MM/yyyy")}</td>
                                        <td>{agendamento.horario_agendamento}</td>
                                        <td>
                                            {agendamento.nomeServico}
                                        </td>
                                        <td>
                                            {agendamento.valor}
                                        </td>
                                        <td>
                                            {agendamento.comissao}
                                        </td>
                                    
                                    </tr>
                                ))}                    
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