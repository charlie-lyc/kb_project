import '../css/board.css'
import { useNavigate } from 'react-router-dom'
import PostItem from '../components/PostItem'


const Board = ({ isLogged, posts }) => {
    const navigate = useNavigate()

    const handlePost = () => {
        if (!isLogged) {
            navigate('/login')
        } else {
            navigate('/postwrite')
        }
    }

    return (
        <div className='board'>
            <div className='subTitle'>Post Board</div>
            <div className='postBtnContainer'>
                <button className='postBtn' onClick={handlePost}>
                    Write Post
                </button>
            </div>
            {
                posts.length === 0 ?
                    <div className='subTitle'>There is no post yet.</div>
                    :
                    posts.map(post => <PostItem key={post.id} post={post} />)
            }
        </div>
    )
}

export default Board