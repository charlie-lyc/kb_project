import '../css/postWrite.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const PostWrite = ({ isLogged, username }) => {
    const [writtenPost, setWrittenPost] = useState({
        postTitle: '',
        postBody: ''
    })

    const { postTitle, postBody } = writtenPost

    const handleChange = (e) => {
        // console.log(e.target.name, e.target.value)
        setWrittenPost(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const handleWrite = (e) => {
        e.preventDefault()
        alert(`Title: ${postTitle}`)
        alert(`Body: ${postBody}`)
        alert('Request writing post...')
        return
    }

    return (
        !isLogged ?
            <div className='subTitle'>You need to login.</div>
            :
            <>
                <div className='subTitle'>Write Post</div>
                <form className='writeForm'>
                    <label>Title</label><br /><br />
                    <input type="text" name="postTitle" value={postTitle} onChange={handleChange} />
                    <br /><br />
                    <label>User Name : </label>{username}
                    <br /><br />
                    <label>Body</label><br /><br />
                    <textarea rows="20" name="postBody" value={postBody} onChange={handleChange}></textarea>
                    <br /><br />
                    <Link to='/board'>
                        <button>Cancel</button>
                    </Link>
                    <button onClick={handleWrite}>Submit</button>
                </form>
            </>
    )
}

export default PostWrite