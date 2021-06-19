import React, { FormEvent, useEffect, useState } from "react";
import format from "date-fns/format";
import Header from "../../components/Header";
import MenuLateral from "../../components/MenuLateral";
import { toast } from "react-toastify";
import api from "../../services/api";
import {RiFileExcel2Line} from "react-icons/ri";

import { CSVLink } from "react-csv";

import "./styles.css";

function RelatorioServicoPage(){
    const [relatorioServicos, setRelatorioServico] = useState([]);
    // const [agendamentos, setAgendamentos] = useState([]);
    const [servicos, setServicos] = useState([]);
    const [IdServicos, setIdServicos] = useState("");
    const [profissionais, setProfissionais] = useState([]);
    const [idProfissional, setIdProfissional] = useState('');
    const [dataFrom, setDataFrom] = useState(new Date());
    const [dataTo, setDataTo] = useState(new Date());

    useEffect(() => {
        // getAgendamentos() 
        getProfissional()
        getServicos()
    }, [])

    // async function getAgendamentos(){
    //     try {
    //         const response = await api.get("agendamento"); 
    //         setAgendamentos(response.data)
    //     } catch(err) {
    //         toast.error("Erro ao consultar a agenda");
    //     }
    // } 

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
        const dataFromFormatada = format(dataFrom, "yyyy-MM-dd");
        const dataToFormatada = format(dataTo, "yyyy-MM-dd");

        const response = await api.get(`relatorio/servico/${idProfissional}/${IdServicos}/${dataFromFormatada}/${dataToFormatada}`);

        setRelatorioServico(response.data)
    }

    const csvData = [
        ["Nome", "Função", "CPF"],
        ["Carlos Augusto", "Cabeleireiro", "123123123"],
        ["Carlos Afonso", "Pedicure", "123123124"]
    ]

    return (
        <>
            <Header />

            <main>
                <MenuLateral />
                
                <div className="relatorio-servico main-container">
                    <h1>Relatorio de Serviços</h1>
                
                    <section className="info-select">
                        <form onSubmit={geraRelatorio}>
                            <div className="select-servico">
                                <label htmlFor="servicos">
                                    <span className="spn-titulo">Selecione o serviço</span>
                                    <select name="servico" onChange={(e) => setIdServicos(e.target.value)}>
                                        <option value="">Selecione o serviço</option>
                                        {servicos.map((servico: any) => (
                                            <option value={servico.servicos_id}>{servico.nome}</option>
                                        ))}
                                    </select>
                                </label>
                            </div>
            
                            <div className="select-profissional">
                                <label htmlFor="">
                                    <span className="spn-titulo">Selecione o profissional</span>
                                    <select name="profissional" onChange={(e) => setIdProfissional(e.target.value)}>
                                        <option value="">Selecione o profissional</option>
                                        {profissionais.map((profissional: any) => (
                                            <option value={profissional.profissional_id}>{profissional.nome}</option>
                                        ))}
                                    </select>
                                </label>
                            </div>
            
                            <div className="select-data">
                                <span className="spn-titulo">Selecione o período</span>

                                <label htmlFor="">
                                    <span>De:</span>
                                    <input 
                                        type="date" 
                                        onChange={(e)=>setDataFrom(new Date(e.target.value))}
                                    />
                                </label>

                                <label htmlFor="">
                                    <span>Até:</span>
                                    <input 
                                        type="date" 
                                        onChange={(e)=>setDataTo(new Date(e.target.value))}
                                    />
                                </label>

                                <button className="buttons" type="submit">Gerar Relatório</button>
                            </div>
                        </form>
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
                                {relatorioServicos.map((relatorioServico: any) => (
                                    <tr>
                                        <td>{relatorioServico.nome_profissional}</td>
                                        <td>{format(new Date(relatorioServico.data_atendimento), "dd/MM/yyyy")}</td>
                                        <td>{relatorioServico.horario_agendamento}</td>
                                        <td>{relatorioServico.nome_servico}</td>
                                    </tr>
                                 ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="buttons-export">
                        <label htmlFor="">
                            <CSVLink
                                className="buttons"
                                data={csvData}
                                filename={`relatorioServico.csv`}
                                separator=";"
                            >
                                Exportar para Excel
                            </CSVLink>
                            <span className="material-icons"><RiFileExcel2Line/></span>
                        </label>
                    </div>
                </div>
            </main>
        </>
    )
}


export default RelatorioServicoPage;