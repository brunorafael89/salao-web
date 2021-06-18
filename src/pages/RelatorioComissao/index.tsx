import React, { FormEvent, useEffect, useState } from "react";
import format from "date-fns/format";
import Header from "../../components/Header";
import MenuLateral from "../../components/MenuLateral";
import { toast } from "react-toastify";
import api from "../../services/api";
import {IoMdPrint} from "react-icons/io";
import {RiFileExcel2Line} from "react-icons/ri";

import { CSVLink } from "react-csv";

import "./styles.css";

function  RelatorioComissaoPage(){
    const [relatorioComissoes, setRelatorioComissao] = useState([]);
    const [agendamentos, setAgendamentos] = useState([]);
    const [servicos, setServicos] = useState([]);
    const [IdServicos, setIdServicos] = useState("");
    const [profissionais, setProfissionais] = useState([]);
    const [idProfissional, setIdProfissional] = useState('');

    useEffect(() => {
        getAgendamentos() 
        getProfissional()
        getServicos()
    }, [])

    async function getAgendamentos(){
        try {
            const response = await api.get("agendamento"); 
            setAgendamentos(response.data)
        } catch(err) {
            toast.error("Erro ao consultar a agenda");
        }
    } 

    async function getServicos(){
        try {
            const response = await api.get("servicos"); 
            setServicos(response.data)
        } catch(err) {
            toast.error("Erro ao consultar os serviços");
        }
    }   

    async function getProfissional(){
        const response = await api.get("profissional");
        setProfissionais(response.data);
    }

    async function geraRelatorio(e: FormEvent){
        e.preventDefault();
        const response = await api.get("relatorio/comissao");
        setRelatorioComissao(response.data)
    }


    // Deixei estes dados como exemplo para saber se o botão de exportar está funcionando
    // é necessário trazer as informações do banco de dados
    const csvData = [
        ["Nome", "Função", "CPF"],
        ["Carlos Augusto", "Cabeleireiro", "123123123"],
        ["Carlos Afonso", "Pedicure", "123123124"]
    ]

    return (
        <>
            <Header/>

            <main>
                <MenuLateral/>

                <div className="relatorio-comissao main-container">
                    <h1>Relatorio de Comissão</h1>
                    <section className="info-select">
                        <div className="select-profissional">
                            <label htmlFor="">
                                <span className="spn-titulo">Selecione o profissional</span>
                                <select name="comissao" id="" onChange={(e) => setIdProfissional(e.target.value)}>
                                    <option value="">Selecione o profissional</option>
                                            {profissionais.map((profissional: any) => (
                                                <option value={profissional.profissional_id}>{profissional.nome}</option>
                                            ))}
                                </select>
                            </label>
                        </div>
        
                        <div className="select-data">
                            <span className="spn-titulo">Selecione o período</span>
                            <form onSubmit={geraRelatorio}>
                                <label htmlFor="">
                                    <span>De:</span>
                                    <input 
                                        type="date" />
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
                                    {relatorioComissoes.map((relatorioComissao: any) => (
                                        <tr>
                                            <td>{relatorioComissao.nome}</td>
                                            <td>{format(new Date(relatorioComissao.data), "dd/MM/yyyy")}</td>
                                            <td>{relatorioComissao.nome_servico}</td>
                                            <td>{relatorioComissao.valor}</td>
                                            <td>{relatorioComissao.comissao}</td>
                                            <td>{relatorioComissao.valor_comissao}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    <div className="buttons-export">
                        <label htmlFor="">
                            <button className="buttons" type="submit">Imprimir</button>
                            <span className="material-icons"><IoMdPrint/></span>
                        </label>

                        <label htmlFor="">
                            {/* {relatorioComissoes.map((relatorioComissao: any) => ( */}
                                <CSVLink
                                    className="buttons"
                                    data={csvData}
                                    filename={`relatorioComissao.csv`}
                                    separator=";"
                                    // filename={`relatorioComissao${relatorioComissao.nome}.csv`}
                                >
                                    Exportar para Excel
                                </CSVLink>
                            {/* ))} */}
                            <span className="material-icons"><RiFileExcel2Line/></span>
                        </label>
                    </div>
                </div>
            </main>
        </>
    )
}

export default RelatorioComissaoPage