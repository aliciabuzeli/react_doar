import Mensagem from "../Mensagem/Mensagem.jsx";
import css from "../CadastroAdm1/CadastroAdm1.module.css";
import Titulo from "../Titulo/Titulo.jsx";
import Input from "../Input/Input.jsx";
import Select from "../Select/Select.jsx";
import InputArquivo from "../InputArquivo/InputArquivo.jsx";
import Botao from "../Botao/Botao.jsx";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

export default function Postagem() {
    let [projetos, setProjetos] = useState([]);

    async function buscarProjetos() {
        let busca = await fetch("http://127.0.0.1:5000//criar_atualizacoes", {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"
            },
            credentials: 'include'
        })


        let buscaProjetos = await busca.json()

        console.log(buscaProjetos)

        if (buscaProjetos) {
            const formatados = buscaProjetos.projetos.map(function(p) {
                return {
                    valor: p[0],
                    texto: p[1]
                };
            });
            setProjetos(formatados);
        }

    }

    useEffect(function () {
        buscarProjetos();
    }, [])

    const [titulo, setTitulo] = useState('')
    const [projeto, setProjeto] = useState('');
    const [texto, setTexto] = useState('')
    const [fotoAtualizacao, setFotoAtualizacao] = useState('')
    const [error, setError] = useState('');
    const sucesso = localStorage.getItem('sucesso');
    const navigate = useNavigate();

    if (sucesso) {
        localStorage.removeItem('sucesso');
    }

    function alterarTitulo(e) {
        setTitulo(e.target.value)
    }

    function alterarProjeto(e) {
        setProjeto(e.target.value)
    }

    function alterarTexto(e) {
        setTexto(e.target.value)
    }

    function alterarFotoAtualizacao(e) {
        setFotoAtualizacao(e.currentTarget.files[0])
    }



    async function criarAtualizacao() {
        const form = new FormData();
        form.append('titulo', titulo)
        form.append('texto', texto)
        form.append('projeto', projeto)
        form.append('foto_atualizacao', fotoAtualizacao)

        let retorno = await fetch('http://127.0.0.1:5000//criar_atualizacoes', {
            method: 'POST',
            credentials: 'include',
            body: form
        })

        retorno = await retorno.json();


        if (retorno.message) {
            localStorage.setItem('sucesso', retorno.message)
            navigate('/')
        }

        else {
            setError(retorno.error)
        }
    }

    return (
        <section className={css.secao}>
            <div>
                <Mensagem tipo={"sucesso"} texto={sucesso} onClose={() => setError('')}/>
                <Mensagem tipo={"erro"} texto={error} onClose={() => setError('')}/>
            </div>
            <div className={css.organizar}>
                <Titulo titulo={'Criar atualização'} cor={'azul-claro'} />
            </div>
            <div className={css.formulario}>
                <div>
                    <Input
                        label={'Título'}
                        placeholder={'Insira o título da sua postagem'}
                        required={true}
                        input={titulo}
                        alterarInput={alterarTitulo}

                    />
                    <Input
                        tamanho={'Big'}
                        label={'Texto'}
                        type={'text'}
                        placeholder={'Insira o texto da sua postagem '}
                        required={true}
                        minLength={50}
                        maxLength={200}
                        textarea={true}
                        input={texto}
                        alterarInput={alterarTexto}
                    />
                </div>
                <div>
                    <Select
                        label={'Projeto'}
                        options={[{ valor: '', texto: 'Selecione um projeto' }, ...projetos]}
                        input={projeto}
                        alterarInput={alterarProjeto}

                    />

                    <InputArquivo
                        tamanho={'big'}
                        required={false}
                        alterarInput={alterarFotoAtualizacao}
                    />
                </div>
            </div>
            <div className={css.botao}>
                <Botao acao={criarAtualizacao} texto={'Criar postagem'} cor={'azul'} />
            </div>
        </section>
    )
}