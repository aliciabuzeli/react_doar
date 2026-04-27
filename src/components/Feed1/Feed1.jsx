import CardsAtualizacoes from "../CardsAtualizacoes/CardsAtualizacoes.jsx";
import {useEffect, useState} from "react";
import Input from "../Input/Input.jsx";
import css from './Feed1.module.css';


export default function Feed1() {
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

                <CardsAtualizacoes
                    nome="GRUPA"
                    descricao="Grupo Unido Pelos Animais "
                    data="02/02/2026 às 14:00"
                    titulo="Patas que Transformam Vidas"
                    texto="Projeto voltado ao resgate, cuidado e adoção responsável de animais abandonados, promovendo bem-estar e conscientização na comunidade. 🐾"
                    ajuda="A"
                    logo="OIII"
                    imagem="OIII"

                />
            </div>

            <div>

            </div>

        </>
    )
}
