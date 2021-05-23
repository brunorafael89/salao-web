import React from "react";
import Header from "../../components/Header";
import MenuLateral from "../../components/MenuLateral";

import "./styles.css";

function ExemploPage(){
    return (
        <>
            <Header/>

            <MenuLateral/>
            <div className="relatorio-comissao main-container">
                <h1>Relatorio de Comissão</h1>
                <section className="info-select">
                    <div className="select-profissional">
                        <label htmlFor="">
                            <span className="spn-titulo">Selecione o profissional</span>
                            <select name="" id="">
                                <option value="">Selecione o profissional</option>
                                <option value="">Saulo Minutinho</option>
                                <option value="">Rogerio Almeida</option>
                                <option value="">Suellen Leite</option>
                            </select>
                        </label>
                    </div>
    
                    <div className="select-data">
                        <span className="spn-titulo">Selecione o período</span>
                        <form>
                            <label htmlFor="">
                                <span>De:</span>
                                <input type="date" />
                            </label>

                            <label htmlFor="">
                                <span>Até:</span>
                                <input type="date" />
                            </label>

                            <button className="buttons" type="submit">Gerar Relatório</button>
                        </form>
                    </div>
                </section>

                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                
                                <th>Profissional</th>
                                <th>Data</th>
                                <th>Serviço</th>
                                <th>Valor do Serviço</th>
                                <th>Comissão</th>
                                <th>Valor da comissão</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Suellen Leite</td>
                                <td>20/05/2021</td>
                                <td>Corte Longo</td>
                                <td>40,00</td>
                                <td>50%</td>
                                <td>20,00</td>
                            </tr>
                            <tr>
                                <td>Suellen Leite</td>
                                <td>20/05/2021</td>
                                <td>Corte Curto</td>
                                <td>20,00</td>
                                <td>50%</td>
                                <td>10,00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="buttons-export">
                    <label htmlFor="">
                        <button className="buttons" type="submit">Imprimir</button>
                        <span className="material-icons">file_present</span>
                    </label>

                    <label htmlFor="">
                        <button className="buttons" type="submit">Exportar para Excel</button>
                        <span><img src="/img/xlsx-file-format-extension.svg" alt="icone Excel" /></span>
                    </label>
                </div>
            </div>
        </>
    )
}

export default ExemploPage