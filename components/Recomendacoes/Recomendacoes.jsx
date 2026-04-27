import css from "../Recomendacoes/Recomendacoes.module.css"

export default function Recomendacoes({ titulo, imagens, nome, subtitulo }) {
    return(
        <>
                <div className={css.card}>
                        <div className={css.titulo}>{titulo}</div>
                    <div className={css.dflex}>
                        <img src={imagens} className={css.imgs}  />
                        <div className={css.dflex}>
                            <div className={css.dblock}>
                                <h2 className={css.textoo}>{nome}</h2>
                                <p className={css.subtitulo}>{subtitulo}</p>
                            </div>
                            <div className={css.favorito}>❤️</div>
                        </div>
                    </div>

                </div>
        </>
    )
}