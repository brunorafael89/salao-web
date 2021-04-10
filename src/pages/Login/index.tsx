import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

import { toast } from "react-toastify";

import logo from "../../assets/images/logo.png";

import "./styles.css";
import { setToken } from "../../services/auth";

function LoginPage() {
  const history = useHistory();
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  async function logar(e: FormEvent) {
    e.preventDefault();

    try {   
      const response = await api.post("login", {
        login,
        senha,
      });
      
      setToken(response.data);
      
      history.push("/home");
    } catch (error) {
      toast.error("Login ou senha inválidos");
    }
  }

  return (
    <div className="container-login">

        <div className="login-img"> 
            <img src={logo} alt="logo"/>
        </div>

        <div className="container-conteudo">
          <form onSubmit={logar} className="login-form"> 
            
                <span>Faça seu login</span>
                
                <div className="form">
                    <input 
                      type="text" 
                      name="login" 
                      placeholder="E-mail"
                      value={login}
                      onChange={(e) => setLogin(e.target.value)}
                    />
                    <input 
                      type="password" 
                      name="senha" 
                      placeholder="Senha"
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                    />
                    <button name="acao" value="entrar" type="submit"> Entrar </button>
                </div>

                <div className="linha"></div>

                <div className="login-opcoes">
                    <a href="/"> Esqueceu sua senha?</a>
                    <a href="Cadastro/"> Ainda não tem cadastro? <strong>Cadastre-se!</strong></a>
                </div>
            </form>
        </div>
    </div>    
  );
}

export default LoginPage;
