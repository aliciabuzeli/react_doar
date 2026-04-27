import css from './MenuLateral.module.css'
export default function MenuLateral() {
    return (
        <div className={css.container}>
            <div className={css.funcoes}>
                <img src={'/camera.png'}/>
                <h2>Feed</h2>
            </div>
            <div className={css.funcoes}>
                <img src={'/perfil.png'}/>
                <h2>Perfil</h2>
            </div>
            <div className={css.funcoes}>
                <img src={'/ongs.png'}/>
                <h2>ONGs</h2>
            </div>
            <div className={css.funcoes}>
                <img src={'/projetos.png'}/>
                <h2>Projetos</h2>
            </div>
        </div>
    )
}