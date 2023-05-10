function Projects({ projects }) {
    return (
        <div className='outer-div-projects'>
            {projects.map((project, idx) => {
                return (
                    <div className='inner-div-projects' key={idx}>
                        <h1 className='name-projects'>{project.name}</h1>
                        <img id='image-projects' src={project.image} alt={project.name} />
                        <div>
                            <a href={project.git} rel="noreferrer" target='_blank'>
                                <button>Github</button>
                            </a>
                            <a href={project.live} rel="noreferrer" target='_blank'>
                                <button>Live Site</button>
                            </a>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Projects;