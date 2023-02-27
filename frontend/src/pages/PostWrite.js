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
            <div className='subTitle'>You need to login.<br />로그인이 필요합니다.</div>
            :
            <>
                <div className='subTitle'>Write Post 글쓰기</div>
                <form className='postWriteForm'>
                    <label>Title 제목</label><br /><br />
                    <input type="text" name="title" value={title} onChange={handleChange} />
                    <br /><br />
                    <label>User Name 작성자: </label>{username.substring(0, username.length / 2) + '***'}
                    <br /><br />
                    <label>Body 본문</label><br /><br />
                    <textarea rows="20" name="body" value={body} onChange={handleChange}></textarea>
                    <br /><br />
                    <Link to='/board'><button>Cancel 취소</button></Link>
                    &nbsp;
                    <button style={{ color: 'blue' }} onClick={handleWrite}>Submit 확인</button>
                </form>
            </>
    )
}

export default PostWrite