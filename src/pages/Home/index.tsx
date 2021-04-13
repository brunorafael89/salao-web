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
      
      <main>
        <MenuLateral />

        <div className="main-container">
                <h1>Escolha uma opção do menu ao lado!</h1>
            </div>
      </main>
    </>
  );
}

export default Home;
