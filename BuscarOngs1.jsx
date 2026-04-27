import CardsOngs from "../CardsOngs/CardsOngs.jsx";
import css from './BuscarOngs1.module.css'
import {useEffect, useState} from "react";
import Input from "../Input/Input.jsx";


export default function BuscarOngs1() {
    let [busca, setBusca] = useState('');
    let [ongs, setOngs] = useState([]);

    function alterarBusca(e) {
        let valor = e.currentTarget.value

        setBusca(valor)
    }

    async function buscarOngs() {
        let buscaOngs = await fetch("http://10.92.3.122:5000/listar_ongs/" + busca, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"
            },
            credentials: "include"
        })

        let aux = await buscaOngs.json()

        console.log(aux.ongs)

        setOngs(aux.ongs);
    }

    useEffect(function () {
        buscarOngs();
    }, [busca])


    return(
        <>
            <div>
                <Input
                    label={""}
                    type={"text"}
                    input={busca}
                    alterarInput={alterarBusca}
                    placeholder={"Digite"}
                />

                {ongs.map(function(ong) {
                    return (
                        <div className={css.secao}>
                            <CardsOngs
                                key={ong.id_usuarios}
                                nome={ong.nome}
                                subtitulo={ong.descricao_curta}
                                descricao={ong.descricao_longa}
                                localizacao={ong.localizacao}
                                imagem={"/public/image 4.png"}
                                tipo={ong.categoria}
                            />
                        </div>
                    )
                }
                )}
            </div>

            <div>

            </div>

        </>
    )
}
