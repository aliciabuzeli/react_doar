import css from "../CardsDoadores/CardsDoadores.module.css";

export default function Recomendacoes({ imagem, nome, subtitulo }) {
    return(
        <div className={css.card}>
            <h2>Recomendações</h2>
            <img src={imagem} className={css.img}  />
            <h2 className={css.textoo}>{nome}</h2>
            <p className={css.subtitulo}>{subtitulo}</p>
            <div className={css.favorito}>❤️</div>

            <img src={imagem} className={css.img}  />
            <h2 className={css.textoo}>{nome}</h2>
            <p className={css.subtitulo}>{subtitulo}</p>
            <div className={css.favorito}>❤️</div>

            <img src={imagem} className={css.img}  />
            <h2 className={css.textoo}>{nome}</h2>
            <p className={css.subtitulo}>{subtitulo}</p>
            <div className={css.favorito}>❤️</div>

            <img src={imagem} className={css.img}  />
            <h2 className={css.textoo}>{nome}</h2>
            <p className={css.subtitulo}>{subtitulo}</p>
            <div className={css.favorito}>❤️</div>
        </div>
    )
}