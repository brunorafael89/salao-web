import React from "react";
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

function MenuLateral(){
    return (
        <div className="menu-lateral">
            <nav>
                <ul>
                    <li>
                        <span><CgProfile/></span>
                        <a href="/cadastro.html"> Meu Perfil</a>
                    </li> 
                    <li>
                        <span><BiCalendarCheck /></span>
                        <a href="Agendamento/"> Meus Agendamentos</a>
                    </li>
                    <li>
                        <span><AiOutlineUserAdd /></span>
                        <a href="Cliente/">Cadastro de Cliente</a>
                    </li>
                    <li>
                        <span><AiOutlineTool /></span>
                        <a href="Funcao/">Cadastrar Função</a>
                    </li>
                    <li>
                        <span><AiOutlineTeam /></span>
                        <a href="../Profissional/">Cadastrar Profissional</a>
                    </li>
                    <li>
                        <span><FaConciergeBell /></span>
                        <a href="Servico/">Cadastrar Serviço</a>
                    </li>
                    <li>
                        <span><MdPoll /></span>
                        <a href="Relatorios/">Relatórios</a>
                    </li>
                    <li>
                        <span><AiOutlineAudit /></span>
                        <a href="../ProfissionalFuncao/">Profissional-Função</a>
                    </li>
                    <li>
                        <span><SiCashapp /></span>
                        <a href="FormaPagamento/">Caixa</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default MenuLateral;