const OurTeam = ({ teamInfos }) => {

    const TeamCard = ({team}) => {
        const {image, title, type} = team;
        const {twitter, facebook, instagram, linkedin} = team.links;

        return (
            <figure className="team-card">
                <div className="image-team-container">
                    <img src={image} alt={title} className="image-team" />
                </div>
                <div className="team-descripttion">
                    <h3>{title}</h3>
                    <p>{type}</p>
                    <div className="social-links">
                        <a href={twitter} target="_blank" rel="noreferrer"><i className="fab fa-twitter sm-icon"></i></a>
                        <a href={facebook} target="_blank" rel="noreferrer"><i className="fab fa-facebook sm-icon"></i></a>
                        <a href={instagram} target="_blank" rel="noreferrer"><i className="fab fa-instagram sm-icon"></i></a>
                        <a href={linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin sm-icon"></i></a>
                    </div>
                </div>
            </figure>
        )
    }

    const TeamContainer = () => {
        const teamCardList = teamInfos.map((team) => (
            <TeamCard team={team} key={team.title} />
        ))

        return (
            <div className="team-container">
                {teamCardList}
            </div>
        )
    }

    return (
        <section id="our-team">
            <div className="main-container">
                <h2>Nosso Time</h2>
                <TeamContainer />
            </div>
        </section>
    )
}

export default OurTeam;