import css from './CardsOngs.module.css'

export default function CardsOngs({ nome, subtitulo, descricao, localizacao, imagem, tipo}) {
    return(
        <div className={css.card}>

            <div className={css.topo}>
                <img src={imagem} alt="logo" className={css.logo} />

                <div>
                    <h2 className={css.nome}>{nome}</h2>
                    <p className={css.subtitulo}>{subtitulo}</p>
                </div>

                <div className={css.favorito}>❤️</div>
            </div>

            <p className={css.descricao}>{descricao}</p>

            <div className={css.local}>
                <img className={css.img} src="./3722049 1.png"/>
                {localizacao}
            </div>

            <button className={css.botao}>{tipo}</button>

        </div>

    )
}