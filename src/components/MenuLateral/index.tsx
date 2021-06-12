import React from "react";
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg"
import { BiCalendarCheck } from "react-icons/bi"
import { AiOutlineUserAdd, AiOutlineTool, AiOutlineTeam, AiOutlineAudit, AiOutlineSchedule } from "react-icons/ai"
import { FaConciergeBell } from "react-icons/fa"
import { MdPoll } from "react-icons/md"
import { SiCashapp } from "react-icons/si"

import "./styles.css";
import { getUser } from "../../services/auth";

function MenuLateral(){
    function openClassCadastro(){
        document.querySelector('#dropCadastro')?.classList.toggle('show')
    }

    function openClassRelatorio(){
        document.querySelector('#dropRelatorio')?.classList.toggle('show')
    }
    const user = getUser();
    console.log(user)
    return (
        <div className="menu-lateral">
            <nav>
                <ul>
                    {user.clienteId && (
                        <>
                            <li>
                                <span><CgProfile/></span>
                                <a href="Perfil"> Meu Perfil</a>
                            </li> 
                            <li>
                                <span><BiCalendarCheck /></span>
                                <Link to="Agendamento"> Meus Agendamentos</Link>
                            </li>
                        </>    
                    )}
                    {user.funcionarioId && (
                        <>
                            <li>
                                <span><AiOutlineUserAdd /></span>
                                <a href="Funcionario">Cadastrar Funcionários</a>
                            </li>                        
                            <li>
                                <span><AiOutlineUserAdd /></span>
                                <a href="Cliente">Cadastrar Clientes</a>
                            </li>                        
                            <li>
                                <span><AiOutlineTool /></span>
                                <a href="Funcao">Cadastrar Função</a>
                            </li>
                            <li>
                                <span><AiOutlineTeam /></span>
                                <a href="Profissional">Cadastrar Profissional</a>
                            </li>
                            <li>
                                <span><FaConciergeBell /></span>
                                <a href="Servico">Cadastrar Serviço</a>
                            </li>
                            <li>
                                <span><MdPoll /></span>
                                <a href="RelatorioServico">Relatórios Serviços</a>
                            </li>
                            <li>
                                <span><MdPoll /></span>
                                <a href="RelatorioComissao">Relatórios Comissões</a>
                            </li>
                            <li>
                                <span><AiOutlineAudit /></span>
                                <a href="ProfissionalFuncao">Profissional-Função</a>
                            </li>
                            <li>
                                <span><SiCashapp /></span>
                                <a href="FormaPagamento">Formas de Pagamento</a>
                            </li>

                            
                        </>
                    )}
                        {user.profissionalId && (
                            <li>
                                <span><AiOutlineSchedule /></span>
                                <a href="AgendaProfissional">Agenda Profissional</a>
                            </li>
                        )}
                </ul>
            </nav>
        </div>
    )
}

export default MenuLateral;