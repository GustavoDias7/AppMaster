const Clients = () => (
    <section id="clients">
        <div className="main-container">
            <div className="section-header">
                <h2>Clientes</h2>
                <p>
                    Temos orgulho de fazer parceria com os maiores players do mercado em diversos segmentos. Nós tornamos
                    seus negócios ainda mais promissores com o nosso serviços e estratégia de negócio.
                </p>
            </div>
            <div id="client-carousel-container">
                <div id="slider">
                    <div className="logo-container">
                        <img src="./img/client-logo-01.svg" alt="" className="client-logo" />
                    </div>
                    <div className="logo-container">
                        <img src="./img/client-logo-02.svg" alt="" className="client-logo" />
                    </div>
                    <div className="logo-container">
                        <img src="./img/client-logo-03.svg" alt="" className="client-logo" />
                    </div>
                    <div className="logo-container">
                        <img src="./img/client-logo-04.svg" alt="" className="client-logo" />
                    </div>
                    <div className="logo-container">
                        <img src="./img/client-logo-05.svg" alt="" className="client-logo" />
                    </div>
                    <div className="logo-container">
                        <img src="./img/client-logo-06.svg" alt="" className="client-logo" />
                    </div>
                    <div className="logo-container">
                        <img src="./img/client-logo-07.svg" alt="" className="client-logo" />
                    </div>
                    <div className="logo-container">
                        <img src="./img/client-logo-08.svg" alt="" className="client-logo" />
                    </div>
                </div>
                <div id="mini-button-container">
                    <button className="mini-button active-mini-button"></button>
                    <button className="mini-button"></button>
                    <button className="mini-button"></button>
                    <button className="mini-button"></button>
                    <button className="mini-button"></button>
                    <button className="mini-button"></button>
                    <button className="mini-button"></button>
                </div>
            </div>
        </div>
    </section>
)

export default Clients;