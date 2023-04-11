import '../css/about.css'
import longCOVID from "../assets/longCOVID.jpg"
import ReactPlayer from "react-player"

const About = () => {

    return (
        <div className='about'>
            <div className='subTitle'>What is Long COVID</div>
            <div className='aboutContent'>

                {/* Update 23.04.11 */}
                <img className="imageSize" src={longCOVID} alt="long COVID" />
                <div className="source">
                    Christopher D. Vélez, MD. “Can Long Covid Affect the Gut?”
                    Harvard Health, 20 Mar. 2023,
                    https://www.health.harvard.edu/blog/can-long-covid-affect-the-gut-202303202903.
                </div>
                
                <p>
                    Long-term symptoms experienced after the SARS-CoV-2 infection.
                    The symptoms are not only cardiorespiratory related, but also are
                    related to neuropsychiatric, gastrointestinal, and so on.
                    According to WHO, shortness of breath, brain fog, fatigue, and
                    cough are most commonly experienced. Due to its variety, it is
                    not still clear to define whether it is post COVID-19 condition,
                    and further research is needed for clarification. Further
                    information can be found at{" "}
                    <a className="article" href="https://ncv.kdca.go.kr/hcp/page.do?mid=0102" target="_blank" rel="noreferrer">
                        <b>KDCA</b>.
                    </a>
                </p>
                
                <br />
                <br />
                <div className="subTitle">Related Videos</div>
                <br />
                <div className="videos">
                    <ReactPlayer url="https://www.youtube.com/watch?v=fF8xdaSzSMg" />
                    <ReactPlayer url="https://www.youtube.com/watch?v=7ZF6XS2cpiw" />
                </div>
                <div className="videos">
                    <ReactPlayer url="https://www.youtube.com/watch?v=0w5XoN7GH-o" />
                    <ReactPlayer url="https://www.youtube.com/watch?v=5YDMTfesQWM" />
                </div>
                {/* Update 23.04.11 */}

            </div>

        </div>
    )
}

export default About