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


function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={PrincipalPage} />
      <Route path="/login" exact component={Login} />
      <Route path="/home" exact component={Home} />
      <Route path="/perfil" exact component={PerfilPage} />
      <Route path="/formaPagamento" exact component={FormaPagamentoPage} />
      <Route path="/exemplo" exact component={ExemploPage} />
      <Route path="/servico" exact component={ServicoPage} />
      <Route path="/agendamento" exact component={AgendamentoPage} />
      <Route path="/funcao" exact component={FuncaoPage} /> 
      <Route path="/profissional" exact component={ProfissionalPage} />
      <Route path="/cadastro" exact component={CadastroPage} />
      <Route path="/tabelaPreco" exact component={TabelaPrecoPage} />
      <Route path="/cliente" exact component={ClientePage} />
      <Route path="/profissionalFuncao" exact component={ProfissionalFuncaoPage} />
      <Route path="/relatorioServico" exact component={RelatorioServicoPage} />
      <Route path="/relatorioComissao" exact component={RelatorioComissaoPage} />
      <Route path="/carrinho" exact component={CarrinhoPage} />

    </BrowserRouter>
  );
}

export default Routes;
