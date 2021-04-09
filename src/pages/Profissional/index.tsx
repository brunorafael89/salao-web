import React from "react";
import Header from "../../components/Header";
import MenuLateral from "../../components/MenuLateral";
import { FiActivity } from "react-icons/fi";
import "./styles.css";



function ProfissionalPage(){
    return (
        <>
            <Header />
            <MenuLateral />
        <div className="main-container">
                <div className="profissional cadastro-form">
                    <h1>Cadastro de Profissional</h1>
                    <form className="form" action="post">
                        <label htmlFor="nome">
                            <span>Nome</span>
                            <input type="text" name="nome" placeholder="Entre com o nome completo"/>
                        </label>

                        <label htmlFor="data_nasc">
                            <span>Data Nascimento</span>
                            <input type="date" name="data_nasc" />
                        </label>

                        <label htmlFor="cpf">
                            <span>CPF</span>
                            <input type="text" name="cpf" placeholder="Apenas números"/>
                        </label>

                        <label htmlFor="telefone">
                            <span>Telefone</span>
                            <input type="text" name="telefone" placeholder="Apenas números"/>
                        </label>

                        <label htmlFor="email">
                            <span>Email</span>
                            <input type="email" name="email" placeholder="example@mail.com"/>
                        </label>

                        <label htmlFor="senha">
                            <span>Senha</span>
                            <input type="password" name="senha"/>
                        </label>

                        <div className="buttons">
                            <button name="acao" value="cadastrar">Cadastrar</button>
                            <button name="acao" value="alterar">Alterar</button>
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
                            <tr>
                                <td>Creuza Barneta</td>
                                <td>15/06/1925</td>
                                <td>12312312312</td>
                                <td>964522585</td>
                                <td>creuzinha@mail.com</td>
                                <td>
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
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    </>
    )
}

export default ProfissionalPage