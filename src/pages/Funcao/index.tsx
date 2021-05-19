import React, { FormEvent, useEffect, useState } from "react";
import api from "../../services/api";
import Header from "../../components/Header/";
import MenuLateral from "../../components/MenuLateral/";
import { toast } from "react-toastify";
import "./styles.css";

import {FaTrashAlt} from "react-icons/fa";
import { AiOutlineUpload } from "react-icons/ai";


function FuncaoPage(){
    const [funcoes, setFuncoes] = useState([]);
    const [nomeFuncao, setNomeFuncao] = useState("");
    const [idFuncao, setIDFuncao] = useState("");

    useEffect(() => {
        getFuncao() 
    }, [])

    async function getFuncao(){
        const response = await api.get("funcao");
        setFuncoes(response.data);
    }

    async function salvar(e: FormEvent){
        e.preventDefault();

        if (idFuncao){
            alterar();
        }
        else {
            cadastrar();
        }
    }

    async function excluir(id: number){

        try{
            await api.delete(`funcao/${id}`);
            getFuncao();
            toast.success("Função excluida com sucesso!");
        } catch(err){
            toast.error("Erro ao excluir função!");
        }
    } 

    async function cadastrar(){
        
        try {
            await api.post( "funcao", { nome_funcao: nomeFuncao });
            setNomeFuncao("");
            getFuncao();
        } catch(err) {
            toast.error("Erro ao cadastrar função!");
        }
    }

    async function carregar(funcao:any){
        setNomeFuncao(funcao.nome_funcao);
        setIDFuncao(funcao.funcao_id);
    }

    async function limpar(){
        setNomeFuncao("");
        setIDFuncao("");
    }

    async function alterar(){
        try{
            await api.put(`funcao/${idFuncao}`, {
                nome_funcao: nomeFuncao
            });
            limpar()

            toast.success("Função alterado com sucesso!");
    
            getFuncao();
        } catch(err){
            toast.error("Erro ao alterar função!");
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
                        <form className="form" onSubmit={salvar}>    
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
                                            {/* <form> */}
                                            <input type='hidden' name='id' value='{$serv->funcao_id}' />
                                                <div className='material excluir'>
                                                    <button name='acao' value='excluir' onClick={() => excluir(funcao.funcao_id)}>
                                                        <span className='material-icons'><FaTrashAlt/></span>
                                                    </button>
                                                </div>
                                                <div className='material carregar'>
                                                    <button name='acao' value='carregar' onClick={() => carregar(funcao)}>
                                                        <span className='material-icons carregar'><AiOutlineUpload/></span>
                                                    </button>
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