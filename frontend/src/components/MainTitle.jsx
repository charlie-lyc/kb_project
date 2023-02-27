import "../css/mainTitle.css"
import mainTitle from '../assets/mainTitle.png'


const MainTitle = () => {
    
    return (
        <div className="mainTitle">
            {/* <h1>Long COVID Teen</h1> */}
            <img className='mainLogo' src={mainTitle} alt="main title" />
            
        </div>
    )
}

export default MainTitle
