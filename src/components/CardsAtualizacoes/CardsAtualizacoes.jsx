import css from './CardsAtualizacoes.module.css'

export default function CardsAtualizacoes({ nome, descricao, data, titulo, texto, ajuda, logo, imagem}) {
    return(
        <div className={css.card}>

            <div className={css.topo}>
                <img src={logo} alt="logo" className={css.logo} />

                <div className="d-flex flex-column gap-1">
                    <h2 className={css.nome}>{nome}</h2>
                    <p className={css.subtitulo}>{descricao}</p>
                    <p className={css.data}>{data}</p>
                </div>

                <div className={css.favorito}>❤️</div>
                <p>{ajuda}</p>
            </div>

            <div className="d-flex gap-1 justify-content-center align-items-center">
                <img src={imagem} alt="Foto" />
                <div>
                    <p>{titulo}</p>
                    <p className={css.descricao}>{texto}</p>
                </div>
            </div>

            <button className={css.botao}>AAA</button>

        </div>

    )
}