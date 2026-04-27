import css from "../CriacaoProjeto1/CriacaoProjeto1.module.css";
import Titulo from "../Titulo/Titulo.jsx";
import Input from "../Input/Input.jsx";
import InputArquivo from "../InputArquivo/InputArquivo.jsx";
import Botao from "../Botao/Botao.jsx";
import Select from "../Select/Select.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Mensagem from "../Mensagem/Mensagem.jsx";

export default function CriacaoProjeto1() {
    const [titulo, setTitulo] = useState('')
    const [categoria, setCategoria] = useState('')
    const [tipoAjuda, setTipoAjuda] = useState('')
    const [status, setStatus] = useState('')
    const [descricao, setDescricao] = useState('')
    const [localizacao, setLocalizacao] = useState('')
    const [fotoProjeto, setFotoProjeto] = useState('')
    const [error, setError] = useState('');
    const sucesso = localStorage.getItem('sucesso');
    const navigate = useNavigate();

    if (sucesso) {
        localStorage.removeItem('sucesso');
    }

    function alterarTitulo(e) {
        setTitulo(e.target.value)
    }

    function alterarCategoria(e) {
        setCategoria(e.target.value)
    }

    function alterarTipoAjuda(e) {
        setTipoAjuda(e.target.value)
    }

    function alterarStatus(e) {
        setStatus(e.target.value)
    }

    function alterarDescricao(e) {
        setDescricao(e.target.value)
    }

    function alterarLocalizacao(e) {
        setLocalizacao(e.target.value)
    }

    function alterarFotoProjeto(e) {
        setFotoProjeto(e.currentTarget.files[0])
    }



    async function criarProjeto() {
        const form = new FormData();
        form.append('titulo', titulo)
        form.append('categoria', categoria)
        form.append('tipo_ajuda', tipoAjuda)
        form.append('status', status)
        form.append('descricao', descricao)
        form.append('localizacao', localizacao)
        form.append('foto_projeto', fotoProjeto)

        let retorno = await fetch('http://10.92.3.126:5000//criar_projetos', {
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

    return(
        <>
            <div>
                <Mensagem tipo={"sucesso"} texto={sucesso} onClose={() => setError('')}/>
                <Mensagem tipo={"erro"} texto={error} onClose={() => setError('')}/>
            </div>
            <div className={css.organizar}>
                <Titulo titulo={'Criar novo projeto'} cor={'azul-claro'} />
            </div>
            <div className={css.formulario}>
                <div className={css.linha}>
                    <div className={css.campos}>
                        <Input
                            label={'Título'}
                            type={'text'}
                            placeholder={'Digite o título'}
                            input={titulo}
                            alterarInput={alterarTitulo}
                        />
                        <Select
                            label={'Categoria'}
                            input={categoria}
                            alterarInput={alterarCategoria}
                            options={['Escolha uma categoria', '1', '2', '3', 'Outro']}
                        />
                        <Select
                            label={'Tipo de Ajuda'}
                            input={tipoAjuda}
                            alterarInput={alterarTipoAjuda}
                            options={['Escolha um tipo de ajuda', '1', '2']}
                        />
                        <Select
                            label={'Status'}
                            input={status}
                            alterarInput={alterarStatus}
                            options={['Escolha um tipo de status', '0', '1', '2']}
                        />
                    </div>
                    <div className={css.campos}>
                        <Input
                            label={'Descrição'}
                            type={'text'}
                            placeholder={'Digite sua descrição'}
                            input={descricao}
                            alterarInput={alterarDescricao}
                        />
                        <Input
                            label={'Localização'}
                            type={'text'}
                            placeholder={'Digite sua localização'}
                            input={localizacao}
                            alterarInput={alterarLocalizacao}

                        />

                        <InputArquivo
                            label={'Foto do Projeto'}
                            tamanho={'big'}
                            required={false}
                            input={fotoProjeto}
                            alterarInput={alterarFotoProjeto}
                        />
                    </div>
                </div>
                <div className={css.botaoContainer}>
                    <Botao acao={criarProjeto} texto={'Criar projeto'} cor={'azul'}/>
                </div>
            </div>
        </>
    )
}