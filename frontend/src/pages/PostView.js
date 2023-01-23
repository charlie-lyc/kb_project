import '../css/postView.css'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'


const PostView = ({ username }) => {
    const { postId } = useParams()
    const [currentPost, setCurrentPost] = useState({})

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
        setCurrentPost(foundPost)
    }, [postId])

    const handleDelete = () => {
        alert('Request deleting post...')
        return
    }

    return (
        <div className='postViewForm'>
            <h3 className='subTitle'>{currentPost.title}</h3>
            <p className='postUsername'>{currentPost.username}</p>
            <p className='postBody'>{currentPost.body}</p>
            <br /><br />
            <button><Link to='/board'>Cancel</Link></button>
            {
                username === currentPost.username &&
                <>
                    <Link to={`/postmodify/${currentPost.id}`}>
                        <button>Modify</button>
                    </Link>
                    <button onClick={handleDelete}>Delete</button>
                </>
            }

        </div>
    )
}

export default PostView