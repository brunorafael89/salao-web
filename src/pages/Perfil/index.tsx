import React from "react";
import api from "../../services/api";
import Header from "../../components/Header";
import MenuLateral from "../../components/MenuLateral";

// importação de teste de imagem de perfil
import profile from '../../assets/images/logo.png';

import "./styles.css";

function PerfilPage(){
    async function alterar(){
        await api.put('cliente', {

        })
    }

    return (
        <>
            <Header/>

            <main>
                <MenuLateral/>
                
                <div className="area-cliente main-container">
                    <div className="area-cliente cadastro-form">
                        <h1>Meu Perfil</h1>
            
                        <form className="form" onSubmit={alterar}>
                            <label htmlFor="nome">
                                <span>Nome</span>
                                <input type="text" name="nome" value="Camila Moreira" />
                            </label>

                            <label htmlFor="cpf">
                                <span>CPF</span>
                                <input type="text" name="cpf" value="123.456.789.01"  />
                            </label>

                            <label htmlFor="data_nasc">
                                <span>Data Nascimento</span>
                                <input type="text" name="data_nasc" value="06/04/1989" />
                            </label>

                            <label htmlFor="telefone">
                                <span>Telefone</span>
                                <input type="text" name="telefone" value="(21)33314917"/>
                            </label>

                            <label htmlFor="sexo">
                                <span>Sexo:</span>
                                <select name="" id="sexo">
                                    <option value="F" selected>Feminino</option>
                                    <option value="M" >Masculino</option>
                                </select>
                            </label>

                            <label htmlFor="email">
                                <span>Email</span>
                                <input type="email" name="email" value="camila@gmail.com" />
                            </label>
                            
                            <label htmlFor="senha">
                                <span>Senha</span>
                                <input type="password" name="senha" value="*****" />
                            </label>
        
                            <label htmlFor="mudarSenha">
                                <span>Digite nova senha</span>
                                <input type="password" name="mudsenha" value="" />
                            </label>          

                            <div className="buttons">
                                <button className="form-btn" id="editar" name="acao" value="editar">Editar</button>
                                <button className="form-btn" id="desativar" name="acao" value="desativar">Desativar Cadastro</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}

export default PerfilPage