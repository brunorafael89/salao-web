import React, { FormEvent, useEffect, useState } from "react";
import Header from "../../components/Header/";
import MenuLateral from "../../components/MenuLateral/";
import api from "../../services/api";

import { toast } from "react-toastify";

import "./styles.css";

// importando os icones
import { MdDeleteForever } from "react-icons/md";
import { MdUpdate } from "react-icons/md";



function ServicoPage(){
    const [funcoes, setFuncoes] = useState([]);
    const [servicos, setServicos] = useState([]);

    const [idFuncao, setIdFuncao] = useState("")
    const [nomeServico, setNomeServico] = useState("");
    const [valorServico, setValorServico] = useState("");
    const [comissaoServico, setComissaoServico] = useState("");
    const [tempoServico, setTempoServico] = useState("");

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

    async function cadastrar(e: FormEvent){
        e.preventDefault();

        try{
            await api.post("servico", {
                funcao_id: idFuncao,
                nome_servico: nomeServico,
                valor_servico: valorServico,
                comissao_servico: comissaoServico,
                tempo_servico: tempoServico
            });
            setNomeServico("");
            setValorServico("");
            setComissaoServico("");
            setTempoServico("");
    
            getServicos();
        } catch(err){
            toast.error("Erro ao cadastrar serviço!");
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
                        <form className="form" onSubmit={cadastrar}>
                            <label htmlFor="funcao">
                                <span>Função</span>
                                <select name="nome_funcao">
                                    {funcoes.map((funcao: any) => (
                                        <option id={funcao.funcao_id}>{funcao.nome_funcao}</option>
                                        ))
                                    }
                                </select>
                            </label>
                                
                            <label htmlFor="nome">
                                <span>Nome do Servico</span>
                                <input 
                                    type="text" 
                                    name="nome_servico" 
                                    value={nomeServico}
                                    onChange={(e)=> setNomeServico(e.target.value)}
                                />
                            </label>
                            
                            <label htmlFor="valor">
                                <span>Valor do Servico</span>
                                <input 
                                    type="text" 
                                    name="valor_servico"
                                    value={valorServico}
                                    onChange={(e) => setValorServico(e.target.value)} 
                                />
                            </label>
                            
                            <label htmlFor="comissao">
                                <span>Comissão</span>
                                <input 
                                    type="text" 
                                    name="comissao_servico" 
                                    value={comissaoServico}
                                    onChange={(e) => setComissaoServico(e.target.value)}
                                />
                            </label>
                            
                            <label htmlFor="tempo_servico">
                                <span>Tempo de execução do Servico</span>
                                <input 
                                    type="time" 
                                    name="tempo_servico" 
                                    value={tempoServico}
                                    onChange={(e) => setTempoServico(e.target.value)} 
                                />
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
                                        <td>
                                            {funcoes.map((funcao: any) => (
                                                funcao.funcao_id === servico.funcao_id ? funcao.nome_funcao : ""
                                            ))}
                                        </td>
                                        <td>{servico.nome}</td>
                                        <td>{servico.valor}</td>
                                        <td>{servico.comissao}</td>
                                        <td>{servico.tempo_servico}</td>
                                        <td>
                                            <form method='post'>
                                                <input type='hidden' name='id' value='{$serv->servicos_id}' />
                                                <div className='material' id='excluir'>
                                                    {/* <span className='material-icons'>delete_forever</span> */}
                                                    <span className='material-icons'><MdDeleteForever /></span>
                                                    <button name='acao' value='excluir'>Excluir</button>
                                                </div>
                                                <div className='material'>
                                                    {/* <span className='material-icons carregar'>upgrade</span> */}
                                                    <span className='material-icons carregar'><MdUpdate /></span>
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