import React, { FormEvent, useEffect, useState } from "react";
import api from "../../services/api";
import Header from "../../components/Header/";
import MenuLateral from "../../components/MenuLateral/";

import { toast } from "react-toastify";

import { FiActivity } from "react-icons/fi"

import "./styles.css";

function FuncaoPage(){
    const [funcoes, setFuncoes] = useState([]);
    const [nomeFuncao, setNomeFuncao] = useState("");

    useEffect(() => {
        getFuncao() 
    }, [])

    async function getFuncao(){
        const response = await api.get("funcao");
        setFuncoes(response.data);
    }

    async function excluir(id: number){
        await api.delete(`funcao/${id}`);
        getFuncao();
        toast.success("Função excluida com sucesso!");
    }

    async function cadastrar(e: FormEvent){
        e.preventDefault();

        try {
            await api.post("funcao", { nome_funcao: nomeFuncao });
            setNomeFuncao("");
            getFuncao();
        } catch(err) {
            toast.error("Erro ao cadastrar função!");
        }
    }

    return (
        <>
            <Header />
            
            <main>
                <MenuLateral />

                <div className="funcao main-container">
                    <div className="funcao cadastro-form">
                        <h1>Cadastro de Função</h1>
                        <form className="form" onSubmit={cadastrar}>    
                            <label htmlFor="funcao">
                                <span>Nome da função</span>
                                <input 
                                    type="text" 
                                    name="nome"
                                    value={nomeFuncao}
                                    onChange={(e) => setNomeFuncao(e.target.value)} 
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
                                    <th>Função</th>                                                            
                                    <th>Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {funcoes.map((funcao: any) => (
                                    <tr>
                                        <td>{funcao.nome_funcao}</td>
                                        <td>
                                            {/* <form method='post'> */}
                                                <div className='material excluir'>
                                                    {/* <span className='material-icons'>delete_forever</span> */}
                                                    <button name='acao' value='excluir' onClick={() => excluir(funcao.funcao_id)}> <FiActivity /> Excluir</button>
                                                </div>
                                                <div className='material carregar'>
                                                    <span className='material-icons carregar'>upgrade</span>
                                                    <button name='acao' value='carregar'>Carregar</button>
                                                </div>
                                            {/* </form> */}
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

export default FuncaoPage