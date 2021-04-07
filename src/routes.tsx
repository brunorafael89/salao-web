import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import FormaPagamentoPage from "./pages/FormaPagamento";
import ExemploPage from "./pages/Exemplo";
import ServicoPage from "./pages/Servico";
import AgendamentoPage from "./pages/Agendamento";
import FuncaoPage from "./pages/Funcao";


function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Home} />
      <Route path="/formaPagamento" exact component={FormaPagamentoPage} />
      <Route path="/exemplo" exact component={ExemploPage} />
      <Route path="/servico" exact component={ServicoPage} />
      <Route path="/agendamento" exact component={AgendamentoPage} />
      <Route path="/funcao" exact component={FuncaoPage} /> 

    </BrowserRouter>
  );
}

export default Routes;
