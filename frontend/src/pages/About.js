import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js'

function About({ about }) {
    const textRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(textRef.current, {
            strings: ["Hi, I'm Allie ... "],
            typeSpeed: 45,
            showCursor: false,
        })
    }, []);

    return (
        <div className='about-div'>
            <h1 className='about-heading'>ABOUT</h1>
            <h2 className='about-name' ref={textRef}></h2>
            <p className='about-bio'>{about.bio}</p>
        </div>
    );
}

export default About;