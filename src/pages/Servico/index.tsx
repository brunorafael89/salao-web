import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import Header from "../../components/Header/";
import MenuLateral from "../../components/MenuLateral/";

import "./styles.css";

function ServicoPage(){
    const [funcoes, setFuncoes] = useState([]);
    const [servicos, setServicos] = useState([]);

    useEffect(() => {
        getFuncoes() 
        getServicos()
    }, [])

    async function getFuncoes(){
        try {
            const response = await api.get("funcao"); 
            setFuncoes(response.data)
        } catch(err) {
            toast.error("Erro ao consultar funções");
        }
    }

    async function getServicos(){
        try {
            const response = await api.get("servicos"); 
            setServicos(response.data)
        } catch(err) {
            toast.error("Erro ao consultar servicos");
        }
    }









    return (
        <>
            <Header />

            <main>
                <MenuLateral />

                {/* <div className="search">
                    <input className="pesquisa" type="text" placeholder="nome do usuário" />
                    <span>
                        <button className="btn_pesquisar"><i className="fas fa-search"></i></button>
                    </span>
                </div> */}

                <div className="servico main-container">
                    <div className="servico cadastro-form">
                        <h1>Cadastro de Serviços</h1>
                        <form className="form" method="post">
                            <label htmlFor="funcao">
                                <span>Função</span>
                                <select name="funcao_id" >
                                    {funcoes.map((funcao: any) => (
                                        <option>{funcao.nome_funcao}</option>
                                        ))}
                                </select>
                            </label>
                                
                            <label htmlFor="nome">
                                <span>Nome do Servico</span>
                                <input type="text" name="nome" value="Alisamento Japonês" />
                            </label>
                            
                            <label htmlFor="valor">
                                <span>Valor do Servico</span>
                                <input type="text" name="valor" value="256.00" />
                            </label>
                            
                            <label htmlFor="comissao">
                                <span>Comissão</span>
                                <input type="text" name="comissao" value="50" />
                            </label>
                            
                            <label htmlFor="tempo_servico">
                                <span>Tempo de execução do Servico</span>
                                <input type="text" name="tempo_servico" value="01:30:00" />
                            </label>
                            
                            <div className="buttons">
                                <button name="acao" value="cadastrar" type="submit">Cadastrar</button>
                                <button name="acao" value="alterar">Alterar</button>
                            </div>
                        </form>
                    </div>

                    <div className="table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Função de quem realiza o serviço</th>
                                    <th>Nome do Serviço</th>
                                    <th>Valor</th>
                                    <th>Comissão</th>
                                    <th>Tempo do serviço</th>
                                    <th>Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {servicos.map((servico: any) => (
                                    <tr>
                                        <td>Cabeleireira</td>
                                        <td>{servico.nome}</td>
                                        <td>{servico.valor}</td>
                                        <td>{servico.comissao}</td>
                                        <td>{servico.tempo_servico}</td>
                                        <td>
                                            <form method='post'>
                                                <input type='hidden' name='id' value='{$serv->servicos_id}' />
                                                <div className='material' id='excluir'>
                                                    <span className='material-icons'>delete_forever</span>
                                                    <button name='acao' value='excluir'>Excluir</button>
                                                </div>
                                                <div className='material'>
                                                    <span className='material-icons carregar'>upgrade</span>
                                                    <button name='acao' value='carregar'>Carregar</button>
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
    )
}

export default ServicoPage