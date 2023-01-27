import "../css/login.css"
import googleLogo from "../assets/googleLogo.png"
import kakaoLogo from "../assets/kakaoLogo.png"


const Login = ({ isLogged }) => {

    const kakaoLogin = () => window.location.href = '/api/auth/kakao'
    const googleLogin = () => window.location.href = '/api/auth/google'

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