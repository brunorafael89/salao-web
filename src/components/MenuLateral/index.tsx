import React from "react";
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg"
import { BiCalendarCheck } from "react-icons/bi"
import { AiOutlineUserAdd } from "react-icons/ai"
import { AiOutlineTool } from "react-icons/ai"
import { AiOutlineTeam } from "react-icons/ai"
import { FaConciergeBell } from "react-icons/fa"
import { MdPoll } from "react-icons/md"
import { AiOutlineAudit } from "react-icons/ai"
import { SiCashapp } from "react-icons/si"

import "./styles.css";
import { getUser } from "../../services/auth";

function MenuLateral(){
    const user = getUser();

    return (
        <div className="menu-lateral">
            <nav>
                <ul>
                    {user.clienteId && (
                        <>
                            <li>
                                <span><CgProfile/></span>
                                <a href="Cadastro"> Meu Perfil</a>
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
                                <a href="Cliente">Cadastro de Cliente</a>
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
                </ul>
            </nav>
        </div>
    )
}

export default MenuLateral;