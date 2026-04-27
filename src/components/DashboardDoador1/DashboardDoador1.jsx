import css from "./DashboardDoador1.module.css"

export default function DashboardDoador1() {
    return (
        <>

            <main className={css.main}>

                <h1>Olá, <span>Nome do Sobrenome!</span></h1>


                <section>
                    <h3>Ações Rápidas</h3>
                    <div className={css.acoes}>
                        <button className={css.btnrosa}>Editar perfil</button>
                        <button className={css.btnlaranja}>Doar para ONG</button>
                        <button className={css.btnroxo}>Doar para projeto</button>
                    </div>
                </section>


                <section>
                    <h3>Suas ONGs do coração</h3>
                    <div className={css.ongs}>
                        <div className={css.ong}>Tocando em Frente</div>
                        <div className={css.ong}>Gerando Falcões</div>
                        <div className={css.ong}>Amigos do Bem</div>
                    </div>
                </section>


                <section>
                    <h3>Suas doações</h3>
                    <div className={css.doacoes}>
                        <div className={css.card}>
                            <span className={css.tag}>Monetária</span>
                            <h2>R$ 200,00</h2>
                            <p>Nova escola</p>
                        </div>

                        <div className={css.card}>
                            <span className={css.tag}>Monetária</span>
                            <h2>R$ 50,00</h2>
                            <p>Arrecadação de Natal</p>
                        </div>

                        <div className={css.card}>
                            <span className={css.tagroxa}>Voluntariado</span>
                            <h2>Mensagem enviada</h2>
                            <p>Novos voluntários</p>
                        </div>
                    </div>
                </section>




            </main>

        </>
    )
}