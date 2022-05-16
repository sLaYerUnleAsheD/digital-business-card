import React from "react"
import ReactDOM from "react-dom"
import "./style.css"
import App from "./App"
const root = document.querySelector("#root")
ReactDOM.render(<App />, root)

const emailLink = "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=mihirpanchal2603@gmail.com"
const linkedinLink = "https://www.linkedin.com/in/mihir-panchal-24440a209/"
const twitterLink = "https://cdn.vox-cdn.com/thumbor/xb-heShdGq4G32_R1-c8E9FpyQw=/0x0:1694x866/1200x800/filters:focal(712x298:982x568)/cdn.vox-cdn.com/uploads/chorus_image/image/63097414/Screen_Shot_2019_02_22_at_3.13.37_PM.0.png"
const instagramLink = "https://wp-assets.futurism.com/2022/03/zuckerberg-captcha-1.jpg"
const facebookLink = "https://wp-assets.futurism.com/2022/03/zuckerberg-captcha-1.jpg"
const redditLink = "https://www.reddit.com/user/memeunleashed"

/*Instead of importing each button separately, I just gave a common class btn to all social media buttons
So on this array buttons I will run the forEach loop where I will work on each single button which
will listen a click and open the respective link from links array in which I have put them in order,
this reduced tons of lines of code*/ 
const buttons = document.querySelectorAll(".btn")
const links = [emailLink, linkedinLink, twitterLink, instagramLink, facebookLink, redditLink]

buttons.forEach((button, i) => {
    button.addEventListener('click', ()=>{
        window.open(links[i], '_blank')
    })
})