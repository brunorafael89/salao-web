import React, { useState, useEffect, FormEvent } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import Header from "../../components/Header";
import MenuLateral from "../../components/MenuLateral";
import { toast } from "react-toastify";
import format from "date-fns/format"
import { getUser, logout } from "../../services/auth";

import "./styles.css";

function PerfilPage(){
    const [idCliente, setIdClientes] = useState("")
    const [nomeCliente, setNomeClientes] = useState("")
    const [cpfCliente, setCpfClientes] = useState("")
    const [dataNascCliente, setDataNascClientes] = useState(format(new Date(), "dd-MMs-yyyy"))
    const [telefoneCliente, setTelefoneClientes] = useState("")
    const [sexoCliente, setSexoClientes] = useState("")
    const SexoList = [
        { id: 'F', name: 'Feminino' },
        { id: 'M', name: 'Masculino' },
    ];
    const [emailCliente, setEmailClientes] = useState("")
    const [senhaCliente, setSenhaClientes] = useState("")

    const user = getUser()
    const userID = user.clienteId

    const history = useHistory()

    useEffect( ()=>{
        getClientes()
    }, [] )

    async function getClientes(){
        try{
            const response = await api.get(`cliente/${userID}`);
            setIdClientes(response.data.cliente_id)
            setNomeClientes(response.data.nome)
            setCpfClientes(response.data.cpf)
            setDataNascClientes(response.data.data_nasc)
            setTelefoneClientes(response.data.telefone)
            setSexoClientes(response.data.sexo)
            setEmailClientes(response.data.email)
            setSenhaClientes(response.data.senha)
        } catch(err){
            toast.error("Erro ao consultar clientes")
        }
    }
    
    async function editar(e: FormEvent){
        e.preventDefault() 
        await api.put(`cliente/${idCliente}`, {
            nome: nomeCliente,
            cpf: cpfCliente,
            data_nasc: dataNascCliente,
            telefone: telefoneCliente,
            sexo: sexoCliente,
            email: emailCliente,
            senha: senhaCliente
        })

        toast.success('Cliente editado com sucesso')

        getClientes();
    }

    async function desativar(idCliente: number){
        try{
            await api.get(`cliente/desativar/${idCliente}`);
    
            toast.success('Sua conta foi desativada em nossa base');
            
            logout();

            history.push('/');
        } catch(err){
            toast.error('Erro ao desativar a conta')
        }
    }

    return (
        <>
            <Header/>

            <main>
                <MenuLateral/>
                
                <div className="area-cliente main-container">
                    <div className="area-cliente cadastro-form">
                        <h1>Meu Perfil</h1>

                        <form className="form" onSubmit={editar}>
                            <label htmlFor="nome">
                                <span>Nome</span>
                                <input 
                                    type="text" 
                                    name="nome" 
                                    value={ nomeCliente }
                                    onChange={ (e) => setNomeClientes(e.target.value) }
                                />
                            </label>

                            <label htmlFor="cpf">
                                <span>CPF</span>
                                <input 
                                    type="text" 
                                    name="cpf" 
                                    value={ cpfCliente }
                                    readOnly
                                />
                            </label>

                            <label htmlFor="data_nasc">
                                <span>Data Nascimento</span>
                                <input 
                                    type="date" 
                                    name="data_nasc" 
                                    // value={format(new Date(dataNascCliente), "yyyy-mm-dd")}
                                    onChange={ (e) => setDataNascClientes(e.target.value) }
                                />
                            </label>

                            <label htmlFor="telefone">
                                <span>Telefone</span>
                                <input 
                                    type="text" 
                                    name="telefone" 
                                    value={ telefoneCliente }
                                    onChange={ (e) => setTelefoneClientes(e.target.value) }
                                />
                            </label>

                            <label htmlFor="sexo">
                                <span>Sexo:</span>
                                    <select id="sexo" value={sexoCliente} onChange={(e) => setSexoClientes(e.target.value)}>
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
                                    onChange={ (e) => setEmailClientes(e.target.value) }
                                />
                            </label>

                            <label htmlFor="senha">
                                <span>Senha</span>
                                <input 
                                    type="password" 
                                    name="senha" 
                                    value={senhaCliente} 
                                    onChange={ (e)=> setSenhaClientes(e.target.value) }
                                />
                            </label>

                            <div className="buttons">
                                <button className="form-btn" type="submit">Editar</button>
                                <button className="form-btn" onClick={() => desativar(userID)}>Desativar Cadastro</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}

export default PerfilPage