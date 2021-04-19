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
import PrincipalPage from "./pages/Principal";
import TabelaPrecoPage from "./pages/TabelaPreco";


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
      <Route path="/TabelaPreco" exact component={TabelaPrecoPage} />

    </BrowserRouter>
  );
}

export default Routes;
