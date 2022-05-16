import React from "react"
const About = () => {
    return (
        <div className="about">
            <h3 className="name">Buggy the Clown</h3>
            <h4 className="container--position">Frontend Pirate</h4>
            <a href="https://github.com/sLaYerUnleAsheD" target="_blank" className="container--link">Github</a>
            <div className="buttons">
                <button className="email btn"><i className="fa-solid fa-envelope"></i> Email</button>
                <button className="linkedin btn"><i className="fa-brands fa-linkedin-in"></i> LinkedIn</button>
            </div>
            <h2 className="about--title">About</h2>
            <p className="about--text">Buggy the Star Clown is the captain of the Buggy Pirates as well as the co-leader of the Buggy and Alvida Alliance, and a former apprentice of the Roger Pirates. Shortly after the Battle of Marineford, he became a member of the Shichibukai and the leader of the pirate dispatch organization "Buggy's Delivery".</p>
        </div>
    );
}
export default About