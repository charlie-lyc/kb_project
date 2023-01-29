import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import MainTitle from './components/MainTitle'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Board from './pages/Board'
import Clinics from './pages/Clinics'
import Survey from './pages/Survey'
import Articles from './pages/Articles'
import Login from './pages/Login'
import PostWrite from './pages/PostWrite'
import PostView from './pages/PostView'
import PostModify from './pages/PostModify'


const App = () => {
    const [auth, setAuth] = useState({
        isLogged: false,
        isJoined: false,
        userId: undefined,
        username: undefined, // For defaults to 'Everyone'
    })

    const { isLogged, isJoined, userId, username } = auth

    const handleJoin = (bool) => {
        setAuth((prevState) => ({ ...prevState, isJoined: bool }))
    }
    
    const handleLogout = () => {
        setAuth({ isLogged: false, isJoined: false, userId: '', username: undefined })
    }

    // Effect Hook for Side Effects
    useEffect(() => {
        // componentDidMount() or componentDidUpdate()
        const fetchAuth = async () => {
            const res = await axios.get(`/api/auth/info`)
            if (res.data.auth) {
                setAuth((prevState) => ({
                    ...prevState,
                    isLogged: true,
                    isJoined: res.data.auth.isJoined,
                    userId: res.data.auth.userId,
                    username: res.data.auth.username
                }))
            }
        }
        fetchAuth()
        
        // componentWillUnmount()
        return () => {
            setAuth({ isLogged: false, isJoined: false, userId: '', username: undefined })
        }

        // setting up subscription
    }, [])

    return (
        <>
            <MainTitle />
            <Router>
                <NavBar isLogged={isLogged} handleLogout={handleLogout}/>
                <Routes>
                    <Route path='/' 
                        element={<Home username={username} />} />
                    <Route path='/about' 
                        element={<About />} />
                    <Route path='/board' 
                        element={<Board isLogged={isLogged} />} />
                    <Route path='/postwrite' 
                        element={<PostWrite isLogged={isLogged} userId={userId} username={username} />} />
                    <Route path='/postview/:postId' 
                        element={<PostView userId={userId} />} />
                    <Route path='/postmodify/:postId' 
                        element={<PostModify isLogged={isLogged} userId={userId} username={username} />} />
                    <Route path='/clinics' 
                        element={<Clinics />} />
                    <Route path='/survey' 
                        element={<Survey isLogged={isLogged} isJoined={isJoined} userId={userId} username={username} handleJoin={handleJoin} />} />
                    <Route path='/articles' 
                        element={<Articles />} />
                    <Route path='/login' 
                        element={<Login isLogged={isLogged} />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
