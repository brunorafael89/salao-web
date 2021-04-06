import React, { useEffect, useState } from "react";
import api from "../../services/api";

import "./styles.css";

function Home() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    api.get("cliente").then((clientes) => {
      setClientes(clientes.data);
    });
  }, []);

  return (
    <div>
      {clientes.map((cliente: any) => (
        <div>
          <h1>{cliente.nome}</h1>
          <h1>{cliente.cpf}</h1>
        </div>
      ))}
    </div>
  );
}

export default Home;
