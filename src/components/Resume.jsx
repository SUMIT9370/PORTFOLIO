import './Resume.css'

const Resume = () => {
  const experiences = [
    {
      title: "Software Engineer & Data Scientist",
      company: "Leading Tech Firms & Startups",
      period: "2019 - Present",
      description: "Developed end-to-end ML pipelines, built scalable software systems, and led automation initiatives. Specialized in Python, machine learning, and cloud technologies. Mentored junior developers and delivered high-impact solutions across multiple industries."
    },
    {
      title: "Full-Stack Developer",
      company: "Freelance Consulting",
      period: "2020 - Present",
      description: "Delivered custom web applications using Django, Flask, React, and Node.js. Built data-driven solutions for clients across finance, healthcare, and retail sectors. Achieved 40% improvement in process efficiency through automation."
    },
    {
      title: "Data Science Intern",
      company: "Tech Companies",
      period: "2018 - 2019",
      description: "Worked on predictive analytics, NLP, and computer vision projects. Gained hands-on experience with Pandas, scikit-learn, and TensorFlow. Contributed to research publications and open-source projects."
    }
  ]

  const education = [
    {
      degree: "BTech in Artificial Intelligence",
      institution: "Dr. Babasaheb Ambedkar Technological University (DBATU)",
      period: "Aug 2023 – Sep 2027",
      description: "Focus on Computer Science fundamentals, Object-Oriented Programming, and applied AI/ML."
    }
  ]

  const certificates = [
    {
      title: "AI/ML & its scope for career and academic growth",
      issuer: "CESSA Technosphere",
      year: "2024"
    }
  ]

  return (
    <section id="resume" className="resume">
      <div className="container">
        <h2 className="section-title" data-bg="Resume">Resume</h2>
        <p className="section-subtitle">
          Here's a summary of my professional journey and educational background.
        </p>
        
        <div className="resume-content">
          <div className="resume-section">
            <h3 className="resume-section-title">Experience</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">{exp.title}</h4>
                    <p className="timeline-company">{exp.company}</p>
                    <p className="timeline-period">{exp.period}</p>
                    <p className="timeline-description">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="resume-section">
            <h3 className="resume-section-title">Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">{edu.degree}</h4>
                    <p className="timeline-company">{edu.institution}</p>
                    <p className="timeline-period">{edu.period}</p>
                    <p className="timeline-description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title">Featured Certificate</h3>
            <div className="timeline">
              {certificates.map((cert, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">{cert.title}</h4>
                    <p className="timeline-company">{cert.issuer}</p>
                    <p className="timeline-period">{cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
