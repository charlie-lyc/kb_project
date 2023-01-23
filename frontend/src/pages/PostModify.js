import '../css/postWrite.css'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'


const PostModify = ({ isLogged, username }) => {
    const { postId } = useParams()
    const [modifiedPost, setModifiedPost] = useState({
        postUsername: '',
        postTitle: '',
        postBody: ''
    })

    const { postUsername, postTitle, postBody } = modifiedPost

    useEffect(() => {
        // console.log(postId)
        const posts = [
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
        ]
        const foundPost = posts.find(ele => ele.id === parseInt(postId))
        // console.log(foundPost)
        setModifiedPost({
            postUsername: foundPost.username,
            postTitle: foundPost.title,
            postBody: foundPost.body
        })
    }, [postId])

    const handleChange = (e) => {
        // console.log(e.target.name, e.target.value)
        setModifiedPost(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const handleModify = (e) => {
        e.preventDefault()
        alert(`Title: ${postTitle}`)
        alert(`Body: ${postBody}`)
        alert('Request modifying post...')
        return
    }

    if (!isLogged) {
        return (
            <div className='subTitle'>You need to login.</div>
        )
    }

    return (
        username !== postUsername ?
            <div className='subTitle'>This is not the post you wrote.</div>
            :
            <>
                <div className='subTitle'>Modify Post</div>
                <form className='writeForm'>
                    <label>Title</label><br /><br />
                    <input type="text" name="postTitle" value={postTitle} onChange={handleChange} />
                    <br /><br />
                    <label>User Name : </label>{username}
                    <br /><br />
                    <label>Body</label><br /><br />
                    <textarea rows="20" name="postBody" value={postBody} onChange={handleChange}></textarea>
                    <br /><br />
                    <Link to={`/postview/${postId}`}><button>Cancel</button></Link>
                    <button onClick={handleModify}>Submit</button>
                </form>
            </>
    )
}

export default PostModify