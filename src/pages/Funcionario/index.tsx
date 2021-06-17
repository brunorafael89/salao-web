import React, { FormEvent, useEffect, useState } from "react";
import Header from "../../components/Header";
import MenuLateral from "../../components/MenuLateral";
import api from "../../services/api";
import { toast } from "react-toastify";
import { AiOutlineUpload } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

import "./styles.css";
import "../../components/Table/styles.css";

import format from "date-fns/format";
import ValidarCPF from "../../components/ValidarCPF";

function FuncionarioPage(){
    const [funcionarios, setFuncionarios] = useState([])
    const [idFuncionario, setIdFuncionario] = useState("")
    const [nomeFuncionario, setNomeFuncionario] = useState("")
    const [cargoFuncionario, setCargoFuncionario] = useState("")
    const [dataNascFuncionario, setDataNascFuncionario] = useState(format(new Date(), "yyyy-MM-dd"))
    const [cpfFuncionario, setCpfFuncionario] = useState("")
    const [telefoneFuncionario, setTelefoneFuncionario] = useState("")
    const [emailFuncionario, setEmailFuncionario] = useState("")
    const [senhaFuncionario, setSenhaFuncionario] = useState("")

    useEffect( () => {
        getFuncionario()
    }, [] )

    async function getFuncionario(){
        const response = await api.get("funcionario");
        setFuncionarios(response.data);
    }

    async function salvar(e: FormEvent){
        e.preventDefault();

        if (idFuncionario){
            alterar();
        }
        else {
            cadastrar();
        }
    }

    async function cadastrar(){
        const validaCPF = ValidarCPF(cpfFuncionario)

        if( validaCPF === true ){
            try{
                await api.post("funcionario", {
                    nome: nomeFuncionario,
                    cargo: cargoFuncionario,
                    data_nasc: dataNascFuncionario,
                    cpf: cpfFuncionario,
                    telefone: telefoneFuncionario,
                    email: emailFuncionario,
                    senha: senhaFuncionario
                });
                limpar()
    
                toast.success("Funcionario cadastrado com sucesso!");
    
                getFuncionario();
    
                toast.success("Funcionario cadastrado com sucesso");
            } catch(err) {
                toast.error("Erro ao cadastrar o funcionario");
            }
        } else {
            toast.error("CPF inválido");
        }
    }

    async function excluir(id:number){
        try{
            await api.delete(`funcionario/${id}`)
            getFuncionario();
            toast.success("Funcionario Excluído com sucesso");
        } catch(err){
            toast.error("Funcionario não pode ser exluído");
        }
    }

    //Função responsável por preencher o formulário com os dados da tabela
    async function carregar(funcionario:any){
        setNomeFuncionario(funcionario.nome);
        setCargoFuncionario(funcionario.cargo);
        setDataNascFuncionario(funcionario.data_nasc);
        setCpfFuncionario(funcionario.cpf);
        setTelefoneFuncionario(funcionario.telefone);
        setEmailFuncionario(funcionario.email);
        setSenhaFuncionario(funcionario.senha);
        setIdFuncionario(funcionario.funcionario_id);
    }

    async function limpar() {
        setNomeFuncionario("");
        setCargoFuncionario("");
        setDataNascFuncionario(format(new Date(), "yyyy/MM/dd"));
        setCpfFuncionario("");
        setTelefoneFuncionario("");
        setEmailFuncionario("");
        setSenhaFuncionario("");
        setIdFuncionario("");
    }

    async function alterar(){
        try{
            await api.put(`funcionario/${idFuncionario}`, {
                nome: nomeFuncionario,
                cargo: cargoFuncionario,
                data_nasc: dataNascFuncionario,
                cpf: cpfFuncionario,
                telefone: telefoneFuncionario,
                email: emailFuncionario,
                senha: senhaFuncionario
            });
            limpar()

            toast.success("Funcionario alterado com sucesso!");
    
            getFuncionario();
        } catch(err){
            toast.error("Erro ao alterar funcionario!");
        }
    }

    return (
        <>
            <Header />

            <main>
                <MenuLateral />

                <div className="funcionario main-container">
                    <div className="funcionario cadastro-form">
                        <h1>Cadastro de Funcionarios</h1>
                        <form className="form" onSubmit={salvar}>
                            <label htmlFor="nome">
                                <span>Nome</span>
                                <input 
                                    type="text" 
                                    name="nome"
                                    value={nomeFuncionario} 
                                    onChange={ (e) => setNomeFuncionario(e.target.value) }
                                    placeholder="Entre com o nome completo"
                                />
                            </label>

                            <label htmlFor="cargo">
                                <span>Cargo</span>
                                <input 
                                    type="text" 
                                    name="cargo" 
                                    value={cargoFuncionario} 
                                    onChange={ (e) => setCargoFuncionario(e.target.value) }
                                    placeholder="Recepcionista ou Gerente"/>
                            </label>

                            <label htmlFor="data_nasc">
                                <span>Data Nascimento</span>
                                <input 
                                    type="date" 
                                    name="data_nasc"
                                    value={format(new Date(dataNascFuncionario), "yyyy-MM-dd")}
                                    onChange={(e) => setDataNascFuncionario(e.target.value)}
                                />
                            </label>

                            <label htmlFor="cpf">
                                <span>CPF</span>
                                <input type="text" 
                                    name="cpf" 
                                    value={cpfFuncionario} 
                                    onChange={ (e) => setCpfFuncionario(e.target.value) }
                                    placeholder="Apenas números"/>
                            </label>

                            <label htmlFor="telefone">
                                <span>Telefone</span>
                                <input 
                                    type="text" 
                                    name="telefone" 
                                    value={telefoneFuncionario} 
                                    onChange={ (e) => setTelefoneFuncionario(e.target.value) }
                                    placeholder="Apenas números"/>
                            </label>

                            <label htmlFor="email">
                                <span>Email</span>
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={emailFuncionario} 
                                    onChange={ (e) => setEmailFuncionario(e.target.value) }
                                    placeholder="example@mail.com"/>
                            </label>

                            <label htmlFor="senha">
                                <span>Senha</span>
                                <input 
                                    type="password" 
                                    name="senha"
                                    value={senhaFuncionario} 
                                    onChange={ (e) => setSenhaFuncionario(e.target.value) }
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
                                    <th>Cargo</th>
                                    <th>Data de Nascimento</th>
                                    <th>CPF</th>
                                    <th>Telefone</th>
                                    <th>Email</th>
                                    <th>Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                { funcionarios.map((funcionario: any) => (
                                    <tr>
                                        <td>{funcionario.nome}</td>
                                        <td>{funcionario.cargo}</td>
                                        <td>{format(new Date(funcionario.data_nasc), "dd/MM/yyyy")}</td>
                                        <td>{funcionario.cpf}</td>
                                        <td>{funcionario.telefone}</td>
                                        <td>{funcionario.email}</td>
                                        <td>
                                            <div className="form">
                                                <div className='material excluir'>
                                                    <button name='acao' value='excluir' onClick={() => excluir(funcionario.funcionario_id)}>
                                                        <span className="material-icons"><MdDeleteForever/></span>
                                                    </button>
                                                </div>
                                                <div className='material carregar'>
                                                    <button name='acao' value='carregar' onClick={() => carregar(funcionario)}>
                                                        <span className='material-icons carregar'><AiOutlineUpload/></span>
                                                    </button>
                                                </div>
                                            </div>
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

export default FuncionarioPage