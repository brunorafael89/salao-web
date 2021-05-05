import React, { FormEvent, useEffect, useState } from "react";
import Header from "../../components/Header";
import MenuLateral from "../../components/MenuLateral";

import { toast } from "react-toastify";
import {FaTrashAlt} from "react-icons/fa";
import { AiOutlineUpload } from "react-icons/ai";
import "./styles.css";
import api from "../../services/api";

function ClientePage(){
    const [clientes, setClientes] = useState([]);
    const [nomeCliente, setNomeCliente] = useState("");
    const [cpfCliente, setCpfCliente] = useState("");
    const [dataNascCliente, setDataNascCliente] = useState("");
    const [telefoneCliente, setTelefoneCliente] = useState("");
    const [sexoCliente, setSexoCliente] = useState("");
    const SexoList = [
        { id: 'F', name: 'Feminino' },
        { id: 'M', name: 'Masculino' },
    ];
    const [emailCliente, setEmailCliente] = useState("");
    const [senhaCliente, setSenhaCliente] = useState("");

    useEffect(()=>{
        getCliente()
    }, [])

    async function getCliente(){
        const response = await api.get("cliente")
        setClientes(response.data);
    }

    async function cadastrar(e: FormEvent){
        e.preventDefault();
        
        try{
            await api.post("cliente", {
                nome: nomeCliente,
                cpf: cpfCliente,
                data_nasc: dataNascCliente,
                telefone: telefoneCliente,
                sexo: sexoCliente,
                email: emailCliente,
                senha: senhaCliente
            })
        } catch (err){
            toast.error("Falha ao cadastrar cliente")
        }
    }

    async function excluir(id: number){
        await api.delete(`cliente/${id}`)
        getCliente()
        toast.success("Cliente excluído com sucesso")
    }

    return (
        <>
            <Header/>

            <MenuLateral/>
            <div className="cad-cliente main-container">
                <div className="cad-cliente cadastro-form">
                    <h1>Cadastro de Clientes</h1>
        
                    <form className="form" onSubmit={cadastrar}>
                        <label htmlFor="nome">
                            <span>Nome</span>
                            <input 
                                type="text" 
                                name="nome" 
                                value={nomeCliente}
                                onChange={(e)=>setNomeCliente(e.target.value)}
                            />
                        </label>
    
                        <label htmlFor="cpf">
                            <span>CPF</span>
                            <input 
                                type="text" 
                                name="cpf" 
                                value={cpfCliente}
                                onChange={(e) => setCpfCliente(e.target.value)} 
                            />
                        </label>
    
                        <label htmlFor="data_nasc">
                            <span>Data Nascimento</span>
                            <input 
                                type="date" 
                                name="data_nasc" 
                                value={dataNascCliente}
                                onChange={(e) => setDataNascCliente(e.target.value)} 
                            />
                        </label>

                        <label htmlFor="telefone">
                            <span>Telefone</span>
                            <input 
                                type="text" 
                                name="telefone" 
                                value={telefoneCliente}
                                onChange={(e) => setTelefoneCliente(e.target.value)}
                            />
                        </label>

                        <label>
                            <span>Sexo:</span>
                            <select id="sexo" value={sexoCliente} onChange={(e) => setSexoCliente(e.target.value)}>
                                {SexoList.map((item) => (
                                    <option value={item.id}>{item.name}</option>
                                ))}
                            </select>
                        </label>

                        <label htmlFor="email">
                            <span>Email</span>
                            <input 
                                type="email" 
                                name="email" 
                                value={emailCliente}
                                onChange={(e) => setEmailCliente(e.target.value)}
                            />
                        </label>
    
                        <label htmlFor="senha">
                            <span>Senha</span>
                            <input 
                                type="password" 
                                name="senha"
                                value={senhaCliente}
                                onChange={(e) => setSenhaCliente(e.target.value)}
                            />
                        </label>

                        <div className="buttons">
                            <button className="form-btn" id="cadastrar" type="submit">Cadastrar</button>
                            <button className="form-btn" id="editar" type="submit">Editar</button>
                        </div>
                    </form>
                </div>
        
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Data_Nascimento</th>
                                <th>CPF</th>
                                <th>Telefone</th>
                                <th>Email</th>
                                <th>Sexo</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map((cliente: any) => (
                                <tr>
                                    <td>{cliente.nome}</td>
                                    <td>{cliente.data_nasc}</td>
                                    <td>{cliente.cpf}</td>
                                    <td>{cliente.telefone}</td>
                                    <td>{cliente.email}</td>
                                    <td>{cliente.sexo}</td>
                                    <td>
                                        <form>
                                            <div className='material excluir'>
                                                <button type="submit" onClick={() => excluir(cliente.cliente_id)}>
                                                    <span className='material-icons'><FaTrashAlt/></span>
                                                </button>
                                            </div>
                                            <div className='material carregar'>
                                                <button value='carregar'>
                                                    <span className='material-icons carregar'><AiOutlineUpload/></span>
                                                </button>
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

export default ClientePage