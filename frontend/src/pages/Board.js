import '../css/board.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import PostItem from '../components/PostItem'
// import server from '../configs/serverConfig'


const Board = ({ isLogged }) => {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()

    const handlePost = () => {
        if (isLogged) navigate('/postwrite')
        else navigate('/login')
    }   

    // console.log(server[process.env.NODE_ENV]) // <<<<<<<<<

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(`/api/post`)
            // console.log(res.data) // <<<<<<<<<
            if (res.data.posts) {
                setPosts(res.data.posts)
            }
        }
        fetchPosts()
    }, [])

    return (
        <div className='board'>
            <div className='subTitle'>Post Board</div>
            <div className='postBtnContainer'>
                <button className='postBtn' onClick={handlePost}>Write Post 글쓰기</button>
            </div>
            <br />
            <hr className="articleHr" />
            <br />
            {
                posts.length === 0 ?
                    <div className='subTitle'>There is no post yet.<br />작성한 포스트가 없습니다.</div>
                    :
                    posts.map(post => <PostItem key={post.id} post={post} />)
            }
        </div>
    )
}

export default Board