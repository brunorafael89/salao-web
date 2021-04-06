import React, { FormEvent, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

import { toast } from "react-toastify";

import logo from "../../assets/images/logo.png";

import { MdDeleteForever } from 'react-icons/md';


import "./styles.css";

function FormaPagamentoPage() {
  const history = useHistory();
  const [formaPagamento, setFormaPagamento] = useState("");
  const [formasPagamentos, setFormasPagamentos] = useState([]);


    useEffect(() => {
        getFormasPagamentos() 
    }, [])

    async function getFormasPagamentos(){
        try {
            const response = await api.get("formaPagamento"); 
            setFormasPagamentos(response.data)
        } catch(err) {
            toast.error("Erro ao consultar formas de pagamentos");
        }
    }

  async function cadastrar(e: FormEvent) {
    e.preventDefault();

    try {   
      await api.post("formaPagamento", {
        forma_pagamento : formaPagamento
      });

      setFormaPagamento("")
      getFormasPagamentos()

      //history.push("/home");
      toast.success("Forma de pagamento cadastrado com sucesso!");
    } catch (err) {
        console.log(err.error)
      toast.error(err.error);
    }
  }

  async function excluir(id: number){
    await api.delete(`formaPagamento/${id}`);
    getFormasPagamentos() 
  }

  return (
    <div className="out-container">
        <header className="header-login">
            <div className="header-login-menu">
                <div className="logo">
                    <a href="/"><img src={logo} alt="logo salão Beauty"/></a>
                </div>

                <div className="welcome">
                    <h1>Bem vindo!</h1>

                    <p>Cadastre as suas formas de pagamento para que tenha mais opções no recebimento.</p>
                </div>
            </div>
        </header>

        <h1>Cadastro de Formas de Pagamentos</h1>

        <form onSubmit={cadastrar} className="login-form"> 
            <input type="hidden" name="id" value="" />

            <label htmlFor="forma_pagamento">Forma de Pagamento</label>
            <input type="text" 
            name="forma_pagamento" 
            value={formaPagamento}
            onChange={(e) => setFormaPagamento(e.target.value)}
            />

            <button name="acao" value="cadastrar" type="submit">Cadastrar</button>
            <button name="acao" value="alterar">Alterar</button>
        </form>

        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Forma de Pagamento</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {formasPagamentos.map((forma: any) => (
                        <tr>
                            <td>{forma.forma_pagamento}</td>
                            <td>
                                {/* <form> */}
                                    <input type='hidden' name='id' value="" />
                                    <div className='material' id='excluir' onClick={() => excluir(forma.forma_pagamento_id)}>
                                        {/* <span className='material-icons'>delete_forever</span> */}
                                        
                                        <button name='acao' value='excluir'> <MdDeleteForever /> Excluir</button>
                                    </div>
                                    <div className='material'>
                                        <span className='material-icons carregar'>upgrade</span>
                                        <button name='acao' value='carregar' onClick={() => setFormaPagamento(forma.forma_pagamento)}>Carregar</button>
                                    </div>
                                {/* </form> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>

  );
}

export default FormaPagamentoPage;
