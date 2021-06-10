import React, { FormEvent, useEffect, useState } from "react";
import Header from "../../components/Header";
import MenuLateral from "../../components/MenuLateral";
import api from "../../services/api";
import { toast } from "react-toastify";
import "./styles.css";

// importando os icones
import { AiOutlineUpload } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

import format from "date-fns/format";

function ClientePage(){
    const [clientes, setClientes] = useState([]);
    const [nomeCliente, setNomeCliente] = useState("");
    const [cpfCliente, setCpfCliente] = useState("");
    const [dataNascCliente, setDataNascCliente] = useState(format(new Date(), "dd/MM/yyyy"));
    const [telefoneCliente, setTelefoneCliente] = useState("");
    const [sexoCliente, setSexoCliente] = useState("");
    const SexoList = [
        { id: 'F', name: 'Feminino' },
        { id: 'M', name: 'Masculino' },
    ];
    const [emailCliente, setEmailCliente] = useState("");
    const [senhaCliente, setSenhaCliente] = useState("");
    const [idCliente, setIdCliente] = useState("");

    useEffect(()=>{
        getCliente()
    }, [])

    async function getCliente(){
        try {
            const response = await api.get("cliente");
            setClientes(response.data)
        } catch(err) {
            toast.error("Erro ao consultar cliente");
            }        
    }

    async function salvar(e: FormEvent){
        e.preventDefault();

        if (idCliente){
            editar();
        }
        else {
            cadastrar();
        }
    }

    async function cadastrar(){
        
        try{
            await api.post("cliente", {
                nome: nomeCliente,
                cpf: cpfCliente,
                data_nasc: dataNascCliente,
                telefone: telefoneCliente,
                sexo: sexoCliente,
                email: emailCliente,
                senha: senhaCliente
            });
            limpar()
            
            toast.success("Cliente cadastrado com sucesso!");

            getCliente();
        } catch (err){
            toast.error("Falha ao cadastrar cliente");
        }
    }

    async function editar(){
        try{
            await api.put(`cliente/${idCliente}`, {
                nome: nomeCliente,
                cpf: cpfCliente,
                data_nasc: dataNascCliente,
                telefone: telefoneCliente,
                sexo: sexoCliente,
                email: emailCliente,
                senha: senhaCliente
            });
            limpar()

            toast.success("Cliente alterado com sucesso!");
    
            getCliente();
        } catch(err){
            toast.error("Erro ao editar cliente!");
        }
    }

    async function excluir(id: number){
        try{
            await api.delete(`cliente/${id}`)
            getCliente();
            toast.success("Cliente excluído com sucesso!");
        } catch(err){
            toast.error("Erro ao excluir cliente!");
        }
    }

    async function carregar(cliente:any){
        setNomeCliente(cliente.nome);
        setCpfCliente(cliente.cpf);
        setDataNascCliente(cliente.data_nasc);
        setTelefoneCliente(cliente.telefone);
        setSexoCliente(cliente.sexo);
        setEmailCliente(cliente.email);
        setSenhaCliente(cliente.senha);
        setIdCliente(cliente.cliente_id);
    }

    async function limpar(){
        setNomeCliente("");
        setCpfCliente("");
        setDataNascCliente("");
        setTelefoneCliente("");
        setSexoCliente("");
        setEmailCliente("");
        setSenhaCliente("");
        setIdCliente("");
    }

    return (
        <>
            <Header/>

            <main>
                <MenuLateral/>
                
                <div className="cad-cliente main-container">
                    <div className="cad-cliente cadastro-form">
                        <h1>Cadastro de Clientes</h1>
            
                        <form className="form" onSubmit={salvar}>
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
                                    // value={format(new Date(dataNascCliente), "yyyy-mm-dd")}
                                    //value="2013-01-08"
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
                                <button name="acao" value="cadastrar" type="submit">Cadastrar</button>
                                <button name="acao" value="editar" type="submit">Alterar</button>
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
                                        <td>{format(new Date(cliente.data_nasc), "dd/MM/yyyy")}</td>
                                        <td>{cliente.cpf}</td>
                                        <td>{cliente.telefone}</td>
                                        <td>{cliente.email}</td>
                                        <td>{cliente.sexo}</td>
                                        <td>
                                            <div className="form">
                                                <div className='material excluir'>                                            
                                                    <button name="acao" value='excluir' onClick={() => excluir(cliente.cliente_id)}>
                                                        <span className='material-icons'><MdDeleteForever/></span>
                                                    </button>
                                                </div>
                                                <div className='material carregar'>
                                                    <button name="acao" value='carregar' onClick={() => carregar(cliente)}>
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

export default ClientePage