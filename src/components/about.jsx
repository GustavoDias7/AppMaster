const About = ({aboutTopics}) => {
    const AboutListHeader = () => {
        const aboutTopicsList = aboutTopics.map((topic, index) => (
            <li key={index}>
                <i className="far fa-check-circle sm-icon"></i> {topic}
            </li>
        ))

        return (
            <ul id="about-list-header">
                {aboutTopicsList}
            </ul>
        )
    }

    return (
        <section id="about">
            <div className="main-container">
                <div id="about-content">
                    <div id="about-image">
                        <img src="./img/aboult-image.jpg" alt="" />
                    </div>
                    <div id="about-text">
                        <div id="about-text-header">
                            <h2>Conheça um pouco mais sobre a AppMaster</h2>
                            <p>
                                Somos uma startup fabricante de software como aplicativos, websites e aplicações desktop.
                            </p>
                        </div>
                        <AboutListHeader />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;