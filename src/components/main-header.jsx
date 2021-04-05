const MainHeader = (links) => {
    return (
        <header id="main-header">
            <div className="main-container">
                <div id="main-header-content">
                    <a href="./index.html">
                        <h1>AppMaster</h1>
                    </a>
                    <nav className="navbar">
                        <ul>
                            <li><a href="#root">Home</a></li>
                            <li><a href="#about">Sobre</a></li>
                            <li><a href="#services">Serviços</a></li>
                            <li><a href="#clients">Clientes</a></li>
                            <li><a href="#portfolio">Portfólio</a></li>
                            <li><a href="#our-team">Time</a></li>
                            <li><a href="#contact-us">Contatos</a></li>
                            <li className="social-links-container">
                                <div className="social-links">
                                    <a href={links.twitter} target="_blank" rel="noreferrer"><i className="fab fa-twitter sm-icon"></i></a>
                                    <a href={links.facebook} target="_blank" rel="noreferrer"><i className="fab fa-facebook sm-icon"></i></a>
                                    <a href={links.instagram} target="_blank" rel="noreferrer"><i className="fab fa-instagram sm-icon"></i></a>
                                    <a href={links.linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin sm-icon"></i></a>
                                </div>
                            </li>
                            <button className="navbar-close">X</button>
                        </ul>
                    </nav>
                    <button className="navbar-hamburger">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default MainHeader;