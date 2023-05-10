function Projects({ projects }) {
    return (
        <div className='outer-div-projects'>
            {projects.map((project) => {
                return (
                    <div className='inner-div-projects'>
                        <h1 className='name-projects'>{project.name}</h1>
                        <img id='image-projects' src={project.image} alt={project.name} />
                        <div>
                            <a href={project.git} target='_blank'>
                                <button>Github</button>
                            </a>
                            <a href={project.live} target='_blank'>
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