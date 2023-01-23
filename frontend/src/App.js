import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
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
    // State Hook
    const [auth, setAuth] = useState({
        isLogged: false,
        isJoined: false,
        username: 'Jane' // For displaying username or default value
    })
    const [posts, setPosts] = useState([])

    const { isLogged, isJoined, username } = auth

    const handleLogin = () => {
        setAuth(prevState => ({ ...prevState, isLogged: true }))
    }

    const handleLogout = () => {
        setAuth(prevState => ({ ...prevState, isLogged: false }))
    }

    // Effect Hook for Side Effects
    useEffect(() => {
        // componentDidMount() or componentDidUpdate()
        setPosts(() => [
            {
                id: 1,
                username: 'John',
                title: 'First Post',
                body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                id: 2,
                username: 'Jane',
                title: 'Second Post',
                body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                id: 3,
                username: 'John',
                title: 'Third Post',
                body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
        ])
        // componentWillUnmount()
        // return function () {
        //
        // }
        // setting up subscription
    }, [])

    return (
        <>
            <MainTitle />
            <Router>
                <NavBar isLogged={isLogged} handleLogout={handleLogout} />
                <Routes>
                    <Route path='/' element={<Home username={username} />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/board' element={<Board isLogged={isLogged} posts={posts} />} />
                    <Route path='/postview/:postId' element={<PostView username={username} />} />
                    <Route path='/postwrite' element={<PostWrite isLogged={isLogged} username={username} />} />
                    <Route path='/postmodify/:postId' element={<PostModify isLogged={isLogged} username={username} />} />
                    <Route path='/clinics' element={<Clinics />} />
                    <Route path='/survey' element={<Survey isJoined={isJoined} />} />
                    <Route path='/articles' element={<Articles />} />
                    <Route path='/login' element={<Login isLogged={isLogged} handleLogin={handleLogin} />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
