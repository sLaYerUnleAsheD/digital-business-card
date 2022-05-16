import React from "react"
// import buggyImage from "../images/buggy.png"
const buggyImage = "https://i.pinimg.com/originals/38/1a/eb/381aeb3ece63f397508d78e2011ba52c.jpg"
const Intro = () => {
    return (
        <div className="container">
            <img src={buggyImage} alt="buggy the clown" className="my-face" />
        </div>
    );
}
export default Intro;