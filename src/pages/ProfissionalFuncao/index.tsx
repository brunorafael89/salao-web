import React, { FormEvent, useEffect, useState } from "react";
import api from "../../services/api";
import Header from "../../components/Header";
import MenuLateral from "../../components/MenuLateral";
import { FaTrashAlt } from "react-icons/fa";
import { GrUpgrade } from "react-icons/gr";
import { toast } from "react-toastify";
import "./styles.css";

function ProfissionalFuncaoPage(){
    const [profissionalFuncao, setProfissionalFuncao] = useState([]);
    const [profissionais, setProfissionais] = useState([]);
    const [funcoes, setFuncoes] = useState([]);

    useEffect(() => {
        getProfissional()
        getFuncao()
    }, [])

    async function getProfissional(){
        try {
            const response = await api.get("profissional"); 
            setProfissionais(response.data)
        } catch(err) {
            toast.error("Erro ao consultar os profissionais");
        }
    }

    async function getFuncao(){
        try{
            const response = await api.get("funcao");
            setFuncoes(response.data)
        } catch(err) {
            toast.error("Erro ao consultar as funções");
        }
    }

    async function cadastrar(e: FormEvent){
        e.preventDefault();
        try {
            const response = await api.post("profissionalFuncao");
            setProfissionalFuncao(response.data)
        } catch(err) {
            toast.error("Erro ao informar o profissional com a função.");
        }
    }

    return (
        <>
            <Header/>

            <MenuLateral/>
            <div className="profissional-funcao main-container">
                <div className="profissional-funcao cadastro-form">
                    <h1>Relação de Profissional - Função</h1>
                    <form className="form">
                        <label htmlFor="profissional">
                            <span>Profissional</span>
                            <select name="profissional_id">
                                <option>Selecione o Profissional</option>
                                {profissionais.map((profissional: any) => (
                                    <option value={profissional.profissional_id}>{profissional.nome}</option>
                                ))}
                            </select>
                        </label>

                        <label htmlFor="funcao">
                            <span>Função</span>
                            <select name="funcao_id">
                                <option>Selecione a função</option>
                                {funcoes.map((funcao: any) => (
                                    <option value={funcao.funcao_id}>{funcao.nome_funcao}</option>
                                ))}
                            </select>
                        </label>

                        <div className="buttons">
                            <button name="acao" value="cadastrar" onSubmit={cadastrar}>Cadastrar</button>
                            <button name="acao" value="alterar">Alterar</button>
                        </div>
                    </form>
                </div>
    
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>Profissional</th>
                                <th>Função</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {profissionalFuncao.map((profiFuncao: any) => (
                                <tr>
                                    <td>
                                        {profissionais.map((prof: any) => (
                                            profiFuncao.profissional_id === prof.profissional_id ? prof.nome : ""
                                        ))}
                                    </td>
                                    <td>
                                        {funcoes.map((funcao: any) => (
                                            profiFuncao.funcao_id === funcao.funcao_id ? funcao.nome_funcao : ""
                                        ))}
                                    </td>
                                    <td>
                                        <form>
                                            <div className='material excluir'>
                                                {/* <span className='material-icons'>delete_forever</span> */}
                                                <button name='acao' value='excluir'><FaTrashAlt/></button>
                                            </div>
                                            <div className='material carregar'>
                                                {/* <span className='material-icons carregar'>upgrade</span> */}
                                                <button name='acao' value='carregar'><GrUpgrade/></button>
                                            </div>
                                        </form>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ProfissionalFuncaoPage