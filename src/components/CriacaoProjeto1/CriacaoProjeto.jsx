import css from "../CadastroDoador1/CadastroDoador1.module.css";
import Titulo from "../Titulo/Titulo.jsx";
import Input from "../Input/Input.jsx";
import InputArquivo from "../InputArquivo/InputArquivo.jsx";
import Botao from "../Botao/Botao.jsx";
import Select from "../Select/Select.jsx";
import {useState} from "react";

export default function EditarProjeto1() {
    const [categoria, setCategoria] = useState('')
    const [tipoAjuda, setTipoAjuda] = useState('')
    const [status, setStatus] = useState('')
    const [fotoPerfil, setFotoPerfil] = useState('')

    function alterarCategoria(e) {
        setCategoria(e.target.value)
    }
    function alterarTipoAjuda(e) {
        setTipoAjuda(e.target.value)
    }
    function alterarStatus(e) {
        setStatus(e.target.value)
    }
    function alterarFotoPerfil(e) {
        setFotoPerfil(e.target.files[0])
    }

    return(
        <>
            <div className={css.organizar}>
                <Titulo titulo={'Criar novo projeto'} cor={'azul-claro'} />
            </div>
            <div className={css.formulario}>
                <div className={css.linha}>
                    <div className={css.campos}>
                        <Input
                            label={'Título'}
                            type={'text'}
                            placeholder={'Digite o Título'}
                        />
                        <Select
                            label={'Categoria'}
                            input={categoria}
                            alterarInput={alterarCategoria}
                            options={['Escolha uma categoria', 'Animal', 'Escolar', 'Comida', 'Outro']}
                        />
                        <Select
                            label={'Tipo de Ajuda'}
                            input={tipoAjuda}
                            alterarInput={alterarTipoAjuda}
                            options={['Escolha um tipo de ajuda', 'Animal', 'Escolar', 'Comida', 'Outro']}
                        />
                        <Select
                            label={'Status'}
                            input={status}
                            alterarInput={alterarStatus}
                            options={['Escolha um tipo de status', 'Animal', 'Escolar', 'Comida', 'Outro']}
                        />
                    </div>
                    <div className={css.campos}>
                        <Input
                            label={'Descrição'}
                            type={'text'}
                            placeholder={'Digite sua descrição'}
                        />
                        <Input
                            label={'Localização'}
                            type={'text'}
                            placeholder={'Digite sua localização'}

                        />

                        <InputArquivo
                            label={'Foto do Projeto'}
                            tamanho={'big'}
                            required={false}
                            input={fotoPerfil}
                            alterarInput={alterarFotoPerfil}
                        />
                    </div>
                </div>
                <div className={css.botaoContainer}>
                    <Botao texto={'Criar projeto'} cor={'azul'}/>
                </div>
            </div>
        </>
    )
}