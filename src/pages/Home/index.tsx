import React from "react";
import Header from "../../components/Header";
import MenuLateral from "../../components/MenuLateral";

import "./styles.css";

function Home() {

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
