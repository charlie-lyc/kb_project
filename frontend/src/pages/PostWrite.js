import '../css/postWrite.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
// import server from '../configs/serverConfig'


const PostWrite = ({ isLogged, userId, username, setAuth }) => {
    const [post, setPost] = useState({ 
        title: '', 
        body: '' 
    })
    const navigate = useNavigate()

    const { title, body } = post

    const handleChange = (e) => {
        // console.log(e.target.name, e.target.value) // <<<<<<<<<
        setPost(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    // console.log(server[process.env.NODE_ENV]) // <<<<<<<<<

    const handleWrite = async (e) => {
        e.preventDefault()
        if (title === '' || body === '') {
            alert('Please fill the Title and Body items.')
            return
        }
        const res = await axios.post(
            `/api/post`, 
            { title, body }
        )
        // console.log(res.status) // <<<<<<<<<
        if (res.status === 201 && res.data.message === 'Created') {
            setPost({ title: '', body: '' })
            navigate(`/postview/${res.data.postId}`)
        }
    }

    return (
        !isLogged
            ?
            <div className='subTitle'>You need to login.</div>
            :
            <>
                <div className='subTitle'>Write Post</div>
                <form className='postWriteForm'>
                    <label>Title</label><br /><br />
                    <input type="text" name="title" value={title} onChange={handleChange} />
                    <br /><br />
                    <label>User Name : </label>{username}
                    <br /><br />
                    <label>Body</label><br /><br />
                    <textarea rows="20" name="body" value={body} onChange={handleChange}></textarea>
                    <br /><br />
                    <Link to='/board'><button>Cancel</button></Link>
                    &nbsp;
                    <button style={{ color: 'blue' }} onClick={handleWrite}>Submit</button>
                </form>
            </>
    )
}

export default PostWrite