import '../css/home.css'
import FDACovid from "../assets/FDACovid.png"
import DV1 from "../assets/DV1.png"
import DV2 from "../assets/DV2.png"
import DV3 from "../assets/DV3.png"
import DV4 from "../assets/DV4.png"
import DV5 from "../assets/DV5.png"
import DV6 from "../assets/DV6.png"
import DV7 from "../assets/DV7.png"
import DV8 from "../assets/DV8.png"


const Home = ({ username }) => {
    
    return (
        <div className='home'>

            <div className='subTitle'>Welcome, {username}!</div>
            
            <div className='homeContent'>
                <br />
                <div className="subTitle">Purpose of This Website</div>
                
                {/* Update 23.04.11 */}
                <img className="imageSize" src={FDACovid} alt="FDA COVID" />
                <div className="source">
                    “COVID-19 Test Basics.” U.S. Food and Drug Administration, FDA,
                    1 Apr. 2023,
                    https://www.fda.gov/consumers/consumer-updates/kobideu-19-covid-19-geomsa-gibon-sahang.{" "}
                </div>
                {/* Update 23.04.11 */}

                <div className="question">
                    {" "}
                    <b>
                    Would creating a community for post-COVID teenagers allow
                    them to feel supported and included, and give the potential
                    for future long-COVID research?{" "}
                    </b>
                </div>
                <br />
                <p>
                    This website is created to provide a long COVID community for
                    teenagers. After the acute infection of SARS-CoV-2 in 2022, I
                    started to experience long COVID symptoms. Even though I visited
                    doctors, I couldn't get effective treatment, and I felt I was
                    the only student who was having the aftereffects. However, after
                    reading long COVID research articles, I found out that the long
                    COVID symptoms appear quite frequently for teenagers and
                    adolescents. To provide an online community where teenagers can
                    share their experiences and communicate to make them feel
                    supported and included, and collect the data in easier way for
                    researchers, I decided to create this website.
                </p>

                {/* Update 23.04.11 */}
                <br />
                <br />
                <div className="subTitle">
                {" "}
                Data Visualizations Created by Using the Survey Sample of the
                Website
                </div>
                <img className="dataVisImg" src={DV1} alt="DV1" />
                <img className="dataVisImg" src={DV3} alt="DV3" />
                <img className="dataVisImg" src={DV4} alt="DV4" />
                <img className="dataVisImg" src={DV2} alt="DV2" />
                <img className="dataVisImg" src={DV5} alt="DV5" />
                <img className="dataVisImg" src={DV6} alt="DV6" />
                <img className="dataVisImg" src={DV7} alt="DV7" />
                <img className="dataVisImg" src={DV8} alt="DV8" />
                {/* Update 23.04.11 */}

            </div>
        </div>
    )
}

Home.defaultProps = {
    username: 'Everyone'
}

export default Home