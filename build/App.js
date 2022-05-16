import React from "react";
import Intro from "./components/Intro"
import Mid from "./components/Mid"
// import About from "./components/About"
// import Interests from "./components/Interests"
/* no use of above to imports since in App function
I have made the code more compact by putting that div in Mid.js as 
a separate component*/
import Footer from "./components/Footer"
const App = () => {
    return (
        /*main is introduced instead of <></> fragment because i wanted to take it as the parent 
        container on which i can apply some styles. */
        <main>
            <Intro />
            <Mid />
            {/* <div className="mid">
                <About />
                <Interests />
            </div> */}
            <Footer />
        </main>
    )
}
export default App