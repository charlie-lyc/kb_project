import "../css/mainTitle.css"
import mainTitleImage from '../assets/mainTitleImage.png'


const MainTitle = () => {
    
    return (
        <div className="mainTitle">
            {/* <h1>Long COVID Teen</h1> */}
            <img className='mainLogo' src={mainTitleImage} alt="main title" />
        </div>
    )
}

export default MainTitle
