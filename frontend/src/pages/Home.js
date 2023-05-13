function Home() {
    return (
        <>
            <div className='home-outer-div'>
                <div className='home-left-inner-div'>
                    <img id='headshot' src='https://i.imgur.com/GuFsgvX_d.jpg?maxwidth=520&shape=thumb&fidelity=high' alt='Headshot' />
                </div>
                <div className='home-right-inner-div'>
                    <h1 className='home-name'>Allison Wolter</h1>
                    <h2 className='home-title'>Software Engineer</h2>
                    <div className='resume-div'>
                        <a className='view-resume' href="/allison-wolter's-resume.pdf" target="_blank" rel="noreferrer">View Resume</a>
                        <a className='download-resume' href="/allison-wolter's-resume.pdf" download>Download Resume</a>
                    </div>
                </div >
            </div>
        </>
    );
}

export default Home;