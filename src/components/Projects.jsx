import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Project Title',
      description: 'Short description of the project and what problem it solves. This is a placeholder to be replaced later.',
      image: '/project1.jpg',
      technologies: ['Tech 1', 'Tech 2', 'Tech 3'],
      link: '#'
    },
    {
      title: 'Project Title',
      description: 'Short description of the project and what problem it solves. This is a placeholder to be replaced later.',
      image: '/project2.jpg',
      technologies: ['Tech 1', 'Tech 2', 'Tech 3'],
      link: '#'
    },
    {
      title: 'Project Title',
      description: 'Short description of the project and what problem it solves. This is a placeholder to be replaced later.',
      image: '/project3.jpg',
      technologies: ['Tech 1', 'Tech 2', 'Tech 3'],
      link: '#'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title" data-bg="Projects">Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent projects that showcase my skills and experience.
        </p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.link} className="btn btn-primary">View Project</a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
