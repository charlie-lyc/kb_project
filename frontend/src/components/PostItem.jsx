import '../css/postItem.css'
import { Link } from 'react-router-dom'


const PostItem = ({ post }) => {

    return (
        <div>
            <Link to={`/postview/${post.id}`}>
                <h3 className='postTitle'>{post.title}</h3>
            </Link>
            {/* <p className='postUsername'>{post.username}</p> */}
            <p className='postUsername'>{post.username.substring(0, post.username.length / 2) + '***'}</p>
            <p className='postBody'>{post.body.substring(0, 200) + '...'}</p>
            <br />
            <hr className="articleHr" />
            <br />
        </div>
    )
}

export default PostItem