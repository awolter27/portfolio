function Projects({ projects }) {
    return (
        <>
            <h1 className='projects-heading'>PROJECTS</h1>
            <div className='projects-outer-div'>
                {projects.map((project, idx) => {
                    return (
                        <div className='projects-inner-div' key={idx}>
                            <h1 className='projects-name'>{project.name}</h1>
                            <img id='projects-image' src={project.image} alt={project.name} />
                            <div>
                                <a href={project.live} rel="noreferrer" target='_blank'>
                                    <button>Website</button>
                                </a>
                                <a href={project.git} rel="noreferrer" target='_blank'>
                                    <button>GitHub</button>
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Projects;