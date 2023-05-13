import Typed from 'typed.js';

function About({ about }) {
    Typed()

    return (
        <div className='about'>
            <h2 className='name-about'>{about.intro}</h2>
            <p className='bio'>{about.bio}</p>
        </div>
    );
}

export default About;