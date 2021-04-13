import React, { FormEvent, useEffect, useState } from "react";
import Header from "../../components/Header";
import MenuLateral from "../../components/MenuLateral";
import api from "../../services/api";
import { toast } from "react-toastify";

import "./styles.css";
import "../../components/Table/styles.css";

function ProfissionalPage(){
    const [profissionais, setProfissionais] = useState([])
    const [nomeProfissional, setNomeProfissional] = useState("")
    const [dataNascProfissional, setDataNascProfissional] = useState("")
    const [cpfProfissional, setCpfProfissional] = useState("")
    const [telefoneProfissional, setTelefoneProfissional] = useState("")
    const [emailProfissional, setEmailProfissional] = useState("")
    const [senhaProfissional, setSenhaProfissional] = useState("")

    useEffect( () => {
        getProfissional()
    }, [] )

    async function getProfissional(){
        const response = await api.get("profissional");
        setProfissionais(response.data);
    }

    async function cadastrar(e: FormEvent){
        e.preventDefault();

        try{
            await api.post("profissional", {nome: nomeProfissional});
            setNomeProfissional("");

            await api.post("profissional", {data_nasc: dataNascProfissional});
            setDataNascProfissional("");

            await api.post("profissional", {cpf: cpfProfissional});
            setCpfProfissional("");

            await api.post("profissional", {telefone: telefoneProfissional});
            setTelefoneProfissional("");

            await api.post("profissional", {email: emailProfissional});
            setEmailProfissional("");

            await api.post("profissional", {senha: senhaProfissional});
            setSenhaProfissional("");

            getProfissional();
        } catch(err) {
            toast.error("Erro ao cadastrar o profissional");
        }
    }

    async function excluir(id: number){
        await api.delete(`profissional/${id}`);
        getProfissional();
        toast.success("Profissional Excluído com sucesso");
    }

    //Função responsável por preencher o formulário com os dados da tabela
    async function carregar(id: number){
        
    }

    return (
        <>
            <Header />
            <MenuLateral />

            <div className="profissional main-container">
                <div className="profissional cadastro-form">
                    <h1>Cadastro de Profissional</h1>
                    <form className="form" onSubmit={cadastrar}>
                        <label htmlFor="nome">
                            <span>Nome</span>
                            <input 
                                type="text" 
                                name="nome"
                                value={nomeProfissional} 
                                onChange={ (e) => setNomeProfissional(e.target.value) }
                                placeholder="Entre com o nome completo"
                            />
                        </label>

                        <label htmlFor="data_nasc">
                            <span>Data Nascimento</span>
                            <input 
                                type="date" 
                                name="data_nasc" 
                                value={dataNascProfissional} 
                                onChange={ (e) => setDataNascProfissional(e.target.value) }
                            />
                        </label>

                        <label htmlFor="cpf">
                            <span>CPF</span>
                            <input type="text" 
                                name="cpf" 
                                value={cpfProfissional} 
                                onChange={ (e) => setCpfProfissional(e.target.value) }
                                placeholder="Apenas números"/>
                        </label>

                        <label htmlFor="telefone">
                            <span>Telefone</span>
                            <input 
                                type="text" 
                                name="telefone" 
                                value={telefoneProfissional} 
                                onChange={ (e) => setTelefoneProfissional(e.target.value) }
                                placeholder="Apenas números"/>
                        </label>

                        <label htmlFor="email">
                            <span>Email</span>
                            <input 
                                type="email" 
                                name="email" 
                                value={emailProfissional} 
                                onChange={ (e) => setEmailProfissional(e.target.value) }
                                placeholder="example@mail.com"/>
                        </label>

                        <label htmlFor="senha">
                            <span>Senha</span>
                            <input 
                                type="password" 
                                name="senha"
                                value={senhaProfissional} 
                                onChange={ (e) => setSenhaProfissional(e.target.value) }
                            />
                        </label>

                        <div className="buttons">
                            <button name="acao" value="cadastrar" type="submit">Cadastrar</button>
                            <button name="acao" value="alterar" type="submit">Alterar</button>
                        </div>
                    </form>
                </div>

                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Data de Nascimento</th>
                                <th>CPF</th>
                                <th>Telefone</th>
                                <th>Email</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            { profissionais.map((profissional: any) => (
                                <tr>
                                    <td>{profissional.nome}</td>
                                    <td>{profissional.data_nasc}</td>
                                    <td>{profissional.cpf}</td>
                                    <td>{profissional.telefone}</td>
                                    <td>{profissional.email}</td>
                                    <td>
                                        <div className='material excluir'>
                                            <button name='acao' value='excluir' onClick={() => excluir(profissional.profissional_id)}>Excluir</button>
                                        </div>
                                        <div className='material carregar'>
                                            <button name='acao' value='carregar' onClick={() => carregar(profissional.profissional_id)}>Carregar</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                {/* 
                                    <form method='post'>
                                        <div className='material excluir'>
                                            <span className='material-icons'>delete_forever</span>
                                            <button name='acao' value='excluir'>Excluir</button>
                                        </div>
                                        <div className='material carregar'>
                                            <span className='material-icons carregar'>upgrade</span>
                                            <button name='acao' value='carregar'>Carregar</button>
                                        </div>
                                    </form>
                                </td> */}

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ProfissionalPage