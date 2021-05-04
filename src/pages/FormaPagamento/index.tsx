import React, { FormEvent, useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
import api from "../../services/api";
import Header from "../../components/Header/";
import MenuLateral from "../../components/MenuLateral/";

import { toast } from "react-toastify";
import { MdDeleteForever } from 'react-icons/md';
import { GrUpgrade } from "react-icons/gr";

import "./styles.css";

function FormaPagamentoPage() {
//   const history = useHistory();
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
      <>
        <Header />

        <main>
            <MenuLateral />

            <div className="formaPagamento main-container">
                <div className="formaPagamento cadastro-form">
                    <h1>Cadastro de Formas de Pagamentos</h1>

                    <form onSubmit={cadastrar} className="form"> 
                        <input type="hidden" name="id" value="" />

                        <label htmlFor="forma_pagamento">
                            <span>Forma de Pagamento</span>
                            <input type="text" 
                            name="forma_pagamento" 
                            value={formaPagamento}
                            onChange={(e) => setFormaPagamento(e.target.value)}
                            />
                        </label>

                        <div className="buttons">
                            <button name="acao" value="cadastrar">Cadastrar</button>
                            <button name="acao" value="alterar">Alterar</button>
                        </div>
                    </form>
                </div>

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
                                        <form>
                                            <input type='hidden' name='id' value="" />
                                            <div className='material' id='excluir' onClick={() => excluir(forma.forma_pagamento_id)}>
                                                <button name='acao' value='excluir'> <MdDeleteForever /> Excluir</button>
                                            </div>
                                            <div className='material'>
                                                <button name='acao' value='carregar' onClick={() => setFormaPagamento(forma.forma_pagamento)}><GrUpgrade/>Carregar</button>
                                            </div>
                                        </form>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
      </>
  );
}

export default FormaPagamentoPage;
