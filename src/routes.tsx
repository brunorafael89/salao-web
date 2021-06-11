import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import PerfilPage from "./pages/Perfil";
import FormaPagamentoPage from "./pages/FormaPagamento";
import ExemploPage from "./pages/Exemplo";
import ServicoPage from "./pages/Servico";
import AgendamentoPage from "./pages/Agendamento";
import FuncaoPage from "./pages/Funcao";
import ProfissionalPage from "./pages/Profissional";
import CadastroPage from "./pages/Cadastro";
import PrincipalPage from "./pages/Principal";
import TabelaPrecoPage from "./pages/TabelaPreco";
import ClientePage from "./pages/Cliente";
import ProfissionalFuncaoPage from "./pages/ProfissionalFuncao";
import RelatorioServicoPage from "./pages/RelatorioServico";
import RelatorioComissaoPage from "./pages/RelatorioComissao";
import CarrinhoPage from "./pages/Carrinho";

import FuncionarioPrivateRouter from "./routes/FuncionarioPrivateRouter";
import ClientePrivateRouter from "./routes/ClientePrivateRouter";
import PrivateRouter from "./routes/PrivateRouter";
import FuncionarioPage from "./pages/Funcionario";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={PrincipalPage} />
      <Route path="/login" exact component={Login} />
      <Route path="/cadastro" exact component={CadastroPage} />
      <Route path="/tabelaPreco" exact component={TabelaPrecoPage} />

      <PrivateRouter path="/home" exact component={Home} />

      <ClientePrivateRouter path="/agendamento" exact component={AgendamentoPage} />

      <FuncionarioPrivateRouter path="/formaPagamento" exact component={FormaPagamentoPage} />
      <FuncionarioPrivateRouter path="/exemplo" exact component={ExemploPage} />
      <FuncionarioPrivateRouter path="/servico" exact component={ServicoPage} />
      <FuncionarioPrivateRouter path="/funcao" exact component={FuncaoPage} /> 
      <FuncionarioPrivateRouter path="/profissional" exact component={ProfissionalPage} />
      <FuncionarioPrivateRouter path="/cliente" exact component={ClientePage} />
      <FuncionarioPrivateRouter path="/funcionario" exact component={FuncionarioPage} />
      <FuncionarioPrivateRouter path="/profissionalFuncao" exact component={ProfissionalFuncaoPage} />
      <FuncionarioPrivateRouter path="/relatorioServico" exact component={RelatorioServicoPage} />
      <FuncionarioPrivateRouter path="/relatorioComissao" exact component={RelatorioComissaoPage} />
      <Route path="/carrinho" exact component={CarrinhoPage} />

    </BrowserRouter>
  );
}

export default Routes;
