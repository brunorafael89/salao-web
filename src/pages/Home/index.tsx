import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import MenuLateral from "../../components/MenuLateral";
import api from "../../services/api";

import "./styles.css";

function Home() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    getClientes(); 
  }, [])

  async function getClientes(){
    const response = await api.get("cliente");
    setClientes(response.data);
  }

  return (
    <>
      <Header />
      <MenuLateral />
      
      <div className="container">
        {clientes.map((cliente: any) => (
          <div className="content">
            <h1>{cliente.nome}</h1>
            <h1>{cliente.cpf}</h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
