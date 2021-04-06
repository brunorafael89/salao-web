import React from "react";

import "./styles.css";

function MenuLateral(){
    return (
        <div className="menu-lateral">
            <nav>
                <ul>
                    <li><a href="/cadastro.html"> Meu Perfil</a></li> 
                    <li><a href="/agendamento.html"> Meus Agendamentos</a></li>
                    <li><a href="cadCliente.html">Cadastro de Cliente</a></li>
                    <li><a href="cadFuncao.html">Cadastrar Função</a></li>
                    <li><a href="cadProfissional.html">Cadastrar Profissional</a></li>
                    <li><a href="cadServico.html">Cadastrar Serviço</a></li>
                    <li><a href="/">Relatórios</a></li>
                    <li><a href="cadProfissionalFuncao.php">Relação Profissional Função</a></li>
                    <li><a href="cadFormaPagamento">Caixa</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default MenuLateral;