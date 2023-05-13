import Typed from 'typed.js';

function About({ about }) {
    return (
        <>
            <h1 className='about-heading'>ABOUT</h1>
            <div className='about'>
                <h2 className='name-about'>{about.intro}</h2>
                <p className='bio'>{about.bio}</p>
            </div>
        </>
    );
}

export default About;