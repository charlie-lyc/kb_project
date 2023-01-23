import '../css/navBar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'


const NavBar = ({ isLogged, handleLogout }) => {
    const [isOpened, setOpened] = useState(false)
    const navigate = useNavigate()

    const toggleDropdown = () => {
        setOpened(!isOpened)
    }

    const executeLogout = () => {
        alert('Request Logout...')
        handleLogout()
        navigate('/')
    }

    return (
        <>
            <hr />
            <section className='navBar'>
                <span>
                    <Link to='/'>Home</Link>
                </span>
                <ul>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/board'>Board</Link>
                    </li>
                    <li>
                        <Link to='/clinics'>Clinics</Link>
                    </li>
                    <li>
                        <Link to='/survey'>Survey</Link>
                    </li>
                    <li>
                        <Link to='/articles'>Articles</Link>
                    </li>
                    {
                        isLogged
                            ?
                            <li onClick={executeLogout}>
                                <Link to='/api/logout'>Logout</Link>
                            </li>
                            :
                            <li>
                                <Link to='/login'>Login</Link>
                            </li>
                    }
                </ul>
                <span className='hamburgerMenu' onClick={toggleDropdown}>
                    <i className="fa fa-bars" />
                </span>
            </section>
            {
                isOpened &&
                <div className="dropdown" onClick={toggleDropdown}>
                    <ul className='dropdownMenu'>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/board'>Board</Link>
                        </li>
                        <li>
                            <Link to='/clinics'>Clinics</Link>
                        </li>
                        <li>
                            <Link to='/survey'>Survey</Link>
                        </li>
                        <li>
                            <Link to='/articles'>Articles</Link>
                        </li>
                        {
                            isLogged
                                ?
                                <li onClick={executeLogout}>
                                    <Link to='/api/logout'>Logout</Link>
                                </li>
                                :
                                <li>
                                    <Link to='/login'>Login</Link>
                                </li>
                        }
                    </ul>
                    {/* <a>&times;</a> */}
                </div>
            }
        </>
    )
}

export default NavBar