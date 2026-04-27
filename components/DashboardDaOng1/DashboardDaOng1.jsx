import Titulo from "../Titulo/Titulo.jsx";
import css from "./DashboardDaOng1.module.css";
import Acoes from "../Acoes/Acoes.jsx";
import Cards from "../Cards/Cards.jsx";
import CardsDoadores from "../CardsDoadores/CardsDoadores.jsx";
import MenuLateral from "../MenuLateral/MenuLateral.jsx";

export default function DashboardDaOng1() {
    return(
        <section className={css.secao}>
            <section className={css.menulateral}>
                <MenuLateral/>
            </section>
            <div className={css.conteudo}>
                <div>
                    <Titulo titulo={'Olá, nome do sobrenome'} />
                </div>
                <Titulo titulo={'Ações Rápidas'} cor={'preto'}/>
                <div className={css.acoes}>
                    <Acoes cor={'amarelo'} texto={'Editar Perfil'} pagina={'/editarOng'}/>
                    <Acoes cor={'amarelo'} texto={'Criar Projeto'}/>
                    <Acoes cor={'amarelo'} texto={'Criar Atualização'} pagina={'/postagem'}/>
                </div>
                <div className={css.titulos}>
                    <Titulo titulo={'Projetos Ativos'} cor={'preto'}/>
                </div>
                <div className={css.cards}>
                    <Cards texto={'Mutirão de Castração Solidária'} imagem={'/projeto3.png'}/>
                    <Cards texto={'Operação Patas Quentinhas'} imagem={'/projeto1.png'}/>
                    <Cards texto={'Recomeço Feliz'} imagem={'/projeto2.png'}/>
                </div>
                <div className={css.titulos}>
                    <Titulo titulo={'Últimas atualizações'} cor={'preto'}/>
                </div>
                <div className={css.cards}>
                    <Cards texto={'Mutirão de Castração Solidária'} imagem={'/projeto3.png'}/>
                    <Cards texto={'Operação Patas Quentinhas'} imagem={'/projeto1.png'}/>
                    <Cards texto={'Recomeço Feliz'} imagem={'/projeto2.png'}/>
                </div>
                <div className={css.titulos}>
                    <Titulo titulo={'Doadores'} cor={'preto'}/>
                </div>
                <div className={css.cards}>
                    <CardsDoadores/>
                </div>
            </div>
        </section>
    )
}