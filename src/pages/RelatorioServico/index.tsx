import React from "react";
import Header from "../../components/Header";
import MenuLateral from "../../components/MenuLateral";
import {IoMdPrint} from "react-icons/io";
import {RiFileExcel2Line} from "react-icons/ri";

import "./styles.css";

function RelatorioServicoPage(){
    return (
        <>
            <Header />

            <MenuLateral />

                <div className="relatorio-servico main-container">
                    <h1>Relatorio de Serviços</h1>
                
                    <section className="info-select">
                        <div className="select-servico">
                            <label htmlFor="">
                                <span className="spn-titulo">Selecione o serviço</span>
                                <select name="" id="">
                                    <option value="">Selecione o serviço</option>
                                    <option value="">Corte Feminino</option>
                                    <option value="">Corte Masculino</option>
                                    <option value="">Corte Infantil</option>
                                    <option value="">Todos os serviços</option>
                                </select>
                            </label>
                        </div>
        
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
                                    <th>Hora</th>
                                    <th>Serviço</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Rogerio Almeida</td>
                                    <td>12/05/2021</td>
                                    <td>15:00</td>
                                    <td>Corte Feminino</td>
                                </tr>
                                <tr>
                                    <td>Rogerio Almeida</td>
                                    <td>12/05/2021</td>
                                    <td>16:30</td>
                                    <td>Corte Feminino</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="buttons-export">
                        <label htmlFor="">
                            <button className="buttons" type="submit">Imprimir</button>
                            <span className="material-icons"><IoMdPrint/></span>
                        </label>

                        <label htmlFor="">
                            <button className="buttons" type="submit">Exportar para Excel</button>
                            <span className="material-icons"><RiFileExcel2Line/></span>
                        </label>
                    </div>
                </div>
        </>
    )
}

export default RelatorioServicoPage;