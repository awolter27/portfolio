function About({ about }) {
    return (
        <div className='about'>
            <h2 className='name-about'>{about.name}</h2>
            <h3 className='email'>{about.email}</h3>
            <p className='bio'>{about.bio}</p>
        </div>
    );
}

export default About;