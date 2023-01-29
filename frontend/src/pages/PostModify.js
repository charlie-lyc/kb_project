import '../css/postWrite.css'
import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
// import server from '../configs/serverConfig'


const PostModify = ({ isLogged, userId }) => {
    const { postId } = useParams()
    const [currentPost, setCurrentPost] = useState({})
    const navigate = useNavigate()

    const handleChange = (e) => {
        // console.log(e.target.name, e.target.value)
        setCurrentPost(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    // console.log(server[process.env.NODE_ENV]) // <<<<<<<<<

    const handleModify = async (e) => {
        e.preventDefault()
        if (currentPost.title === '' || currentPost.body === '') {
            alert('Please fill the Title and Body items.')
            return
        }
        const reply = window.confirm('Do you want to modify this post?')
        if (reply) {
            const res = await axios.put(
                `/api/post/${postId}`, 
                { title: currentPost.title, body: currentPost.body }
            )
            // console.log(res.status) // <<<<<<<<<
            if (res.status === 200 && res.data.message === 'OK') {
                navigate(`/postview/${currentPost.id}`)
            }
        }
    }

    useEffect(() => {
        const fetchCurrentPost = async () => {
            // console.log(postId) // <<<<<<<<<
            const res = await axios.get(`/api/post/${postId}`)
            // console.log(res.data) // <<<<<<<<<
            if (res.data.post) {
                setCurrentPost(res.data.post)
            }
        } 
        fetchCurrentPost()
    }, [postId])

    if (!isLogged) {
        return (
            <div className='subTitle'>You need to login.</div>
        )
    }

    return (
        userId !== currentPost.UserId ?
            <div className='subTitle'>This is not the post you wrote.</div>
            :
            <>
                <div className='subTitle'>Modify Post</div>
                <form className='postWriteForm'>
                    <label>Title</label><br /><br />
                    <input type="text" name="title" value={currentPost.title} onChange={handleChange} />
                    <br /><br />
                    <label>User Name : </label>{currentPost.username}
                    <br /><br />
                    <label>Body</label><br /><br />
                    <textarea rows="20" name="body" value={currentPost.body} onChange={handleChange}></textarea>
                    <br /><br />
                    <Link to={`/postview/${postId}`}><button>Cancel</button></Link>
                    &nbsp;
                    <button style={{ color: 'blue' }} onClick={handleModify}>Submit</button>
                </form>
            </>
    )
}

export default PostModify