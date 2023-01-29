import '../css/home.css'


const Home = ({ username }) => {
    
    return (
        <div className='home'>
            <div className='subTitle'>Welcome, {username}!</div>
            <div className='homeContent'>

                This is SJA capstone project.
                
            </div>
        </div>
    )
}

Home.defaultProps = {
    username: 'Everyone'
}

export default Home