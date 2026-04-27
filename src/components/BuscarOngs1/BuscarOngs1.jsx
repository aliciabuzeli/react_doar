import CardsOngs from "../CardsOngs/CardsOngs.jsx";
import css from './BuscarOngs1.module.css'

export default function BuscarOngs1() {
    return(
        <>
            <div>
                <div className={css.secao}>
                    <CardsOngs
                        nome={"Grupa"}
                        subtitulo={"Grupo Unido Pelos Animais"}
                        descricao={"O GRUPA é uma organização sem fins lucrativos dedicada ao" +
                            "resgate, reabilitação e adoção de animais em situação de rua" +
                            "ou maus-tratos. Nossa missão é conectar corações e patas," +
                            "garantindo que todo animal tenha a chance de encontrar um" +
                            "lar seguro e cheio de amor."}
                        localizacao={"Birigui - SP"}
                        imagem={"/public/image 4.png"}
                        tipo={"Animal"}
                    />
                </div>
                <div className={css.secao}>
                    <CardsOngs
                        nome={"Gerando Falcões"}
                        subtitulo={"Ecossistema de Desenvolvimento nas Favelas"}
                        descricao={"A Gerando Falcões é uma organização social dedicada a" +
                            "interromper o ciclo da pobreza e transformar a realidade das" +
                            "favelas brasileiras. Nossa missão é acelerar líderes sociais e" +
                            "implementar projetos de inovação, garantindo que cada" +
                            "morador tenha acesso a oportunidades e uma vida digna."}
                        localizacao={"Poá - SP"}
                        imagem={"/public/images 5.png"}
                        tipo={"Educação"}
                    />
                </div>
            </div>

            <div>

            </div>

        </>
    )
}
