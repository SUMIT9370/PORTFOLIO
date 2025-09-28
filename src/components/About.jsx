import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title" data-bg="About">About Me</h2>
        <p className="section-subtitle">
          Hi everyone, I am SUMit Patil, an aspiring engineering student diving into the world of
          Artificial Intelligence and Machine Learning. I’m passionate about learning new things
          and sharing knowledge through my journey — actively writing on Blogger and building
          real‑world projects. The best part? I’m doing it myself.
        </p>
        
        <div className="about-content">
          <div className="about-image">
            <img src="/image.png" alt="Sumit Patil" />
          </div>
          <div className="about-details">
            <ul className="info-list">
              <li><span>Name:</span><strong>Sumit Patil</strong></li>
              <li><span>Location:</span><strong>Tasgaon, Maharashtra, India</strong></li>
              <li><span>Education:</span><strong>BTech in Artificial Intelligence (2023–2027), DBATU</strong></li>
              <li><span>Interests:</span><strong>AIML, MERN stack, Python, C, blogging, self‑learning</strong></li>
            </ul>
            <div className="project-count">
              <strong>25+ Projects completed</strong>
            </div>
            <a href="/Sumit_Patil_CV.pdf" className="btn btn-primary" download>
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
