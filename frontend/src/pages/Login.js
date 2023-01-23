import "../css/login.css"
import { useNavigate } from "react-router-dom"
import googleLogo from "../assets/googleLogo.png"
import kakaoLogo from "../assets/kakaoLogo.png"


const Login = ({ isLogged, handleLogin }) => {
    const navigate = useNavigate()

    const kakaoLogin = () => {
        alert('Request Kakao Login...')
        handleLogin()
        navigate('/board')
    }

    const googleLogin = () => {
        alert('Request Google Login...')
        handleLogin()
        navigate('/board')
    }

    return (
        isLogged ?
            <div className='subTitle'>You have logged in.</div>
            :
            <div className="login">
                <div className='subTitle'>Log In</div>
                <div className='loginForm'>
                    <br /><br /><br /><br /><br />
                    <button className='loginBtn' onClick={kakaoLogin}>
                        <img className='socialLogo' src={kakaoLogo} alt="Kakao Logo" />
                        &nbsp;&nbsp;
                        <span>Kakao</span>
                    </button>
                    <br /><br />
                    <button className='loginBtn' onClick={googleLogin}>
                        <img className='socialLogo' src={googleLogo} alt="Google Logo" />
                        &nbsp;&nbsp;
                        <span>Google</span>
                    </button>
                </div>
            </div>
    )
}

export default Login