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
            <div className='subTitle'>You need to login.<br />로그인이 필요합니다.</div>
        )
    }

    return (
        userId !== currentPost.UserId
            ?
            <div className='subTitle'>This is not the post you wrote.<br />이 포스트의 작성자가 아닙니다.</div>
            :
            <>
                <div className='subTitle'>Modify Post 글 수정</div>
                <form className='postWriteForm'>
                    <label>Title 제목</label><br /><br />
                    <input type="text" name="title" value={currentPost.title} onChange={handleChange} />
                    <br /><br />
                    <label>User Name 작성자: </label>{currentPost.username.substring(0, currentPost.username.length / 2) + '***'}
                    <br /><br />
                    <label>Body 본문</label><br /><br />
                    <textarea rows="20" name="body" value={currentPost.body} onChange={handleChange}></textarea>
                    <br /><br />
                    <Link to={`/postview/${postId}`}><button>Cancel 취소</button></Link>
                    &nbsp;
                    <button style={{ color: 'blue' }} onClick={handleModify}>Submit 확인</button>
                </form>
            </>
    )
}

export default PostModify