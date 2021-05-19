import React, { FormEvent, useEffect, useState } from "react";
import api from "../../services/api";
import Header from "../../components/Header";
import MenuLateral from "../../components/MenuLateral";
import { FaTrashAlt } from "react-icons/fa";
import { GrUpgrade } from "react-icons/gr";
import { toast } from "react-toastify";
import "./styles.css";

function ProfissionalFuncaoPage(){
    const [profissionais, setProfissionais] = useState([]);
    const [funcoes, setFuncoes] = useState([]);
    const [idFuncao, setIdFuncao] = useState("");
    const [idProfissional, setIdProfissional] = useState("")
    const [profissionaisFuncoes, setProfissionaisFuncoes] = useState([]);
    
    //Alterar depois
    const [idFuncaoOld, setIdFuncaoOld] = useState("");
    const [idProfissionalOld, setIdProfissionalOld] = useState("")

    useEffect(() => {
        getProfissional()
        getFuncao()
        getProfissionalFuncao()
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

    async function getProfissionalFuncao(){
        try{
            const response = await api.get("profissionalFuncao");
            setProfissionaisFuncoes(response.data)
        } catch(err) {
            toast.error("Erro ao consultar as funções");
        }
    }

    async function salvar(e: FormEvent){
        e.preventDefault();
        cadastrar();    
    }

    async function cadastrar(){
        try {
            await api.post("profissionalFuncao", {
                funcao_id: idFuncao,
                profissional_id: idProfissional
            });
            limpar();
            getProfissional();
            getFuncao();
            getProfissionalFuncao();

            toast.success("Função para profissional cadastrado com sucesso!");

        } catch(err) {
            toast.error("Função para profissional já existe!");
        }
    }

    async function alterar(){
        try {
            await api.put(`profissionalFuncao/${idProfissionalOld}/${idFuncaoOld}`, {
                funcao_id: idFuncao,
                profissional_id: idProfissional
            });
            limpar()

            toast.success("Função do profissional alterada com sucesso!");

            getProfissional();
            getFuncao();
            getProfissionalFuncao();
        } catch(err) {
            toast.error("Erro ao alterar a função do profissional.");
        }
    }

    async function limpar() {
        setIdFuncao("");
        setIdProfissional("");
    }

    async function excluir(profissional_id:number, funcao_id:number){
        try{
            await api.delete(`profissionalFuncao/${profissional_id}/${funcao_id}`)
            getProfissionalFuncao();
            toast.success("Função do profissional Excluído com sucesso");
        } catch(err){
            toast.error("Erro ao excluir função do profissional!");
        }
    }

    async function carregar(profiFuncao:any){
        setIdFuncao(profiFuncao.funcao_id)
        setIdProfissional(profiFuncao.profissional_id)
        setIdFuncaoOld(profiFuncao.funcao_id)
        setIdProfissionalOld(profiFuncao.profissional_id)
    }

    return (
        <>
            <Header/>

            <MenuLateral/>
            <div className="profissional-funcao main-container">
                <div className="profissional-funcao cadastro-form">
                    <h1>Relação de Profissional - Função</h1>
                    <form className="form" onSubmit={salvar}>
                        <label htmlFor="profissional">
                            <span>Profissional</span>
                            <select name="profissional_id"  onChange={(e)=> setIdProfissional(e.target.value)}>
                                <option>Selecione o Profissional</option>
                                {profissionais.map((profissional: any) => (
                                    <option value={profissional.profissional_id} selected={idProfissional && idProfissional == profissional.profissional_id ? true : false}>{profissional.nome}</option>
                                ))}
                            </select>
                        </label>

                        <label htmlFor="funcao">
                            <span>Função</span>
                            <select name="funcao_id"  onChange={(e)=> setIdFuncao(e.target.value)}>
                                <option>Selecione a função</option>
                                {funcoes.map((funcao: any) => (
                                    <option value={funcao.funcao_id} selected={idFuncao && idFuncao == funcao.funcao_id ? true : false}>{funcao.nome_funcao}</option>
                                ))}
                            </select>
                        </label>

                        <div className="buttons">
                            <button name="acao" value="cadastrar" type="submit">Cadastrar</button>
                            <button name="acao" value="alterar" type="button" onClick={() => alterar()}>Alterar</button>
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
                            {profissionaisFuncoes.map((profiFuncao: any) => (
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
                                        {/* <form> */}
                                        <input type='hidden' name='id' value='{$serv->profissional_id}' />
                                            <div className='material' id ='excluir'>
                                                {/* <span className='material-icons'>delete_forever</span> */}
                                                <button name='acao' value='excluir'onClick={() => excluir(profiFuncao.profissional_id, profiFuncao.funcao_id)}><FaTrashAlt/>
                                                </button>
                                            </div>
                                            <div className='material carregar'>
                                                {/* <span className='material-icons carregar'>upgrade</span> */}
                                                <button name='acao' value='carregar' onClick={() => carregar(profiFuncao)}><GrUpgrade/></button>
                                            </div>
                                        {/* </form> */}
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