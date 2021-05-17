import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
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


function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={PrincipalPage} />
      <Route path="/login" exact component={Login} />
      <Route path="/home" exact component={Home} />
      <Route path="/formaPagamento" exact component={FormaPagamentoPage} />
      <Route path="/exemplo" exact component={ExemploPage} />
      <Route path="/servico" exact component={ServicoPage} />
      <Route path="/agendamento" exact component={AgendamentoPage} />
      <Route path="/funcao" exact component={FuncaoPage} /> 
      <Route path="/profissional" exact component={ProfissionalPage} />
      <Route path="/cadastro" exact component={CadastroPage} />
      <Route path="/TabelaPreco" exact component={TabelaPrecoPage} />
      <Route path="/Cliente" exact component={ClientePage} />
      <Route path="/ProfissionalFuncao" exact component={ProfissionalFuncaoPage} />
      <Route path="/RelatorioServico" exact component={RelatorioServicoPage} />

    </BrowserRouter>
  );
}

export default Routes;
