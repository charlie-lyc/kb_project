import '../css/postView.css'
import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { DiscussionEmbed } from 'disqus-react'
import server from '../configs/serverConfig'


const PostView = ({ userId }) => {
    const { postId } = useParams()
    const [currentPost, setCurrentPost] = useState({})
    const navigate = useNavigate()

    // console.log(server[process.env.NODE_ENV]) // <<<<<<<<<

    const handleDelete = async () => {
        const reply = window.confirm('Do you want to delete this post?')
        if (reply) {
            const res = await axios.delete(`/api/post/${postId}`)
            // console.log(res.status) // <<<<<<<<<
            if (res.status === 200 && res.data.message === 'OK') {
                navigate('/board')
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

    // console.log(userId, currentPost.UserId) // <<<<<<<<<
    if (!currentPost.id) {
        return (
            <div className='subTitle'>Not Found</div>
        )
    }

    return (
        <>
            <div className='postViewForm'>
                <h3 className='subTitle'>{currentPost.title}</h3>
                <p className='postUsername'>{currentPost.username}</p>
                <p className='postBody'>{currentPost.body}</p>
                <br /><br />
                <button><Link to='/board'>Back</Link></button>
                &nbsp;
                {
                    userId === currentPost.UserId &&
                    <>
                        <Link to={`/postmodify/${currentPost.id}`}><button style={{ color: 'blue' }}>Modify</button></Link>
                        &nbsp;
                        <button style={{ color: 'red' }} onClick={handleDelete}>Delete</button>
                    </>
                }
            </div>
            <div className='disqus'>
                <DiscussionEmbed
                    shortname={'longcovidteen'}
                    config={{
                        url: `${server[process.env.NODE_ENV]}/postview/${currentPost.id}`,
                        identifier: currentPost.id,
                        title: currentPost.title
                    }}
                />
            </div>
        </>
    )
}

export default PostView