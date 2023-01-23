import '../css/about.css'


const About = () => {

    return (
        <div className='about'>
            <div className='subTitle'>Purpose of This Website</div>
            <div className='aboutContent'>
                {/* <img src={이미지이름.jpeg} /> */}
                <p> Would creating a community for post-COVID teenagers allow them to feel supported and included,
                    and give the potential for future long-COVID research?
                </p>
                <p>
                    This website is created to provide a long COVID community for teenagers. After the acute infection of SARS-CoV-2 in 2022,
                    I started to experience long COVID symptoms. Even though I visited doctors, I couldn't get effective treatment,
                    and I felt I was the only student who was having the aftereffects. However, after reading long COVID research articles,
                    I found out that the long COVID symptoms appear quite frequently for teenagers and adolescents.
                    To provide an online community where teenagers can share their experiences and communicate to make them feel supported and included,
                    and collect the data in easier way for researchers, I decided to create this website.
                </p>
            </div>

            <div className='subTitle'>What is Long COVID</div>
            <div className='aboutContent'>
            {/* <img src={이미지이름.jpeg} /> */}
            <p>
                Long-term symptoms experienced after the SARS-CoV-2 infection.
                The symptoms are not only cardiorespiratory related, but also are related to neuropsychiatric, gastrointestinal, and so on.
                According to WHO, shortness of breath,brain fog, fatigue, and cough are most commonly experienced.
                Due to its variety, it is not still clear to define whether it is post COVID-19 condition, and
                further research is needed for clarification.
            </p>
            </div>
        </div>
    )
}

export default About